import React from 'react'
import { Button, Grid, Header, Icon, Input } from 'semantic-ui-react'
import { v1 as uuidV1 } from 'uuid'
import { navigate } from '@reach/router'

import { getChannelByMirror, getChannelByRemote } from './lib/channel'
import useTranslation from './locales'
import AppMenu from './AppMenu'
import AppFooter from './AppFooter'

const Remote = () => {
  const { t } = useTranslation('Remote')
  const [remoteControlId] = React.useState(uuidV1())
  const [remoteControl, setRemoteControl] = React.useState('')

  React.useEffect(() => {
    getChannelByRemote(remoteControlId).subscribe(({ data }) => {
      navigate(`game/${data.gameId}`)
    })
  }, []) // eslint-disable-line

  const syncDevice = () => {
    getChannelByMirror(remoteControl).publish('update', { remoteControlId })
  }

  const changeRemoteControl = (event) => {
    setRemoteControl(event.target.value.replace(/[^0-9a-zA-Z]/g, '').toUpperCase().substring(0, 6))
  }

  return <>
    <AppMenu />
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Icon name='linkify' size='huge' />
        <Header as='h1' style={{ marginTop: 10 }} content={t('title')} />
        <p style={{ marginTop: 10 }}>{t('description')}</p>
        <Input
          value={remoteControl}
          onChange={changeRemoteControl}
          action={<Button onClick={syncDevice} children={t('sync')} />}
        />
      </Grid.Column>
    </Grid>
    <AppFooter style={{ position: 'absolute', bottom: 0, width: '100%' }}/>
  </>
}

export default Remote;
