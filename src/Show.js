import React from 'react'
import { v1 as uuidV1 } from 'uuid'

import getChannelByGame from './lib/channel'
import Presentation from './Show/Presentation'
import Lobby from './Show/Lobby'

const Show = () => {
  const [uuid, setUuid] = React.useState('')
  const [gameState, setGameState] = React.useState({})

  React.useState(() => {
    const sessionId = uuidV1()
    setUuid(sessionId)
    getChannelByGame(sessionId).subscribe(({ data }) => { setGameState(data) })
  }, [])

  return gameState.players ? <Presentation state={gameState} /> : <Lobby uuid={uuid} />
}

export default Show;
