import React from 'react'
import { Button, Header, Icon, Input, Segment } from 'semantic-ui-react'
import useTranslation from '../locales'
import CommandHelp from './Command/Help'

const Command = ({ onMinus, onPlus, onDivide, onReset, onSet, onGameResult }) => {
  const { t } = useTranslation('Command')
  const [helpVisible, setHelpVisible] = React.useState(false)
  const [player, setPlayer] = React.useState(0)
  const [action, setAction] = React.useState('')
  const [command, setCommand] = React.useState('')
  const [value, setValue] = React.useState(0)
  const writeCommand = (input) => {
    const commandInput = input.toUpperCase()
    const matchCommand = commandInput.match(/^[12]?[+-./DCW]?\d*$/)
    if (commandInput !== '' && (!matchCommand || commandInput.match(/^[^12]$/) || commandInput.match(/^\d{2}/))) { return }

    const [, typedPlayer, typedAction, number] = matchCommand[0].match(/(\d)?([^0-9])?(\d+)?/)
    const prePlayer = parseInt(typedPlayer, 10)
    setPlayer([1, 2].includes(prePlayer) ? prePlayer : 0)
    setCommand(matchCommand[0])
    setAction(typedAction)
    setValue(parseInt(number, 10))
  }
  const handleKeyDown = (e) => {
    if (e.keyCode !== 13) return
    const method = {
      '+': onPlus,
      '-': onMinus,
      '.': onSet,
      '/': divide,
      'C': onReset,
      'W': win,
      'D': draw
    }[action]

    method && method(player - 1, isNaN(value) ? 0 : value)
    writeCommand('')
  }

  const divide = (player, value) => {
    onDivide && onDivide(player, value || 2)
  }

  const win = (player) => onGameResult(player)
  const draw = () => onGameResult(-2)

  const description = () => {
    return {
      '+': t('descriptionAdd', { player, value: value || 0 }),
      '-': t('descriptionSubtract', { player, value: value || 0 }),
      '.': t('descriptionSet', { player, value: value || 0 }),
      '/': t('descriptionDivide', { player, value: value || 2 }),
      'W': t('descriptionWin', { player }),
      'C': t('descriptionClean'),
      'D': t('descriptionDraw'),
    }[action]
  }

  return <Segment attached='top' textAlign="center">
    <Header textAlign='center' content={t('title')} />

    <Input icon value={command} onChange={(e) => writeCommand(e.target.value)} onKeyDown={handleKeyDown}>
      <input style={{ color: description() ? 'green' : 'red' }} />
      <Icon name={{ '+': 'plus', '-': 'minus', '.': 'share', '/': 'percent', 'C': 'refresh', 'W': 'trophy', 'D': 'handshake' }[action]} />
    </Input>
    <p style={{ marginTop: 10 }}>{description() || t('descriptionInvalid')}</p>

    <Button circular icon='help' style={{ position: 'absolute', right: 10, top: 10 }} onClick={() => setHelpVisible(true)} />
    <CommandHelp visible={helpVisible} onOpen={() => setHelpVisible(true)} onClose={() => setHelpVisible(false)} />
  </Segment>
}

export default Command;
