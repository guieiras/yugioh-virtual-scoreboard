import React from 'react'
import { Button, Grid, Header, Segment } from 'semantic-ui-react'
import { Link } from '@reach/router'

const Home = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Segment stacked>
        <Header as='h1' textAlign='center'>
          Remote Duels
        </Header>
        <Grid textAlign='center' style={{ padding: '15px' }}>
          <Button as={Link} color='green' to='/lobby'>Novo Jogo</Button>
        </Grid>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default Home;
