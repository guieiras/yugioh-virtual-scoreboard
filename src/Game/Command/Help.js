import React from 'react'
import { Button, Header, Label, Modal, Table } from 'semantic-ui-react'
import { Trans } from 'react-i18next'
import useTranslation from '../../locales'

const CommandHelp = ({ onOpen, onClose, visible }) => {
  const { t } = useTranslation('CommandHelp')
  return <Modal
    onClose={onClose}
    onOpen={onOpen}
    open={visible}
  >
    <Modal.Header>{t('howToUse')}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p>{t('description1')}</p>
        <p>
          <Trans t={t} i18nKey='description2' values={{
            player: t('player'),
            action: t('action'),
            value: t('value')
          }} components={{ b: <b /> }} />
        </p>
        <p><Trans t={t} i18nKey='description3' components={{ l: <Label size='mini' /> }} /></p>
        <p><Trans t={t} i18nKey='description4' components={{ kbd: <Label color='black' size='mini' /> }} /></p>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>{t('players')}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Label>1</Label>
              </Table.Cell>
              <Table.Cell>{t('playerReference', { count: 1 })}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>
                <Label>2</Label>
              </Table.Cell>
              <Table.Cell>{t('playerReference', { count: 2 })}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='2'>{t('actions')}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>-</Label>
              </Table.Cell>
              <Table.Cell>{t('actionSubtract')}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>+</Label>
              </Table.Cell>
              <Table.Cell>{t('actionAdd')}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>/</Label>
              </Table.Cell>
              <Table.Cell>{t('actionDivide')}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>.</Label>
              </Table.Cell>
              <Table.Cell>{t('actionSet')}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>W</Label>
              </Table.Cell>
              <Table.Cell>{t('actionWin')}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell colSpan='2'>
                <Header size='tiny'>{t('globalActions')}</Header>
                <p>{t('globalActionsDescription')}</p>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>D</Label>
              </Table.Cell>
              <Table.Cell>{t('actionDraw')}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing textAlign='center'>
                <Label size='medium'>C</Label>
              </Table.Cell>
              <Table.Cell>{t('actionClean')}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={onClose}>{t('close')}</Button>
    </Modal.Actions>
  </Modal>
}

export default CommandHelp
