
import React from 'react'
import { Grid, Header, Icon, Image, Segment } from 'semantic-ui-react'
import MatchIcon from '../MatchIcon'
import Timer from './Cards/Timer'

const LandscapeCards = ({ match, players, timer }) => {
  const [height, setHeight] = React.useState(0)
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    const clientHeight = containerRef?.current?.clientHeight
    if (clientHeight) { setTimeout(() => { setHeight(clientHeight) }, 1000) }
  })

  return <Grid stackable style={{ margin: 0, height: '100vh' }} className='presentation landscape'>
    <Grid.Column width={2} style={{ height: '100%' }}>
      <div ref={containerRef} style={{ height: '100%' }} />
    </Grid.Column>
    <Grid.Column width={5} style={{ height: '100%' }}>
      <Segment style={{ height: '100%', display: 'flex' }} className='player-box'>
        <div style={{ width: '100%', textAlign: 'right' }}>
          <Header as='p' size='huge' className='player-lp' style={{ margin: 0 }}>{players[0].lp}</Header>
          <Header as='p' size='medium' className='player-name'>{players[0].name}</Header>
          { match?.length ? <div className='ui center'>
            { match.map((result, idx) => <MatchIcon key={idx + 1} winWith={0} result={result} />) }
          </div> : undefined}
        </div>
        <div style={{ marginLeft: 20, height: '100%'}}>
          <Image src={players[0].deck.images[players[0].deck.imageIndex]} style={{ maxHeight: height, width: height }} />
        </div>
      </Segment>
    </Grid.Column>
    <Grid.Column width={2} textAlign='center' verticalAlign='middle'>
      { Boolean(timer && timer.option) ?
        <Timer total={timer.option} startedAt={timer.startedAt} endsAt={timer.endsAt} running={timer.running} size='massive' />:
        <Icon inverted color='grey' name='times' size='huge' /> }
    </Grid.Column>
    <Grid.Column width={5} style={{ height: '100%' }}>
      <Segment style={{ height: '100%', display: 'flex' }} className='player-box'>
        <div style={{ marginRight: 20, height: '100%'}}>
          <Image src={players[1].deck.images[players[1].deck.imageIndex]} style={{ maxHeight: height, width: height }} />
        </div>
        <div style={{ width: '100%' }}>
          <Header as='p' size='huge' className='player-lp' style={{ margin: 0 }}>{players[1].lp}</Header>
          <Header as='p' size='medium' className='player-name'>{players[1].name}</Header>
          {match?.length ? <div className='ui center'>
            {match.map((result, idx) => <MatchIcon key={idx + 1} winWith={1} result={result} />)}
          </div> : undefined}
        </div>
      </Segment>
      <Grid.Column width={2} />
    </Grid.Column>
  </Grid>
}

export default LandscapeCards;
