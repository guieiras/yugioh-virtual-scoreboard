import React from 'react'
import { Link, useLocation } from "@reach/router"
import QRCode from 'qrcode.react';
import { Container, Header } from 'semantic-ui-react'
import { v1 as uuidV1 } from 'uuid'

const Lobby = () => {
  const [uuid] = React.useState(uuidV1())
  const location = useLocation()
  const hostRoute = `${location.origin}/game/${uuid}`
  return <Container textAlign="center">
    <Header as='h3' style={{ marginTop: '10px' }} content='Modo de apresentação' />
    <QRCode value={hostRoute} />
    <p>Entre usando o QR Code acima ou através da seguinte URL</p>
    <Link to={`/game/${uuid}`}>{hostRoute}</Link>
  </Container>
}

export default Lobby;
