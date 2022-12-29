import React from 'react'
import Select from 'react-select'
import { Card, Header, Input } from 'semantic-ui-react'
import useTranslation from '../locales'

const Duelist = ({ title, lp, decks, deck, onSetDeck, name, onSetName }) => {
  const { t } = useTranslation('Game')
  const options = (decks || []).map(({ name, uid }) => (
    { value: uid, label: name }
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
      <Select
        noOptionsMessage={t('noDeckFound')}
        options={options}
        onChange={({ value }) => onSetDeck(value)}
        placeholder={t('deck')}
        styles={{
          container: (_) => ({ ..._, marginTop: '10px' }),
          control: (_) => ({ ..._, borderColor: 'hsl(0, 0%, 88%)' }),
          option: (_) => ({ ..._, textAlign: 'left' }),
          placeholder: (_) => ({ ..._, color: 'rgba(0,0,0,.3)', textAlign: 'left' }),
          singleValue: (_) => ({ ..._, textAlign: 'left' })
        }}
        value={options.find(({ value }) => value && deck === value)}
      />
    </Card.Content>
    <Card.Content extra textAlign="center">
      <Header size="large" as="p">{lp}</Header>
    </Card.Content>
  </Card>
}

export default Duelist;
