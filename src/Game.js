import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Duelist from './Game/Duelist'
import Calculator from './Game/Calculator'

const Game = ({ props }) => {
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
      setPlayers(clone)
    }
  }

  const [players, setPlayers] = React.useState([
    { name: '', deck: '', lp: 8000 },
    { name: '', deck: '', lp: 8000 }
  ])

  const [decks, setDecks] = React.useState([])

  React.useEffect(() => {
    fetch('https://remote-decks.vercel.app/api/decks').then((response) => {
      response.json().then((remoteDecks) => {
        setDecks([{ name: '', uid: '', imageUrl: '/cardback.png'}, ...remoteDecks])
      })
    })
  }, [])

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
  </Container>
}

export default Game;
