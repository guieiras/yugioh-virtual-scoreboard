import React from 'react'
import { Link, useLocation } from '@reach/router'
import QRCode from 'qrcode.react'
import { Container, Header } from 'semantic-ui-react'
import useWindowSize from '../lib/useWindowSize'
import LobbyMirror from './Lobby/Mirror'

const Lobby = ({ mirror, uuid }) => {
  const windowSize = useWindowSize()
  const location = useLocation()
  const hostRoute = `${location.origin}/game/${uuid}`

  const header = 'Modo de apresentação'
  const mirrorHeader = 'Código de pareamento'
  const mirrorDescription = 'Digite o código abaixo no dispositivo em modo de controle'
  const info = 'Entre usando o QR Code acima ou através da seguinte URL'

  return windowSize.height >= windowSize.width ? <Container textAlign="center">
    <Header as='h3' style={{ marginTop: '10px' }} content={header} />
    <QRCode value={hostRoute} />
    <p>{info}</p>
    <Link to={`/game/${uuid}`}>{hostRoute}</Link>
    <Header as='h3' content={mirrorHeader} />
    <p style={{ margin: 0 }}>{mirrorDescription}</p>
    <LobbyMirror code={mirror.code} timer={mirror.timer} />
  </Container> : <div style={{ display: 'flex', flexDirection: 'row', verticalAlign: 'middle' }}>
    <div style={{ display: 'flex', flexDirection: 'row', padding: '0 20px' }}>
      <QRCode value={hostRoute} size={ windowSize.width ? Math.min(windowSize.width / 4, windowSize.height) : 0} includeMargin />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Header as='h3' content={header} />
        <p style={{ margin: 0 }}>{info}</p>
        <Link to={`/game/${uuid}`}>{hostRoute}</Link>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 20px' }}>
      <Header as='h3' content={mirrorHeader} style={{ marginBottom: 0 }} />
      <LobbyMirror code={mirror.code} timer={mirror.timer} />
    </div>
  </div>
}

export default Lobby;
