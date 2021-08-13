import React from 'react'
import { Button, Header, Icon, Input, Segment } from 'semantic-ui-react'
import CommandHelp from './Command/Help'

const Command = ({ onMinus, onPlus, onDivide, onReset, onSet, onGameResult }) => {
  const [helpVisible, setHelpVisible] = React.useState(false)
  const [player, setPlayer] = React.useState(-1)
  const [action, setAction] = React.useState('')
  const [command, setCommand] = React.useState('')
  const [value, setValue] = React.useState(0)
  const writeCommand = (input) => {
    const commandInput = input.toUpperCase()
    const matchCommand = commandInput.match(/^[12]?[+-./DCW]?\d*$/)
    if (commandInput !== '' && (!matchCommand || commandInput.match(/^\d{2}/))) { return }

    const [[typedPlayer, typedAction], number] = matchCommand[0].split(/(?<=\d[^0-9])/)
    const prePlayer = parseInt(typedPlayer, 10)
    setPlayer([1, 2].includes(prePlayer) ? prePlayer - 1 : -1)
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

    method && method(player, isNaN(value) ? 0 : value)
    writeCommand('')
  }

  const divide = (player, value) => {
    onDivide && onDivide(player, value || 2)
  }

  const win = (player) => onGameResult(player)
  const draw = () => onGameResult(-2)

  const description = () => {
    return {
      '+': `Jogador ${player + 1} ganha ${value || 0} pontos de vida`,
      '-': `Jogador ${player + 1} perde ${value || 0} pontos de vida`,
      '.': `Altera os pontos de vida do Jogador ${player + 1} para ${value || 0}`,
      '/': `Divide os pontos de vida do jogador ${player + 1} por ${value || 2}`,
      'C': `Limpa os pontos de vida`,
      'W': `Vitória do jogador ${player + 1}`,
      'D': 'Empate no jogo atual'
    }[action] || 'O comando não é válido'
  }

  return <Segment attached='top' textAlign="center">
    <Header textAlign='center'>
      Editor de comando
    </Header>

    <Input icon value={command} onChange={(e) => writeCommand(e.target.value)} onKeyDown={handleKeyDown}>
      <input />
      <Icon name={{ '+': 'plus', '-': 'minus', '.': 'chevron right', '/': 'percent', 'C': 'eraser', 'W': 'trophy', 'D': 'handshake' }[action]} />
    </Input>
    <p style={{ marginTop: 10 }}>{description()}</p>

    <Button circular icon='help' style={{ position: 'absolute', right: 10, top: 10 }} onClick={() => setHelpVisible(true)} />
    <CommandHelp visible={helpVisible} onOpen={() => setHelpVisible(true)} onClose={() => setHelpVisible(false)} />
  </Segment>
}

export default Command;
