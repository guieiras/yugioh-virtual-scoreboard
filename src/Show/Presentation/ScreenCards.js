import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import Timer from './Cards/Timer'
import PlayerCard from './Screen/PlayerCard'

const ScreenCards = ({ match, players, timer }) => {
  return <Grid stackable style={{ margin: 0, height: '100vh' }} className='presentation screen'>
    <Grid.Column width={7} verticalAlign='middle'>
      <PlayerCard
        deckUrl={players[0].deck.images[players[0].deck.imageIndex]}
        name={players[0].name}
        lp={players[0].lp}
        match={match}
        winWith={0} />
    </Grid.Column>
    <Grid.Column width={2} textAlign='center' verticalAlign='middle'>
      { Boolean(timer && timer.option) ?
        <Timer total={timer.option} startedAt={timer.startedAt} endsAt={timer.endsAt} running={timer.running} size='huge' /> :
        <Icon inverted color='grey' name='times' size='huge' />}
    </Grid.Column>
    <Grid.Column width={7} verticalAlign='middle'>
      <PlayerCard
        deckUrl={players[1].deck.images[players[1].deck.imageIndex]}
        name={players[1].name}
        lp={players[1].lp}
        match={match}
        winWith={1} />
    </Grid.Column>
  </Grid>
}

export default ScreenCards;
