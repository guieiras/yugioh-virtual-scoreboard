import React from 'react'
import { Container,Icon, Image, Menu } from 'semantic-ui-react'
import useTranslation from './locales'

const AppMenu = () => {
  const { t } = useTranslation('AppMenu')

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
    </Container>
  </Menu>
}

export default AppMenu
