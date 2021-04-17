import React from 'react'
import { Link, useLocation } from '@reach/router'
import QRCode from 'qrcode.react'
import { Container, Grid, Header } from 'semantic-ui-react'
import useWindowSize from '../lib/useWindowSize'

const Lobby = ({ uuid }) => {
  const windowSize = useWindowSize()
  const location = useLocation()
  const hostRoute = `${location.origin}/game/${uuid}`

  const header = 'Modo de apresentação'
  const info = 'Entre usando o QR Code acima ou através da seguinte URL'

  return windowSize.height >= windowSize.width ? <Container textAlign="center">
    <Header as='h3' style={{ marginTop: '10px' }} content={header} />
    <QRCode value={hostRoute} />
    <p>{info}</p>
    <Link to={`/game/${uuid}`}>{hostRoute}</Link>
  </Container> : <Grid>
    <Grid.Column width='4'>
      <QRCode value={hostRoute} size={(windowSize.height || 128)} includeMargin />
    </Grid.Column>
    <Grid.Column width='12' verticalAlign='middle'>
      <Header as='h3' content={header} />
      <p style={{ margin: 0 }}>{info}</p>
      <Link to={`/game/${uuid}`}>{hostRoute}</Link>
    </Grid.Column>
  </Grid>
}

export default Lobby;
