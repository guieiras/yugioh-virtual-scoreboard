import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import PlayerCard from './Screen/PlayerCard'

const ScreenCards = ({ match, players, style }) => {
  return <Grid stackable style={{ margin: 0, height: '100vh', backgroundColor: style.background }}>
    <Grid.Column width={7} verticalAlign='middle'>
      <PlayerCard
        deckUrl={players[0].deckUrl}
        name={players[0].name}
        lp={players[0].lp}
        match={match}
        winWith={0} />
    </Grid.Column>
    <Grid.Column width={2} textAlign='center' verticalAlign='middle'>
      <Icon inverted color='grey' name='times' size='huge' />
    </Grid.Column>
    <Grid.Column width={7} verticalAlign='middle'>
      <PlayerCard
        deckUrl={players[1].deckUrl}
        name={players[1].name}
        lp={players[1].lp}
        match={match}
        winWith={1} />
    </Grid.Column>
  </Grid>
}

export default ScreenCards;
