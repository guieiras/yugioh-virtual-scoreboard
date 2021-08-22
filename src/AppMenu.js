import React from 'react'
import { Container,Dropdown,Icon, Image, Menu } from 'semantic-ui-react'
import ReactCountryFlag from 'react-country-flag'
import useTranslation, { languages } from './locales'

const AppMenu = () => {
  const { i18n, t } = useTranslation('AppMenu')
  const currentLanguage = languages.filter((l) => i18n.language === l.key)[0]

  return <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header href='/'>
        <Image size='mini' src='/cardback.png' style={{ marginRight: '1.5em' }} />
        {t('title')}
      </Menu.Item>
      <Menu.Item as='a' href='/remote'>
        <Icon name='linkify' /> {t('remote')}
      </Menu.Item>
      <Menu.Item as='a' href='/show'>
        <Icon name='television' /> {t('show')}
      </Menu.Item>

      <Menu.Menu position='right'>
        <Dropdown item text={currentLanguage.name}>
          <Dropdown.Menu>
            { languages.map((language) => (
              <Dropdown.Item key={language.key} onClick={() => { i18n.changeLanguage(language.key) }}>
                <ReactCountryFlag countryCode={language.country} /> {currentLanguage.key === language.key ? <b>{language.name}</b> : language.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Container>
  </Menu>
}

export default AppMenu
