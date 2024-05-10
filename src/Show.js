import React from 'react'
import { v1 as uuidV1 } from 'uuid'

import { getChannelByGame, getChannelByMirror, getChannelByRemote } from './lib/channel'
import Presentation from './Show/Presentation'
import Lobby from './Show/Lobby'
import { getSyncCode } from './lib/syncCode'

const MIRROR_TIMER = 30

const Show = () => {
  const initialUuid = uuidV1()

  const [uuid, setUuid] = React.useState(initialUuid)
  const [mirrorTimer, setMirrorTimer] = React.useState(1)
  const [mirrorCode, setMirrorCode] = React.useState('')
  const [gameState, setGameState] = React.useState({})

  React.useEffect(() => {
    subscribeToUuid(initialUuid)
    subscribeToMirror()
  }, []) // eslint-disable-line

  React.useEffect(() => {
    if (!mirrorCode) return;

    setTimeout(() => {
      setMirrorTimer(mirrorTimer + 1)
      if (mirrorTimer % MIRROR_TIMER === 0) { subscribeToMirror() }
    }, 1000)
  })

  function subscribeToMirror() {
    if (mirrorCode) { unsubscribeClient(getChannelByMirror, mirrorCode) }
    const newCode = getSyncCode(6)
    setMirrorCode(newCode)
    getChannelByMirror(newCode).subscribe(({ data }) => setMirror(data))
  }

  function setMirror({ id, state, remoteControlId }) {
    if (remoteControlId) {
      getChannelByRemote(remoteControlId)
        .publish('update', { type: 'game', gameId: uuid })
    }

    if (id && state) {
      unsubscribeClient(getChannelByGame, uuid)
      unsubscribeClient(getChannelByMirror, mirrorCode)
      setMirrorCode(null)

      setGameState(state)
      subscribeToUuid(id)
    }
  }

  function subscribeToUuid(gameId) {
    setUuid(gameId)
    getChannelByGame(gameId).subscribe(({ data }) => { if (data.remote) setGameState(data) })
  }

  function unsubscribeClient(channelGetter, id) {
    channelGetter(id).unsubscribe()
    channelGetter(id).detach()
  }

  return gameState.players ? <Presentation state={gameState} /> : <Lobby uuid={uuid} mirror={{ timer: MIRROR_TIMER - mirrorTimer % MIRROR_TIMER, code: mirrorCode }} />
}

export default Show;
