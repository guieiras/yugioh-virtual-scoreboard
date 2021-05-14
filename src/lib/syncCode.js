export function getSyncCode(length = 6) {
  return new Array(length).fill(0).map(getChar).join('')
}

function getChar() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')

  return chars[Math.floor(Math.random() * chars.length)]
}
