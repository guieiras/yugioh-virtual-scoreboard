import { Header, Image } from 'semantic-ui-react'
import MatchIcon from '../../MatchIcon'

const PlayerCard = ({ deckUrl, name, lp, match, winWith }) => (
  <div className="ui big rounded image centered" style={{ textAlign: 'center' }}>
    <Image src={deckUrl} inline />
    <div style={{ position: 'absolute', bottom: 0, background: 'rgba(255, 255, 255, 0.8)', width: '100%', textAlign: 'center', padding: 6 }}>
      <Header as='p' size='medium' style={{ margin: 5 }}>{name}</Header>
      <Header as='p' size='huge'>{lp}</Header>
      { match?.length ? <div>
        { match.map((result, idx) => <MatchIcon key={idx + 1} winWith={winWith} result={result} />) }
      </div> : undefined }
    </div>
  </div >
)

export default PlayerCard
