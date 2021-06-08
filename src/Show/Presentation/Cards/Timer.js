import React from 'react'
import { Label, Progress } from 'semantic-ui-react'

export default function Timer({ startedAt, endsAt, total, size }) {
  const timeoutRef = React.useRef(null)
  const [clock, setClock] = React.useState(0)
  const calcColor = () => {
    const percent = clock / (total * 60)
    if (percent > 0.8) { return 'green' }
    else if (percent > 0.6) { return 'teal' }
    else if (percent > 0.4) { return 'blue' }
    else if (percent > 0.2) { return 'yellow' }
    else if (percent > 0.1) { return 'orange' }
    else { return 'red' }
  }

  React.useEffect(() => {
    if (timeoutRef.current !== null) { clearTimeout(timeoutRef.current) }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null
      if (startedAt) { setClock((new Date().getTime() - startedAt) / 1000) }
      else if (endsAt) { setClock(Math.max(endsAt - new Date().getTime(), 0) / 1000) }
      else { setClock(0) }
    }, 1000)
  })

  return <Label size={size || 'large'}>
    { total && (clock > 0) ? <>
      {Math.floor(clock / 60).toString().padStart(2, '0')}:
      {Math.floor(clock % 60).toString().padStart(2, '0')}
      {total > 0 && <Progress color={calcColor()}
                              value={clock}
                              total={total * 60}
                              attached='bottom'
                              style={{ backgroundColor: '#bbb' }} />}
    </> : <>
      00:00
    </> }
  </Label>
}
