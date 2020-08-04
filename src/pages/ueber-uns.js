import React from 'react'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { useStaticQuery } from 'gatsby'

import Page from '~/templates/Page'
import { breakpoints } from '~/utils/styles'

const Wrapper = styled.div`
  text-align: center;
`

const Img = styled(Image)`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  max-width: 100 %;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
  }
`

const UeberUns = () => {
  const data = useStaticQuery(graphql`
    query AboutPageImages {
      image1: file(relativePath: { eq: "planet_earth_first.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Page title="Über uns">
      <Wrapper>
        <h1>FÜR EINEN SAUBEREN OZEAN</h1>
        <p>
          „Was wir heute tun, entscheidet darüber, wie die Welt morgen
          aussieht.“ Marie von Ebner-Eschenbach
          <br />
          <br />
          Durch das Leben in unserer Konsumgesellschaft steigt der jährliche
          Bedarf an Plastik von Jahr zu Jahr. So wurden im Jahr 2016 bereits 300
          Million Tonnen Plastik hergestellt. Die Problematik: circa 10 Million
          Tonnen Kunststoff landen pro Jahr im Meer und verunreinigen dadurch
          wichtigen Unterwasser-Lebensraum. Unzählige Lebewesen sind davon
          betroffen und leiden unter den Folgen der Verschmutzung. Doch auch für
          uns Menschen bringt dies eine große Gefahr mit sich. Durch den Konsum
          von Fischen und anderen Lebewesen aus dem Meer, nehmen auch wir wieder
          Mikroplastik in unseren Körper mit auf.
          <br />
          <br />
          Abgesehen von diesen Fakten ist auch die Herstellung und
          Weiterverarbeitung von Plastik sehr umweltschädlich. Das benötigte
          Erdöl und andere Chemikalien sind sehr schlecht für die Umwelt. Selbst
          wenn nach der Nutzung von Plastik, dieser nicht im Meer landet, so
          werden 55% verbrannt. Auch hierbei entstehen giftige Stoffe wie Chlor
          und Dioxine, welche negative Folgen für alle Lebewesen mit sich
          bringen. So sind wir als Generation in der Pflicht Etwas zu ändern.
          Für die Tiere. Für die Menschen. Und für die Welt.
          <br />
          <br />
          Aus diesem Grund haben wir uns für die Verwendung biologischer Stoffe
          entschieden, welche auch von der Natur selbst abbaubar sind. Unsere
          Cases bestehen aus Weizen und Strohresten und sind deshalb 100%
          recycelbar. Zudem spenden wir pro verkauftem Case 1€ an die
          Organisation „the ocean clean up“. Diese setzt sich für die Reinigung
          der verschmutzten Meeres Gebiete ein. Um den Planeten nicht nur zu
          schützen, sondern auch zu reparieren.
          <br />
          <br />
        </p>
        <Img
          fluid={data.image1.childImageSharp.fluid}
          alt="Planet Earth First"
        />
      </Wrapper>
    </Page>
  )
}

export default UeberUns
