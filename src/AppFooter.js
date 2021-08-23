import React from 'react'
import { Trans } from 'react-i18next'
import { Container } from 'semantic-ui-react'
import useTranslation from './locales'

const AppFooter = () => {
  const { t } = useTranslation('Footer')

  return <Container style={{ marginTop: 30 }} textAlign='center'>
    <small>
      <Trans
        t={t}
        i18nKey='developedBy'
        values={{ name: 'Guilherme Alberto Eiras' }}
        components={{ l: <a href={t('link')} target='_blank' rel='noreferrer'>#</a> }}
      />
    </small>
  </Container>
}

export default AppFooter
