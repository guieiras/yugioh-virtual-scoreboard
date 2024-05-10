import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Container, Grid, Header, Icon, Segment } from 'semantic-ui-react'
import DuelistShow from './Game/DuelistShow'
import Calculator from './Game/Calculator'
import { getChannelByGame } from './lib/channel'
import useTranslation from './locales'

const Terminal = () => {
  const { gameId } = useParams()
  const { t } = useTranslation('Game')
  const channel = React.useRef(null)
  const sendData = (overrides = {}) => {
    channel.current && channel.current.publish('update', { players, match, ...overrides })
  }

  const setMinus = (player, amount) => {
    const clone = [...players]
    clone[player].lp = clone[player].lp - amount
    if (clone[player].lp < 0) { clone[player].lp = 0 }
    updatePlayers(clone)
  }
  const setPlus = (player, amount) => {
    const clone = [...players]
    clone[player].lp = clone[player].lp + amount
    updatePlayers(clone)
  }
  const setDivide = (player, amount) => {
    const clone = [...players]
    clone[player].lp = Math.ceil(clone[player].lp / amount)
    updatePlayers(clone)
  }
  const setLP = (player, newLp) => {
    const clone = [...players]
    clone[player].lp = newLp
    updatePlayers(clone)
  }
  const resetLP = () => {
    const clone = [...players]
    clone.forEach((player) => { player.lp = 8000 })
    updatePlayers(clone)
  }
  const setGameResult = (result) => {
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
      updateMatch(clone)
    }
  }

  const resetMatch = () => {
    resetLP()
    updateMatch(new Array(match.length).fill(-1))
  }

  const updatePlayers = (newPlayers) => {
    setPlayers(newPlayers)
    sendData({ players: newPlayers })
  }

  const updateMatch = (newMatch) => {
    setMatch(newMatch)
    sendData({ match: newMatch })
  }

  const [players, setPlayers] = React.useState([
    { name: '', deck: { name: '', images: [], imageIndex: 0, displayName: '' }, lp: 8000 },
    { name: '', deck: { name: '', images: [], imageIndex: 0, displayName: '' }, lp: 8000 }
  ])

  const [match, setMatch] = React.useState([])

  React.useEffect(() => {
    if (gameId) {
      channel.current = getChannelByGame(gameId)
      channel.current.subscribe(({ data }) => {
        setPlayers(data.players)
        setMatch(data.match)
      })
    }
  }, [gameId])

  return <Container style={{ padding: '10px' }}>
    <Grid>
      <Grid.Row>
        <Grid.Column width={8} textAlign="center">
          <DuelistShow name={players[0].name} lp={players[0].lp} />
        </Grid.Column>
        <Grid.Column width={8} textAlign="center">
          <DuelistShow name={players[1].name} lp={players[1].lp} />
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
    { match.length > 0 && <Segment textAlign='center' color='grey'>
      <Header textAlign='center'>{t('match')}</Header>
      <div className='ui center' style={{ margin: '10px' }}>
        {
          match.map((game, idx) => <Icon
            key={idx + 1}
            name='circle'
            color={game === -1 ? 'grey' : game === -2 ? 'yellow' : game === 0 ? 'blue' : 'red'}
            size='large'
          />)
        }
      </div>
      <Header size="small" textAlign='center'>{t('whoWon')}</Header>
      <Button.Group>
        <Button basic color='blue' onClick={() => setGameResult(0)}>{players[0].name || t('player', { count: 1 })}</Button>
        <Button basic color='yellow' onClick={() => setGameResult(-2)}>{t('draw')}</Button>
        <Button basic color='red' onClick={() => setGameResult(1)}>{players[1].name || t('player', { count: 2 })}</Button>
      </Button.Group>
      <div style={{ marginTop: '10px' }}>
        <Button onClick={resetMatch}>{t('reset')}</Button>
      </div>
    </Segment> }
  </Container>
}

export default Terminal;
