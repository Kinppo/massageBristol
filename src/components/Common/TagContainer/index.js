import React from "react"

import "./tagContainer.css"

const TagContainer = ({ massageTypes }) => {
  return (
    <ul className="card-massage-types">
      {massageTypes &&
        massageTypes.map(({ shortName, slug }) => (
          <li className={`card-massage-type type-${slug}`}>{shortName}</li>
        ))}
    </ul>
  )
}

TagContainer.defaultProps = {}

export default TagContainer
