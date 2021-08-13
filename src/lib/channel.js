import { Realtime } from 'ably'

window.Ably = new Realtime(process.env.REACT_APP_ABLY_API_KEY)

export function getChannelByGame(gameId) {
  return window.Ably.channels.get(`games/${gameId}`)
}

export function getChannelByMirror(code) {
  return window.Ably.channels.get(`mirror/${code}`)
}

export function getChannelByRemote(remote) {
  return window.Ably.channels.get(`remote/${remote}`)
}
