import { Realtime } from 'ably'

export default function getChannelByGame(gameId) {
  return new Realtime(process.env.REACT_APP_ABLY_API_KEY)
    .channels.get(`games/${gameId}`)
}
