import { graphql, useStaticQuery } from "gatsby"
import React, { Fragment } from "react"
import LargeCard from "../../components/Common/Cards/LargeCard"
import MassageTypeCard from "../../components/Common/Cards/MassageTypeCard"
import Subheader from "../../components/Common/Subheader"
import TableContainer from "../../components/Common/Table/TableContainer"
import Hero from "../../components/Root/Hero"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import "./rootPage.css"

const RootPage = props => {
  const data = useStaticQuery(graphql`
    query RootPageQuery {
      allContentfulPractitioners {
        edges {
          node {
            id
            name
            mainImage {
              fluid {
                ...GatsbyContentfulFluid_noBase64
              }
            }
            slug
            website
            address
            massageTypes {
              name
              id
              shortName
              slug
              description {
                json
              }
            }
          }
        }
      }
      allContentfulMassageType {
        edges {
          node {
            id
            name
            slug
            image {
              file {
                url
              }
            }
            description {
              json
            }
          }
        }
      }
      allContentfulPage(filter: { slug: { eq: "/" } }) {
        edges {
          node {
            id
            pageContent {
              name
              richText {
                json
              }
            }
          }
        }
      }
    }
  `)

  const {
    allContentfulPractitioners,
    allContentfulMassageType,
    allContentfulPage,
  } = data

  const Bold = ({ children }) => <span className="bold">{children}</span>
  const Text = ({ children }) => <p className="align-center">{children}</p>

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }

  return (
    <Fragment>
      <Hero />
      {/* Favourite Massages */}
      <section className="favourite-massages">
        <div className="container">
          <Subheader
            header="Our Favourite Massages"
            subheader="A Top Selection From The Best Practitioners & Therapists In Bristol"
          />
          <div className="promo-card-holder">
            <LargeCard client={allContentfulPractitioners.edges[0].node} />
            <LargeCard client={allContentfulPractitioners.edges[1].node} />
            <LargeCard client={allContentfulPractitioners.edges[2].node} />
          </div>
        </div>
      </section>
      {/* Banner Bar */}
      {/* <section className="banner-section">
        <div className="container">
          <BannerBar colour="#23E6A8" />
        </div>
      </section> */}

      {/* Massage Types */}
      <section>
        <div className="container">
          <Subheader
            header="Which Type Of Massage Is Right For You?"
            subheader="There's a massage for everyone. Find it here"
          />

          <div className="massage-types">
            {allContentfulMassageType.edges.map(massageType => (
              <MassageTypeCard type={massageType.node} />
            ))}
          </div>
        </div>
      </section>
      {/* Table */}
      <section className="popular-table">
        <div className="container">
          <Subheader header="Massage Therapists In Bristol" subheader="" />{" "}
          <TableContainer
            content={allContentfulPractitioners.edges.map(node => node.node)}
          />
          {/* <h3>..Plus 134 More Massage Therapists In Bristol</h3>
          <button>View All</button> */}
        </div>
      </section>
      {/* <section>
        <div className="container">
          <BannerBar colour="#00C3EF" />
        </div>
      </section> */}
      <section>
        <div className="container">
          {documentToReactComponents(
            allContentfulPage.edges[0].node.pageContent[0].richText.json,
            options
          )}
        </div>
      </section>
    </Fragment>
  )
}

export default RootPage
