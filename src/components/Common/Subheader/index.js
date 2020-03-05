import React from "react"
import "./subheader.css"

/*
<Subheader
header="Which Type Of Massage Is Right For You?"
subheader="There's a massage for everyone. Find it here"
/> 
*/

const Subheader = ({ header, subheader }) => {
  return (
    <div className="subheader">
      <h2>{header}</h2>
      <div className="subheader-content">
        <div className="header-left-content">{subheader}</div>
        {/* <div className="header-right-content">View All</div> */}
      </div>
    </div>
  )
}

Subheader.propTypes = {}
Subheader.defaultProps = {
  header: "This is a header",
  subheader: "Its true, it really is!",
}

export default Subheader
