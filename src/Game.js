import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Duelist from './Game/Duelist'

const Game = ({ props }) => {

  return <Container style={{ padding: '10px' }}>
    <Grid>
      <Grid.Row>
        <Grid.Column width={8} textAlign="center">
          <Duelist title="Jogador 1" lp={8000} />
        </Grid.Column>
        <Grid.Column width={8} textAlign="center">
          <Duelist title="Jogador 2" lp={8000} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
}

export default Game;
