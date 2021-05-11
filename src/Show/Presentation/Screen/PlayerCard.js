import { Header, Image } from 'semantic-ui-react'
import MatchIcon from '../../MatchIcon'

const PlayerCard = ({ deckUrl, name, lp, match, winWith }) => (
  <div className="ui big rounded image centered" style={{ width: '100%', textAlign: 'center' }}>
    <Image src={deckUrl} inline style={{ maxWidth: 450 }} />
    <div style={{ position: 'absolute', bottom: 0, background: 'rgba(255, 255, 255, 0.8)', width: 'calc(100% - 12px)', textAlign: 'center', padding: 6, left: 6 }}>
      <Header as='p' size='medium' style={{ margin: 5 }}>{name}</Header>
      <Header as='p' size='huge'>{lp}</Header>
      { match?.length ? <div>
        { match.map((result, idx) => <MatchIcon key={idx + 1} winWith={winWith} result={result} />) }
      </div> : undefined }
    </div>
  </div >
)

export default PlayerCard
