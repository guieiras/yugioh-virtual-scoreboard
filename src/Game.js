import React from 'react'
import { Button, Container, Grid, Segment } from 'semantic-ui-react'
import Duelist from './Game/Duelist'
import Calculator from './Game/Calculator'
import getChannelByGame from './lib/channel'

const DEFAULT_IMAGE_URL = '/cardback.png'

const Game = ({ gameId }) => {
  const channel = React.useRef(null)
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
  const toggleLayout = () => {
    setStyles({
      ...styles,
      layout: styles.layout === 'landscape' ? 'vertical' : 'landscape'
    })
  }

  const [players, setPlayers] = React.useState([
    { name: '', deck: '', deckUrl: DEFAULT_IMAGE_URL, lp: 8000 },
    { name: '', deck: '', deckUrl: DEFAULT_IMAGE_URL, lp: 8000 }
  ])

  const [decks, setDecks] = React.useState([])
  const [styles, setStyles] = React.useState({
    layout: 'landscape'
  })

  React.useEffect(() => {
    fetch(process.env.REACT_APP_DECKS_URL).then((response) => {
      response.json().then((remoteDecks) => {
        setDecks([{ name: '', uid: '', imageUrl: DEFAULT_IMAGE_URL }, ...remoteDecks])
      })
    })
    channel.current = getChannelByGame(gameId)
  }, [])

  React.useEffect(() => {
    channel.current && channel.current.publish('update', { players, styles })
  })

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
    />
    <Segment textAlign='center' color='grey'>
      <Button secondary onClick={toggleLayout}>
        {styles.layout === 'landscape' ? 'Horizontal' : 'Vertical'}
      </Button>
    </Segment>
  </Container>
}

export default Game;
