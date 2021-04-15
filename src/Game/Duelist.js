import React from 'react'
import { Card, Dropdown, Header, Input } from 'semantic-ui-react'

const decks = [
  {
    key: 'abc',
    text: 'ABC',
    value: 'abc'
  }
]

const Duelist = ({ title, lp }) => {
  return <Card fluid>
    <Card.Content header={title} />
    <Card.Content description>
      <Input fluid placeholder='Nome do jogador' icon='user' />
      <Dropdown
        style={{ marginTop: '10px' }}
        placeholder='Deck'
        fluid
        selection
        options={decks}
      />
    </Card.Content>
    <Card.Content extra textAlign="center">
      <Header size="large" as="p">{lp}</Header>
    </Card.Content>
  </Card>
}

export default Duelist;
