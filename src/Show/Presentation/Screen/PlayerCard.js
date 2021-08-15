import { Header, Image } from 'semantic-ui-react'
import MatchIcon from '../../MatchIcon'

const PlayerCard = ({ deckUrl, name, lp, match, winWith }) => (
  <div className="ui big rounded image centered" style={{ width: '100%', textAlign: 'center' }}>
    <Image src={deckUrl} inline style={{ maxWidth: 450 }} />
    <div className='player-box' style={{ position: 'absolute', bottom: 0, width: 'calc(100% - 12px)' }}>
      <Header as='p' size='medium' className='player-name' style={{ margin: 5 }}>{name}</Header>
      <Header as='p' size='huge' className='player-lp'>{lp}</Header>
      { match?.length ? <div>
        { match.map((result, idx) => <MatchIcon key={idx + 1} winWith={winWith} result={result} />) }
      </div> : undefined }
    </div>
  </div >
)

export default PlayerCard
