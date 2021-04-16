import React from 'react'
import LandscapeCards from './Presentation/LandscapeCards'
import VerticalCards from './Presentation/VerticalCards'

const defaultStyles = {
  background: 'black',
  layout: 'landscape'
}

const Presentation = ({ state: { players, styles: styleState } }) => {
  const style = { ...defaultStyles, ...(styleState || {}) }

  switch (style.layout) {
    case 'vertical': return <VerticalCards style={style} players={players} />
    case 'landscape': return <LandscapeCards style={style} players={players} />
    default: return <p>Esse Layout não é compatível</p>
  }
}

export default Presentation;
