import React from 'react'
import { Card, Header, Icon, Label } from 'semantic-ui-react'

function cardColor(timer) {
  if (timer > 25) { return 'green' }
  else if (timer > 18) { return 'teal' }
  else if (timer > 13) { return 'blue' }
  else if (timer > 8) { return 'yellow' }
  else if (timer > 3) { return 'orange' }
  else { return 'red' }
}

const LobbyMirror = ({ code, timer, mini }) => {
  return <Card fluid={!mini} color={cardColor(timer)}>
    <Card.Content>
      <Label style={{ float: 'right', marginRight: 5 }}>
        <Icon loading size="small" name='circle notch' />
        {timer}
      </Label>
      <Header style={{ margin: 0 }}>{code}</Header>
    </Card.Content>
  </Card>
}

export default LobbyMirror;
