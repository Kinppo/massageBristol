import React from "react"

import TagContainer from "../../TagContainer"

const PromoCard = ({
  client: { name, slug, website, address, massageTypes },
}) => {
  return (
    <a
      className="massage-card"
      href={`${website}?utm_source=massagesbristol&utm_medium=display&utm_campaign=Premium%20Slot%20Promotion`}
      rel="nofollow"
    >
      <div className="card-top-content"></div>
      <div className="card-info-content">
        <h3 className="card-massage-name">{name}</h3>
        <span className="location">{address ? address : "Bristol, UK"}</span>
        <TagContainer massageTypes={massageTypes} />
      </div>
    </a>
  )
}

PromoCard.propTypes = {}

export default PromoCard
