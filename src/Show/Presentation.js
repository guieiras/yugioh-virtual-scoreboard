import React from 'react'
import LandscapeCards from './Presentation/LandscapeCards'
import VerticalCards from './Presentation/VerticalCards'

const defaultStyles = {
  background: 'black',
  layout: 'landscape'
}

const Presentation = ({ state: { players, styles: styleState, match } }) => {
  const style = { ...defaultStyles, ...(styleState || {}) }

  switch (style.layout) {
    case 'vertical': return <VerticalCards match={match} style={style} players={players} />
    case 'landscape': return <LandscapeCards match={match} style={style} players={players} />
    default: return <p>Esse Layout não é compatível</p>
  }
}

export default Presentation;
