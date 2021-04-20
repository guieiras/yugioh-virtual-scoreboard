import React from 'react'
import { Icon } from 'semantic-ui-react'

const MatchIcon = ({ winWith, result }) => {
  const notPlayed = -1
  const draw = -2

  const icon = result === notPlayed ? 'circle' : result === draw ? 'minus circle' : result === winWith ? 'check circle' : 'times circle'
  const color = result === notPlayed ? 'grey' : result === draw ? 'grey' : result === winWith ? 'teal' : 'red'
  return <Icon size='large' name={icon} color={color} />
}

export default MatchIcon
