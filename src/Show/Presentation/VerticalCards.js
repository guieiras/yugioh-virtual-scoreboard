import React from 'react'
import { Container, Grid, Header, Image, Segment } from 'semantic-ui-react'
import MatchIcon from '../MatchIcon'
import Timer from './Cards/Timer'

const VerticalCards = ({ match, players, timer }) => {
  return <Grid style={{ margin: 0, height: '100vh' }} verticalAlign='middle' columns={1} className='presentation vertical'>
    <Grid.Row verticalAlign='middle' centered>
      <Grid.Column>
        <Image centered src={players[0].deckUrl} size='small' bordered />
        <Segment className='player-box'>
          <Header as='p' size='huge' className='player-name' textAlign='center'>{players[0].name}</Header>
          <Header as='p' size='large' className='player-lp' textAlign='center'>{players[0].lp}</Header>
          { match?.length > 0 ? <Container textAlign='center'>
            { match.map((result, idx) => <MatchIcon key={idx + 1} winWith={0} result={result} />) }
          </Container> : undefined}
        </Segment>
      </Grid.Column>
      <Grid.Column style={{ textAlign: 'center' }}>
        { Boolean(timer && timer.option) &&
          <Timer total={timer.option} startedAt={timer.startedAt} endsAt={timer.endsAt} running={timer.running} size='massive' /> }
      </Grid.Column>
      <Grid.Column>
        <Image centered src={players[1].deckUrl} size='small' bordered />
        <Segment className='player-box'>
          <Header as='p' size='huge' className='player-name' textAlign='center'>{players[1].name}</Header>
          <Header as='p' size='large' className='player-lp' textAlign='center'>{players[1].lp}</Header>
          {match?.length > 0 ? <Container textAlign='center'>
            {match.map((result, idx) => <MatchIcon key={idx + 1} winWith={1} result={result} />)}
          </Container> : undefined}
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
}

export default VerticalCards;
