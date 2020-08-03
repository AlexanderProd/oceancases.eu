import React from 'react'
import styled from '@emotion/styled'

import Page from '~/templates/Page'

const Wrapper = styled.div`
  text-align: center;
`

const kontakt = () => (
  <Page title="Kontakt">
    <Wrapper>
      <p>Sie können uns jederzeit mit folgender E-Mail Adresse erreichen.</p>
      <a mailTo="mail@nureineburg.de">info@oceancases.eu</a>
    </Wrapper>
  </Page>
)

export default kontakt
