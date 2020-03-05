import { graphql } from "gatsby"
import React, { Fragment } from "react"

import Layout from "../../components/layout"

import "./categoryPage.css"

import Hero from "../../components/CategoryPage/Hero"
import Subheader from "../../components/Common/Subheader"
import PromoCard from "../../components/Common/Cards/PromoCard"
import TableContainer from "../../components/Common/Table/TableContainer"
import SEO from "../../components/seo"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { MARKS } from "@contentful/rich-text-types"
import MassageTypeCard from "../../components/Common/Cards/MassageTypeCard"

const CategoryPage = ({
  data: {
    contentfulMassageType: contentfulMassageType,
    allContentfulMassageType: allContentfulMassageType,
  },
}) => {
  // Sometimes, we might have a category that hasn't been assigned any practitioners, in which case we need to make sure components can handle it.
  // WE SHOULD FIX THIS WITH CONDITIONAL LOGIC WITHIN JSX INSTEAD. MAYBE?
  console.log(allContentfulMassageType)
  const practitioners = contentfulMassageType.practitioners
    ? contentfulMassageType.practitioners
    : []

  const seo = {
    title: contentfulMassageType.seoTitle
      ? contentfulMassageType.seoTitle
      : `${contentfulMassageType.name} Bristol - Massages Bristol`,
    description: contentfulMassageType.seoDescription
      ? contentfulMassageType.seoDescription
      : `Find the best ${contentfulMassageType.name} in Bristol. Compare all the best massage deals in Bristol in 2020 and book a relaxing massage today.`,
  }

  // Lets us embed youtube videos. HACCCKKKKY
  const renderOption = {
    renderMark: {
      [MARKS.CODE]: embedded => (
        <iframe
          width="100%"
          height="365px"
          src={embedded}
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      ),
    },
  }

  return (
    <Fragment>
      <Layout>
        <SEO title={seo.title} description={seo.description} />

        <Hero category={contentfulMassageType} />
        {contentfulMassageType.premiumSlots && (
          <section className="vip-section">
            <div className="container">
              <Subheader
                header={`Our Favourite ${contentfulMassageType.name}s in Bristol`}
                subheader={`A Top Selection From The Best ${contentfulMassageType.name} Practitioners & Therapists In Bristol`}
              />
              <div className="vip-card-list">
                {contentfulMassageType.premiumSlots.map(premium => (
                  <PromoCard client={premium} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="all-massage-list">
          <div className="container">
            <Subheader
              header={`${practitioners.length} ${contentfulMassageType.name}s In Bristol`}
              subheader={`A Top Selection From The Best ${contentfulMassageType.name} Practitioners & Therapists In Bristol`}
            />
            {practitioners.length > 0 && (
              <TableContainer content={practitioners} />
            )}
          </div>
        </section>
        <section>
          <div className="container">
            <Subheader
              header="Find Another Massage in Bristol"
              subheader="Not found the right mmassage yet? Browse through all the best massages in Bristol below! "
            />

            <div className="massage-types">
              {allContentfulMassageType.edges.map(massageType => (
                <MassageTypeCard type={massageType.node} />
              ))}
            </div>
          </div>
        </section>
        <section className="more-info">
          <div className="container">
            <div className="more-info-content">
              {contentfulMassageType.richContent &&
                documentToReactComponents(
                  contentfulMassageType.richContent.json,
                  renderOption
                )}
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  )
}

export default CategoryPage
export const pageQuery = graphql`
  query CategoryBySlug($slug: String!) {
    contentfulMassageType(slug: { eq: $slug }) {
      id
      name
      slug
      shortName
      seoTitle
      seoDescription
      seoH1
      description {
        json
      }
      richContent {
        json
      }
      premiumSlots {
        id
        name
        slug
        website
        address
        massageTypes {
          id
          name
          shortName
          slug
        }
      }
      practitioners {
        id
        name
        website
        address
        massageTypes {
          id
          name
          shortName
          slug
        }
        location {
          lon
          lat
        }
      }
    }
    allContentfulMassageType {
      edges {
        node {
          id
          name
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`
