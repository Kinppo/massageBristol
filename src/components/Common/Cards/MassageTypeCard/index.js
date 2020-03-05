import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { Link } from 'gatsby'
import './massageTypeCard.css'

const MassageTypeCard = ({ type: { name, description, slug, image } }) => {
  console.log(description)
  return (
    <Link
      className="massage-card massage-type"
      to={slug}
      style={{
        background: `linear-gradient(
          rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.3)
        ),url(${image ? image.file.url : ''}) no-repeat center center`,
        backgroundSize: '100% 100%'
      }}
    >
      <h3 className="massage-card-name">{name}</h3>
      {description && <div className="massage-card-detail">{documentToReactComponents(description.json)}</div>}
    </Link>
  )
}

MassageTypeCard.defaultProps = {
  type: {
    name: 'Massage Type Name',
    slug: '#'
  }
}

export default MassageTypeCard
