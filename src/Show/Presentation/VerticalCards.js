import React from 'react'
import { Grid, Header, Image, Segment } from 'semantic-ui-react'

const VerticalCards = ({ players, style }) => {
  return <Grid style={{ margin: 0, height: '100vh', backgroundColor: style.background }} verticalAlign='middle' columns={1}>
    <Grid.Row verticalAlign='middle' centered>
      <Grid.Column>
        <Image centered src={players[0].deckUrl} size='small' bordered />
        <Segment inverted>
          <Header as='p' size='huge' textAlign='center'>{players[0].name}</Header>
          <Header as='p' size='large' textAlign='center'>{players[0].lp}</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Image centered src={players[1].deckUrl} size='small' bordered />
        <Segment inverted>
          <Header as='p' size='huge' textAlign='center'>{players[1].name}</Header>
          <Header as='p' size='large' textAlign='center'>{players[1].lp}</Header>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
}

export default VerticalCards;
