import React from 'react'
import { Button, Container, Dropdown, Grid, Header, Icon, Input, Label, Segment } from 'semantic-ui-react'
import Duelist from './Game/Duelist'
import Calculator from './Game/Calculator'
import { getChannelByGame, getChannelByMirror } from './lib/channel'

const DEFAULT_IMAGE_URL = '/cardback.png'
const MATCH_OPTIONS = [
  { key: 0, text: 'Sem Match', value: 0 },
  { key: 3, text: 'Melhor de 3', value: 3 },
  { key: 5, text: 'Melhor de 5', value: 5 }
]
const MATCH_TIME_OPTIONS = [
  { key: 0, text: 'Nenhum', value: 0 },
  { key: -1, text: 'Progressivo', value: -1 },
  { key: 30, text: '30 minutos', value: 30 },
  { key: 40, text: '40 minutos', value: 40 },
  { key: 50, text: '50 minutos', value: 50 },
  { key: 60, text: '1 hora', value: 60 }
]

const Game = ({ gameId }) => {
  const channel = React.useRef(null)
  const sendData = (overrides = {}) => {
    channel.current && channel.current.publish('update', { players, styles, match, timer, ...overrides })
  }

  const [remoteControl, setRemoteControl] = React.useState('')
  const setMinus = (player, amount) => {
    const clone = [...players]
    clone[player].lp = clone[player].lp - amount
    if(clone[player].lp < 0) { clone[player].lp = 0 }
    setPlayers(clone)
  }
  const setPlus = (player, amount) => {
    const clone = [...players]
    clone[player].lp = clone[player].lp + amount
    setPlayers(clone)
  }
  const setDivide = (player, amount) => {
    const clone = [...players]
    clone[player].lp = Math.ceil(clone[player].lp / amount)
    setPlayers(clone)
  }
  const setLP = (player, newLp) => {
    const clone = [...players]
    clone[player].lp = newLp
    setPlayers(clone)
  }
  const resetLP = () => {
    const clone = [...players]
    clone.forEach((player) => { player.lp = 8000 })
    setPlayers(clone)
  }
  const setName = (player) => {
    return (name) => {
      const clone = [...players]
      clone[player].name = name
      setPlayers(clone)
    }
  }
  const setDeck = (player) => {
    return (deck) => {
      const clone = [...players]
      clone[player].deck = deck
      clone[player].deckUrl = decks.filter((deckObj) => deckObj.uid === deck)[0].imageUrl
      setPlayers(clone)
    }
  }
  const setGameResult = (result) => {
    return () => {
      const clone = [...match]
      let done = false
      clone.forEach((game, idx) => {
        if (!done && game === -1) {
          clone[idx] = result
          done = true
        }
      })
      if (done) {
        resetLP()
        setMatch(clone)
      }
    }
  }
  const resetMatch = () => {
    resetLP()
    setMatch(new Array(match.length).fill(-1))
  }
  const syncDevice = () => {
    setRemoteControl('')
    getChannelByMirror(remoteControl).publish('update', { id: gameId, state: { players, styles, match } })
  }
  const stopTimer = () => {
    setTimer({ option: timer.option, running: false })
  }
  const startTimer = () => {
    const timeOption =
      timer.option === -1 ? { startedAt: new Date().getTime() } :
                            { endsAt: new Date().getTime() + (timer.option * 60 * 1000) }
    const newTimer = { option: timer.option, ...timeOption, running: true }

    setTimer(newTimer)
    sendData({ timer: newTimer })
  }

  const [players, setPlayers] = React.useState([
    { name: '', deck: '', deckUrl: DEFAULT_IMAGE_URL, lp: 8000 },
    { name: '', deck: '', deckUrl: DEFAULT_IMAGE_URL, lp: 8000 }
  ])

  const [decks, setDecks] = React.useState([])
  const [styles] = React.useState({})
  const [match, setMatch] = React.useState([])
  const [timer, setTimer] = React.useState({ option: 0, running: false })
  const [clock, setClock] = React.useState(0)
  const timeoutRef = React.useRef(null)

  React.useEffect(() => {
    fetch(process.env.REACT_APP_DECKS_URL).then((response) => {
      response.json().then((remoteDecks) => {
        setDecks([{ name: '', uid: '', imageUrl: DEFAULT_IMAGE_URL }, ...remoteDecks])
      })
    })
    channel.current = getChannelByGame(gameId)
  }, [gameId])

  React.useEffect(sendData, [players, styles, match]) // eslint-disable-line
  React.useEffect(() => {
    if (timeoutRef.current !== null) { clearTimeout(timeoutRef.current) }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null
      if (timer.startedAt) { setClock((new Date().getTime() - timer.startedAt) / 1000) }
      else if (timer.endsAt) { setClock((timer.endsAt - new Date().getTime()) / 1000) }
      else { setClock(0) }
    }, 1000)
  }, [timer, clock])

  return <Container style={{ padding: '10px' }}>
    <Grid>
      <Grid.Row>
        <Grid.Column width={8} textAlign="center">
          <Duelist
            title="Jogador 1"
            decks={decks}
            name={players[0].name}
            deck={players[0].deck}
            lp={players[0].lp}
            onSetName={setName(0)}
            onSetDeck={setDeck(0)}
          />
        </Grid.Column>
        <Grid.Column width={8} textAlign="center">
          <Duelist
            title="Jogador 2"
            decks={decks}
            name={players[1].name}
            deck={players[1].deck}
            lp={players[1].lp}
            onSetName={setName(1)}
            onSetDeck={setDeck(1)}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Calculator
      onMinus={setMinus}
      onPlus={setPlus}
      onDivide={setDivide}
      onReset={resetLP}
      onSet={setLP}
    />
    <Segment textAlign='center' color='grey'>
      <Header textAlign='center'>Match</Header>
      <div className='ui center' style={{ margin: '10px' }}>
        {
          match.map((game, idx) => <Icon
            key={idx + 1}
            name='circle'
            color={game === -1 ? 'grey' : game === -2 ? 'yellow' : game === 0 ? 'blue' : 'red' }
            size='large'
          />)
        }
      </div>
      <Dropdown
        placeholder='Quantidade de Jogos'
        selection options={MATCH_OPTIONS}
        value={match.length}
        onChange={(_, { value }) => { setMatch(new Array(value).fill(-1)) }} />
      {
        match.length > 0 && <>
          <Header size="small" textAlign='center'>Quem venceu o game atual?</Header>
          <Button.Group>
            <Button basic color='blue' onClick={setGameResult(0)}>{players[0].name || 'Jogador 1'}</Button>
            <Button basic color='yellow' onClick={setGameResult(-2)}>Empate</Button>
            <Button basic color='red' onClick={setGameResult(1)}>{players[1].name || 'Jogador 2'}</Button>
          </Button.Group>
          <div style={{ marginTop: '10px' }}>
            <Button onClick={resetMatch}>Redefinir</Button>
          </div>
        </>
      }
    </Segment>

    <Segment textAlign='center' color='grey'>
      <Header textAlign='center'>Relógio</Header>
      <Dropdown
        placeholder='Tempo'
        selection options={MATCH_TIME_OPTIONS}
        value={timer.option}
        onChange={(_, { value: option }) => { setTimer({ option, running: false }) }} />
      {
        Boolean(timer.option) && (timer.running ?
          <Button basic style={{ marginLeft: 5 }} onClick={stopTimer} color='red'>Zerar</Button> :
          <Button basic style={{ marginLeft: 5 }} onClick={startTimer} color='green'>Iniciar</Button>)
      }
      <div style={{ marginTop: 10 }}>
        {
          Boolean(clock) && <Label size="big">
            { Math.floor(clock / 60).toString().padStart(2, '0') }:
            { Math.floor(clock % 60).toString().padStart(2, '0') }
          </Label>
        }
      </div>
    </Segment>

    <Segment textAlign='center' color='grey'>
      <Header textAlign='center'>Sincronizar tela</Header>
      <p>Digite o código da tela que deseja sincronizar</p>
      <Input
        onChange={(e) => { setRemoteControl(e.target.value.toUpperCase()) } }
        value={remoteControl}
        action={<Button onClick={syncDevice} children='Sincronizar' />}
      />
    </Segment>
  </Container>
}

export default Game;
