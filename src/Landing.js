import React from 'react'
import { Button, Container, Header, Input, Table } from 'semantic-ui-react';
import useTranslation from './locales';
import AppMenu from './AppMenu';

const Landing = () => {
  const showLink = `${window.location.origin}/show`
  const { t } = useTranslation('Landing')
  return <>
    <AppMenu />
    <Container text style={{ paddingTop: '6em' }}>
      <Header as='h1'>{t('AppMenu:title')}</Header>
      <p>{t('description')}</p>

      <Header as='h2'>{t('configuring')}</Header>
      <p>{t('configuring1')}</p>
      <p>{t('configuring2')}</p>

      <Input fluid action readOnly value={showLink}>
        <input />
        <Button icon='copy' onClick={() => {navigator.clipboard.write([new window.ClipboardItem({ 'text/plain': new Blob([showLink], { type: 'text/plain' }) })])}} />
        <Button as='a' icon='play' color='green' content={t('open')} target='_blank' href={showLink} />
      </Input>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={2}>{t('app')}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>StreamLabs OBS</Table.Cell>
            <Table.Cell textAlign='right'>
              <a href="https://blog.streamlabs.com/introducing-browser-source-interaction-for-streamlabs-obs-d8fc4dcbb1fb" target='_blank' rel="noreferrer">{t('link')}</a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>OBS</Table.Cell>
            <Table.Cell textAlign='right'>
              <a href="https://obsproject.com/wiki/Sources-Guide#browser-source" target='_blank' rel="noreferrer">{t('link')}</a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Xplit</Table.Cell>
            <Table.Cell textAlign='right'>
              <a href="https://help.xsplit.com/en/articles/5142996-webpage" target='_blank' rel="noreferrer">{t('link')}</a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  </>
}

export default Landing;
