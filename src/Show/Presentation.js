import React from 'react'
import LandscapeCards from './Presentation/LandscapeCards'
import VerticalCards from './Presentation/VerticalCards'
import useWindowSize from '../lib/useWindowSize'

const defaultStyles = {
  background: 'black',
}

const autoLayout = ({ height, width }) => {
  if (typeof height === 'undefined' || typeof width === 'undefined') { return '' }
  if (height > width) { return 'vertical' }
  return 'landscape'
}

const Presentation = ({ state: { players, styles: styleState, match } }) => {
  const style = { ...defaultStyles, ...(styleState || {}) }
  const windowSize = useWindowSize()

  switch (autoLayout(windowSize)) {
    case 'vertical': return <VerticalCards match={match} style={style} players={players} />
    case 'landscape': return <LandscapeCards match={match} style={style} players={players} />
    default: return <p>Esse Layout não é compatível</p>
  }
}

export default Presentation;
