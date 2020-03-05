import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import "./categoryHero.css"

const CategoryHero = ({ category }) => {
  return (
    <section className="category-hero-section">
      <div className="container">
        <div className="category-hero-content">
          <div className="hero-left-content">
            <h1>
              {category.seoH1 ? category.seoH1 : `${category.name} Bristol`}{" "}
            </h1>
            <h3>Find The Best {category.name} & Spa Offers in Bristol</h3>
            {category.description &&
              documentToReactComponents(category.description.json)}
          </div>
        </div>
      </div>
    </section>
  )
}

CategoryHero.propTypes = {}

export default CategoryHero
