import React from 'react'
import { Card, Dropdown, Header, Input } from 'semantic-ui-react'

const Duelist = ({ title, lp, decks, deck, onSetDeck, name, onSetName }) => {
  const options = (decks || []).map(({ name, uid }) => (
    { key: uid, text: name, value: uid }
  ))

  return <Card fluid>
    <Card.Content header={title} />
    <Card.Content>
      <Input
        fluid
        placeholder='Nome do jogador'
        icon='user'
        onChange={(e) => onSetName(e.target.value)}
        value={name}
      />
      <Dropdown
        style={{ marginTop: '10px' }}
        placeholder='Deck'
        fluid
        selection
        options={options}
        onChange={(_, { value }) => { onSetDeck(value) } }
        value={deck}
      />
    </Card.Content>
    <Card.Content extra textAlign="center">
      <Header size="large" as="p">{lp}</Header>
    </Card.Content>
  </Card>
}

export default Duelist;
