import React from 'react'
import { Card, Grid, Header } from 'semantic-ui-react'

const VerticalCards = ({ players, style }) => {
  return <Grid style={{ margin: 0, height: '100vh', backgroundColor: style.background }} verticalAlign='middle' columns={1}>
    <Grid.Column>
      <Card
        centered
        image={players[0].deckUrl}
        header={<Header as='p' textAlign='center' size='huge'>{players[0].name}</Header>}
        extra={<Header as='p' textAlign='center' size='large'>{players[0].lp}</Header>}
      />
    </Grid.Column>
    <Grid.Column>
      <Card centered
        image={players[1].deckUrl}
        header={<Header as='p' textAlign='center' size='huge'>{players[1].name}</Header>}
        extra={<Header as='p' textAlign='center' size='large'>{players[1].lp}</Header>}
      />
    </Grid.Column>
  </Grid>
}

export default VerticalCards;
