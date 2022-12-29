import React from 'react'
import { isMobile } from 'react-device-detect'
import { Button, Container, Dropdown, Grid, Header, Icon, Input, Label, Radio, Segment } from 'semantic-ui-react'
import Duelist from './Game/Duelist'
import Calculator from './Game/Calculator'
import { getChannelByGame, getChannelByMirror } from './lib/channel'
import AppFooter from './AppFooter'
import Command from './Game/Command'
import DesktopCalculator from './Game/DesktopCalculator'
import useTranslation from './locales'
import LocalesDropdown from './locales/Dropdown'
import localizedOptions from './lib/localizedOptions'

const DEFAULT_IMAGE_URL = '/cardback.png'
const MATCH_OPTIONS = [0, 3, 5]
const MATCH_TIME_OPTIONS = [0, -1, 30, 40, 50, 60]

const Game = ({ gameId }) => {
  const { t: tMatchOptions } = useTranslation('MatchOptions')
  const { t: tMatchTimeOptions } = useTranslation('MatchTimeOptions')
  const { t } = useTranslation('Game')
  const channel = React.useRef(null)
  const sendData = (overrides = {}) => {
    channel.current && channel.current.publish('update', { players, match, timer, ...overrides })
  }

  const [desktopMode, setDesktopMode] = React.useState(!isMobile)
  const [remoteControl, setRemoteControl] = React.useState('')
  const setMinus = (player, amount) => {
    const clone = [...players]
    clone[player].lp = clone[player].lp - amount
    if (clone[player].lp < 0) { clone[player].lp = 0 }
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

  const resetMatch = () => {
    resetLP()
    setMatch(new Array(match.length).fill(-1))
  }
  const syncDevice = () => {
    setRemoteControl('')
    getChannelByMirror(remoteControl).publish('update', { id: gameId, state: { players, match } })
  }
  const stopTimer = () => {
    const newTimer = { option: timer.option, running: false }

    setTimer(newTimer)
    setClock(0)
    sendData({ timer: newTimer })
  }
  const pauseTimer = () => {
    const newTimer = { option: timer.option, running: false, remainingTime: clock }

    setTimer(newTimer)
    sendData({ timer: newTimer })
  }
  const resumeTimer = () => {
    const timeOption =
      timer.option === -1 ? { startedAt: new Date().getTime() - clock * 1000 } :
        { endsAt: new Date().getTime() + clock * 1000 }
    const newTimer = { option: timer.option, ...timeOption, running: true }

    setTimer(newTimer)
    sendData({ timer: newTimer })
  }
  const startTimer = () => {
    const timeOption =
      timer.option === -1 ? { startedAt: new Date().getTime() } :
        { endsAt: new Date().getTime() + (timer.option * 60 * 1000) }
    const newTimer = { option: timer.option, ...timeOption, running: true }

    setTimer(newTimer)
    sendData({ timer: newTimer })
  }
  const changeOption = (option) => {
    const newTimer = { option, running: false }

    setTimer(newTimer)
    sendData({ timer: newTimer })
  }

  const [players, setPlayers] = React.useState([
    { name: '', deck: '', deckUrl: DEFAULT_IMAGE_URL, lp: 8000 },
    { name: '', deck: '', deckUrl: DEFAULT_IMAGE_URL, lp: 8000 }
  ])

  const [decks, setDecks] = React.useState([])
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

  React.useEffect(sendData, [players, match]) // eslint-disable-line
  React.useEffect(() => {
    if (timeoutRef.current !== null) { clearTimeout(timeoutRef.current) }

    timeoutRef.current = setTimeout(() => {
      if (!timer.running) return

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
            title={t('player', { count: 1 })}
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
            title={t('player', { count: 2 })}
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
    {
      desktopMode ? <>
        <DesktopCalculator
          onMinus={setMinus}
          onPlus={setPlus}
          onDivide={setDivide}
          onReset={resetLP}
          onSet={setLP}
        />
        <Command
          onMinus={setMinus}
          onPlus={setPlus}
          onDivide={setDivide}
          onReset={resetLP}
          onSet={setLP}
          onGameResult={setGameResult}
        />
      </> : <Calculator
        onMinus={setMinus}
        onPlus={setPlus}
        onDivide={setDivide}
        onReset={resetLP}
        onSet={setLP}
      />
    }
    <Segment textAlign='center' color='grey'>
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
      <Dropdown
        selection options={localizedOptions(MATCH_OPTIONS, tMatchOptions)}
        value={match.length}
        onChange={(_, { value }) => { setMatch(new Array(value).fill(-1)) }} />
      {
        match.length > 0 && <>
          <Header size="small" textAlign='center'>{t('whoWon')}</Header>
          <Button.Group>
            <Button basic color='blue' onClick={() => setGameResult(0)}>{players[0].name || t('player', { count: 1 })}</Button>
            <Button basic color='yellow' onClick={() => setGameResult(-2)}>{t('draw')}</Button>
            <Button basic color='red' onClick={() => setGameResult(1)}>{players[1].name || t('player', { count: 2 })}</Button>
          </Button.Group>
          <div style={{ marginTop: '10px' }}>
            <Button onClick={resetMatch}>{t('reset')}</Button>
          </div>
        </>
      }
    </Segment>

    <Segment textAlign='center' color='grey'>
      <Header textAlign='center'>{t('clock')}</Header>
      {!timer.running && <Dropdown
        selection options={localizedOptions(MATCH_TIME_OPTIONS, tMatchTimeOptions)}
        value={timer.option}
        onChange={(_, { value: option }) => { changeOption(option) }} />}
      {
        Boolean(timer.option) && (timer.running ?
          <Button basic onClick={pauseTimer} color='red'>{t('timerPause')}</Button> :
          (
            Boolean(timer.remainingTime) ? <>
              <Button basic style={{ marginLeft: 5 }} onClick={stopTimer} color='red'>{t('timerStop')}</Button>
              <Button basic style={{ marginLeft: 5 }} onClick={resumeTimer} color='green'>{t('timerResume')}</Button>
            </> :
              <Button basic style={{ marginLeft: 5 }} onClick={startTimer} color='green'>{t('timerStart')}</Button>)
        )
      }
      <div style={{ marginTop: 10 }}>
        <Label size="big">
          {
            Boolean(clock) && clock > 0 ? <>
              {Math.floor(clock / 60).toString().padStart(2, '0')}:
              {Math.floor(clock % 60).toString().padStart(2, '0')}
            </> : "00:00"
          }
        </Label>
      </div>
    </Segment>

    <Segment textAlign='center' color='grey'>
      <Header textAlign='center'>{t('desktopMode')}</Header>
      <p>{t('desktopModeDescription')}</p>
      <Radio toggle checked={desktopMode} onChange={() => setDesktopMode(!desktopMode)} />
    </Segment>

    <Segment textAlign='center' color='grey'>
      <Header textAlign='center'>{t('sync')}</Header>
      <p>{t('syncDescription')}</p>
      <Input
        onChange={(e) => { setRemoteControl(e.target.value.toUpperCase()) }}
        value={remoteControl}
        action={<Button onClick={syncDevice} children={t('syncSubmit')} />}
      />
    </Segment>

    <Segment textAlign='center' color='grey'>
      <Header textAlign='center'>{t('language')}</Header>
      <LocalesDropdown />
    </Segment>

    <AppFooter />
  </Container>
}

export default Game;
