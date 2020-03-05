import React from 'react'
import { Link } from 'gatsby'

import './footer.css'

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
      <div className="footer-links">
      <Link className="footer-item" to="/">Home</Link>
        <Link className="footer-item" to="/">Get Listed</Link>
        <Link className="footer-item" to="/">Privacy & Terms</Link>
        <div className="footer-copyright">Copyright 2020 © All rights Reserved</div>
        <a href="mailto:james@massagesBristol.co.uk" className="footer-contact">james@massagesBristol.co.uk</a>
      </div>
      </div>
    </section>
  )
}

export default Footer
