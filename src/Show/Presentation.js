import React from 'react'
import LandscapeCards from './Presentation/LandscapeCards'
import ScreenCards from './Presentation/ScreenCards'
import VerticalCards from './Presentation/VerticalCards'
import useWindowSize from '../lib/useWindowSize'
import useTranslation from '../locales'

const autoLayout = ({ height, width }) => {
  if (typeof height === 'undefined' || typeof width === 'undefined') { return '' }
  if (height > width) { return 'vertical' }
  if (height * 2.5 < width) { return 'landscape' }
  return 'screen'
}

const Presentation = ({ state: { players, match, timer } }) => {
  const { t } = useTranslation('Presentation')
  const windowSize = useWindowSize()

  switch (autoLayout(windowSize)) {
    case 'landscape': return <LandscapeCards match={match} players={players} timer={timer} />
    case 'screen': return <ScreenCards match={match} players={players} timer={timer} />
    case 'vertical': return <VerticalCards match={match} players={players} timer={timer} />
    default: return <p>{t('unsupportedLayout')}</p>
  }
}

export default Presentation;
