import React from 'react'
import { Card, Header } from 'semantic-ui-react'

const DuelistShow = ({ name, lp }) => {
  return <Card fluid>
    <Card.Content header={name} />
    <Card.Content>
      <Header size="large" as="p">{lp}</Header>
    </Card.Content>
  </Card>
}

export default DuelistShow;
