import React from 'react'
import Timer from './Cards/Timer'
import PlayerCard from './SmallScreen/PlayerCard'

const SmallScreenCards = ({ match, players, timer }) => {
  return <div style={{ verticalAlign: 'middle', height: '100vh', display: 'flex', flexDirection: 'column' }} className='presentation small-screen'>
    <PlayerCard lp={players[0].lp} name={players[0].name} deckUrl={players[0].deck.images[players[0].deck.imageIndex]} match={match} winWith={0} />
    <PlayerCard lp={players[1].lp} name={players[1].name} deckUrl={players[1].deck.images[players[1].deck.imageIndex]} match={match} winWith={1} />
    <div style={{ position: 'absolute', top: '50%', marginTop: -26, left: 15 }}>
      {Boolean(timer && timer.option) ?
        <Timer total={timer.option} startedAt={timer.startedAt} endsAt={timer.endsAt} running={timer.running} size='huge' /> :
        null}
    </div>

  </div>
}

export default SmallScreenCards;
