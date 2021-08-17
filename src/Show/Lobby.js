import React from 'react'
import { Link, useLocation } from '@reach/router'
import QRCode from 'qrcode.react'
import { Header } from 'semantic-ui-react'
import useWindowSize from '../lib/useWindowSize'
import LobbyMirror from './Lobby/Mirror'
import useTranslation from '../locales'

const Lobby = ({ mirror, uuid }) => {
  const { t } = useTranslation('Lobby')
  const windowSize = useWindowSize()
  const location = useLocation()
  const hostRoute = `${location.origin}/game/${uuid}`

  return windowSize.height >= windowSize.width ? <div className='lobby' style={{ height: '100vh', textAlign: 'center', margin: 0, padding: '20px', overflow: 'hidden' }}>
    <Header as='h3' style={{ marginTop: '10px' }} content={t('header')} />
    <QRCode value={hostRoute} />
    <p>{t('info')}</p>
    <Link to={`/game/${uuid}`}>{hostRoute}</Link>
    <Header as='h3' content={t('mirrorHeader')} />
    <p style={{ margin: 0 }}>{t('mirrorDescription')}</p>
    <LobbyMirror code={mirror.code} timer={mirror.timer} />
  </div> : <div className='lobby' style={{ display: 'flex', flexDirection: 'row', verticalAlign: 'middle', height: '100vh' }}>
    <div style={{ display: 'flex', flexDirection: 'row', padding: '0 20px' }}>
      <QRCode value={hostRoute} size={windowSize.width ? Math.min(windowSize.width / 4, windowSize.height) : 0} includeMargin style={{ alignSelf: 'center' }} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Header as='h3' content={t('header')} />
        <p style={{ margin: 0 }}>{t('info')}</p>
        <Link to={`/game/${uuid}`}>{hostRoute}</Link>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 20px' }}>
      <Header as='h3' content={t('mirrorHeader')} style={{ marginBottom: 0 }} />
      <LobbyMirror code={mirror.code} timer={mirror.timer} />
    </div>
  </div>
}

export default Lobby;
