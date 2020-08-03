import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql, navigate } from 'gatsby'

import SEO from '~/components/seo'
import Navigation from '~/components/Navigation'
import Slideshow from '~/components/Slideshow'
import Footer from '~/components/Footer'
import { Container, TwoColumnGrid, Button, Img } from '~/utils/styles'
import slide_1 from '~/images/slider_1.jpg'
import slide_2 from '~/images/slider_2.jpg'

const SlideWrapper = styled.div`
  position: absolute;
  max-width: 100vw;
  z-index: 2;
  top: 0;
`

const Wrapper = styled.div`
  margin-top: 100vh;
`

const Index = () => {
  const data = useStaticQuery(graphql`
    query IndexPageImages {
      image1: file(relativePath: { eq: "cleanup.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "rose_detail.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "mint_detail.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide1: file(relativePath: { eq: "slider_1.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide2: file(relativePath: { eq: "slider_2.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const slides = [
    {
      id: 1,
      image: data.slide1.childImageSharp.fluid,
      firstText: 'OceanCases',
      secondText: 'Schütze dein iPhone und den Planeten',
      buttonLink: '/product/oceancase-rose/',
      buttonText: 'Zum Rosè Case',
      color: 'white',
    },
    {
      id: 2,
      image: data.slide2.childImageSharp.fluid,
      firstText: 'OceanCases',
      secondText: 'Schütze dein iPhone und den Planeten',
      buttonLink: '/product/oceancase-mint/',
      buttonText: 'Zum Mint Case',
      color: 'white',
    },
  ]

  return (
    <>
      <SEO title="Home" keywords={[`nureinberg`, `nürnberg`, `fashion`]} />
      <Navigation color="white" />
      <SlideWrapper>
        <Slideshow slides={slides} />
      </SlideWrapper>
      <Wrapper>
        <Container>
          <h3>UNSERE VERANTWORTUNG</h3>
          <p>
            Durch den enormen Bedarf an Plastik, werden jährlich 300 Millionen
            Tonnen davon hergestellt. Die Problematik: circa 10 Million Tonnen
            Kunststoff landen pro Jahr im Meer und verunreinigen dadurch
            wichtigen Lebensraum.
            <br />
            <br />
            So haben wir es uns zur Aufgabe gemacht, etwas gegen den Konsum von
            Plastik und den damit verbundenen Problemen zu unternehmen. Unsere
            OCEAN CASES sind auf der Basis von Weizen und Stroh, somit 100%
            biologisch abbaubar.
          </p>
          <br />
          <br />
          <br />
          <TwoColumnGrid>
            <Img fluid={data.image1.childImageSharp.fluid} alt="NurEinHerz" />
            <div>
              <h3>The Ocean Cleanup</h3>
              <p>
                Pro verkauftem Ocean Case spenden wir 1€ an The Ocean Cleanup.
                Jetzt kaufen und die Welt schützen.
              </p>
              <Button
                onClick={() => window.open('https://theoceancleanup.com')}
              >
                The Ocean Cleanup
              </Button>
            </div>
            <div>
              <h3>Ocean Case Rosè</h3>
              <p>
                Unsere OCEAN CASES ROSÉ sind ebenfalls im Pastelton, wie der
                Name schon sagt, ein zartes Rosa. Wir haben uns bewusst für
                diese natürliche und gedeckte Farbe entschieden, da auch das
                Produkte zu 100% aus natürlichen Materialien besteht.
              </p>
              <Button onClick={() => navigate('/product/oceancase-mint/')}>
                Zum Case
              </Button>
            </div>
            <Img fluid={data.image2.childImageSharp.fluid} alt="NurEinHerz" />
            <Img fluid={data.image3.childImageSharp.fluid} alt="NurEinHerz" />
            <div>
              <h3>Ocean Case Mint</h3>
              <p>
                Unsere OCEAN CASES MINT sind mit dem pastelfarbenen Ton, sehr
                alltagsfähig und trotzdem nicht zu schlicht. Die farbliche
                Struktur der Hülle ist ein Indiz für die Natürlichkeit unserer
                Produkte. So ist auch jede einzelne ein Unikat.
              </p>
              <Button onClick={() => navigate('/product/oceancase-rose/')}>
                Zum Case
              </Button>
            </div>
          </TwoColumnGrid>
          <Footer />
        </Container>
      </Wrapper>
    </>
  )
}

export default Index
