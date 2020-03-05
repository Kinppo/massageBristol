import React from "react"
import { Link } from "gatsby"

import "./hero.css"

const index = props => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left-content">
            <h1>Massage Bristol</h1>
            <h3>Find The Best Bristol Massages & Spa Offers</h3>
            <p>
              Here at Massages Bristol we aim to bring you the best massages and
              spa services Bristol has to offer. Find your relaxation starting
              below.
            </p>
            <div class="btn-group">
              <Link
                to="/deep-tissue-massage/"
                button
                className="cta-button-deep"
              >
                Deep Tissue Massage
              </Link>
              <Link
                to="/swedish-massage/"
                button
                className="cta-button-swedish"
              >
                Swedish Massage
              </Link>
              <Link to="/sports-massage/" button className="cta-button-sports">
                Sports Massage
              </Link>
              <Link to="/thai-massage/" button className="cta-button-thai">
                Thai Massage
              </Link>
              <Link
                to="/couples-massage/"
                button
                className="cta-button-couples"
              >
                Couples Massage
              </Link>
              <Link to="/hot-stone-massage/" button className="cta-button-hot">
                Hot Stone Massage
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="right-content">
            <img src={heroImage} />
          </div> */}
      </div>
    </section>
  )
}

index.propTypes = {}

export default index
