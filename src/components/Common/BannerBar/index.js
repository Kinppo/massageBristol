import React from 'react'
import PropTypes from 'prop-types'

import './bannerBar.css'

const BannerBar = ({ colour }) => {
  return (
    <div className="banner-bar" style={{ backgroundColor: colour }}>
      <div className="banner-bar-content">
        <h3>Treat Someone Special, Yourself Included </h3>
        <p>
          Festicket's group bookings team are dedicated to helping you create the ideal festival package for your group,
          with the added bonus of group discounts!
        </p>
        <div className="cta-button">Treat Yourself</div>
      </div>
    </div>
  )
}

BannerBar.defaultProps = {
  colour: 'pink'
}

export default BannerBar
