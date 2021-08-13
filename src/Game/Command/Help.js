import React from 'react'
import { Button, Header, Label, Modal, Table } from 'semantic-ui-react'

const CommandHelp = ({ onOpen, onClose, visible }) => {
  return <Modal
    onClose={onClose}
    onOpen={onOpen}
    open={visible}
  >
    <Modal.Header>Como usar o modo de comando</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p>
          Os comandos são uma forma fácil de controlar os pontos de vida usando apenas o teclado.
          É uma alternativa mais prática do que a calculadora, que funciona melhor com dispositivos móveis.
        </p>
        <p>
          Os comandos são compostos de 3 partes: <b>Jogador</b>, <b>Ação</b> e <b>Valor</b>.
        </p>
        <p>
          Vamos supor o seguinte comando: <Label>1-1500</Label>. Neste exemplo,
          o jogador é <Label size='mini'>1</Label>, a ação é o <Label size='mini'>-</Label> (subtração)
          e o valor é <Label size='mini'>1500</Label>.</p>
        <p>
          Ao apertar <Label color='black' size='mini'>Enter</Label>, os pontos de vida do jogador 1 serão
          reduzidos em 1500.
        </p>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Jogadores</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Label>1</Label>
              </Table.Cell>
              <Table.Cell>Usa o 1º jogador como referência</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>
                <Label>2</Label>
              </Table.Cell>
              <Table.Cell>Usa o 2º jogador como referência</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='2'>Ações</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>-</Label>
              </Table.Cell>
              <Table.Cell>Reduz os pontos de vida</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>+</Label>
              </Table.Cell>
              <Table.Cell>Aumenta os pontos de vida</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>/</Label>
              </Table.Cell>
              <Table.Cell>Divide os pontos de vida (se nenhum valor é colocado, por padrão divide por 2)</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>.</Label>
              </Table.Cell>
              <Table.Cell>Altera os pontos de vida para o valor</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>C</Label>
              </Table.Cell>
              <Table.Cell>Limpa os pontos de vida de ambos os jogadores</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>W</Label>
              </Table.Cell>
              <Table.Cell>Declarar vitória para o jogador</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell colSpan='2'>
                <Header size='tiny'>Ações globais</Header>
                <p>
                  As ações abaixo afetam ambos os jogadores, mas seus comandos precisam seguir o mesmo padrão
                  (pode usar tanto 1 quanto 2 antes do caracter de ação, o resultado será o mesmo).
                </p>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>D</Label>
              </Table.Cell>
              <Table.Cell>Declarar empate</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>C</Label>
              </Table.Cell>
              <Table.Cell>Limpar pontos de vida</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={onClose}>Fechar</Button>
    </Modal.Actions>
  </Modal>
}

export default CommandHelp
