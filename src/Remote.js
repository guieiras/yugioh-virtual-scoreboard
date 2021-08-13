import React from 'react'
import { Button, Grid, Header, Icon, Input } from 'semantic-ui-react'
import { v1 as uuidV1 } from 'uuid'

import { getChannelByMirror, getChannelByRemote } from './lib/channel'

const Remote = () => {
  const [remoteControlId] = React.useState(uuidV1())
  const [remoteControl, setRemoteControl] = React.useState('')

  React.useEffect(() => {
    getChannelByRemote(remoteControlId).subscribe(({ data }) => {
      window.location.href = `${window.location.origin}/game/${data.gameId}`
    })
  }, []) // eslint-disable-line

  const syncDevice = () => {
    getChannelByMirror(remoteControl).publish('update', { remoteControlId })
  }

  const changeRemoteControl = (event) => {
    setRemoteControl(event.target.value.replace(/[^0-9a-zA-Z]/g, '').toUpperCase().substring(0, 6))
  }

  return <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Icon name='linkify' size='huge' />
      <Header as='h1' style={{ marginTop: 10 }} content='Sincronizar controle' />
      <p style={{ marginTop: 10 }}>Digite o código de pareamento para obter o controle de uma tela</p>
      <Input
        value={remoteControl}
        onChange={changeRemoteControl}
        action={<Button onClick={syncDevice} children='Sincronizar' />}
      />
    </Grid.Column>
  </Grid>
}

export default Remote;
