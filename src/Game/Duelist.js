import React from 'react'
import Select from 'react-select'
import { Card, Header, Icon, Image, Input } from 'semantic-ui-react'
import useTranslation from '../locales'

const Duelist = ({ title, lp, decks, deck, onSetDeck, name, onSetName }) => {
  const { t } = useTranslation('Game')
  const options = (decks || []).map(({ name, uid, images }) => (
    { value: uid, label: name, images }
  ))

  function setDeck(newDeck) {
    onSetDeck({ uid: newDeck.value, name: newDeck.label, images: newDeck.images, imageIndex: 0 })
  }

  function setImageIndex(by) {
    return () => {
      onSetDeck({ ...deck, imageIndex: deck.imageIndex + by })
    }
  }

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
        isDisabled={!options.length}
        noOptionsMessage={t('noDeckFound')}
        options={options}
        onChange={setDeck}
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 7 }}>
        <Icon style={{ margin: 0, cursor: 'pointer'}}
              onClick={setImageIndex(-1)}
              name="chevron left"
              disabled={deck.imageIndex === 0}
        />
        <Image src={deck.images[deck.imageIndex]} size="mini" rounded />
        <Icon style={{ margin: 0, cursor: 'pointer'}}
              onClick={setImageIndex(1)}
              name="chevron right"
              disabled={deck.imageIndex === deck.images.length - 1}
        />
      </div>
      <Header size="tiny" as="p">
        {name || <i>{title}</i>}
      </Header>
      <Header size="large" as="p">{lp}</Header>
    </Card.Content>
  </Card>
}

export default Duelist;
