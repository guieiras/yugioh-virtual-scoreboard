import { Header, Image, Segment } from 'semantic-ui-react'
import MatchIcon from '../../MatchIcon'

const SmallPlayerCard = ({ deckUrl, name, lp, match, winWith }) => (
  <Segment style={{ display: 'flex', height: '48%', marginBottom: '0.5%', marginTop: '0.5%' }} className='player-box'>
    <Image src={deckUrl} />
    <div style={{ width: '100%', paddingLeft: 10 }}>
      <Header size='huge' className='player-lp' style={{ margin: 0 }}>{lp}</Header>
      <Header size='medium' className='player-name' style={{ margin: 0 }}>{name}</Header>
      {match?.length ? <div className='ui center' style={{ marginTop: 10 }}>
        {match.map((result, idx) => <MatchIcon key={idx + 1} winWith={winWith} result={result} />)}
      </div> : undefined}
    </div>
  </Segment>
)

export default SmallPlayerCard
