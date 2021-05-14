import { Realtime } from 'ably'

export function getChannelByGame(gameId) {
  return new Realtime(process.env.REACT_APP_ABLY_API_KEY)
    .channels.get(`games/${gameId}`)
}

export function getChannelByMirror(code) {
  return new Realtime(process.env.REACT_APP_ABLY_API_KEY)
    .channels.get(`mirror/${code}`)
}
