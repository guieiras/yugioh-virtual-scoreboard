import React from 'react'
import VerticalCards from './Presentation/VerticalCards'

const defaultStyles = {
  background: 'black',
  layout: 'vertical'
}

const Presentation = ({ state: { players, style: styleState } }) => {
  const style = { ...defaultStyles, ...(styleState || {}) }

  switch (style.layout) {
    case 'vertical': return <VerticalCards style={style} players={players} />
  }
}

export default Presentation;
