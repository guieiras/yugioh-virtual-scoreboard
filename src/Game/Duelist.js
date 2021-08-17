import React from 'react'
import { Card, Dropdown, Header, Input } from 'semantic-ui-react'
import useTranslation from '../locales'

const Duelist = ({ title, lp, decks, deck, onSetDeck, name, onSetName }) => {
  const { t } = useTranslation('Game')
  const options = (decks || []).map(({ name, uid }) => (
    { key: uid, text: name, value: uid }
  ))

  return <Card fluid>
    <Card.Content header={title} />
    <Card.Content>
      <Input
        fluid
        placeholder={t('playerName')}
        icon='user'
        onChange={(e) => onSetName(e.target.value)}
        value={name}
      />
      <Dropdown
        style={{ marginTop: '10px' }}
        placeholder={t('deck')}
        fluid
        search
        selection
        noResultsMessage={t('noDeckFound')}
        options={options}
        onChange={(_, { value }) => { onSetDeck(value) }}
        value={deck}
      />
    </Card.Content>
    <Card.Content extra textAlign="center">
      <Header size="large" as="p">{lp}</Header>
    </Card.Content>
  </Card>
}

export default Duelist;
