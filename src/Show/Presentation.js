import React from 'react'
import LandscapeCards from './Presentation/LandscapeCards'
import ScreenCards from './Presentation/ScreenCards'
import VerticalCards from './Presentation/VerticalCards'
import useWindowSize from '../lib/useWindowSize'
import { useBodyStyle } from '../lib/useBodyStyle'

const defaultStyles = {
  background: 'rgba(0,0,0,0)'
}

const autoLayout = ({ height, width }) => {
  if (typeof height === 'undefined' || typeof width === 'undefined') { return '' }
  if (height > width) { return 'vertical' }
  if (height * 2.5 < width) { return 'landscape' }
  return 'screen'
}

const Presentation = ({ state: { players, styles: styleState, match, timer } }) => {
  const style = { ...defaultStyles, ...(styleState || {}) }
  const windowSize = useWindowSize()

  useBodyStyle({ backgroundColor: style.background })

  switch (autoLayout(windowSize)) {
    case 'landscape': return <LandscapeCards match={match} style={style} players={players} timer={timer} />
    case 'screen': return <ScreenCards match={match} style={style} players={players} timer={timer} />
    case 'vertical': return <VerticalCards match={match} style={style} players={players} timer={timer} />
    default: return <p>Esse Layout não é compatível</p>
  }
}

export default Presentation;
