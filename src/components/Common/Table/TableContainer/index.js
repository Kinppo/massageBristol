import React from "react"
import TableItem from "./TableItem"

import "./tableContainer.css"

// Creates a pseudo-table that spits out an array into a nice list. Used for showing practitioner data in a list.
/* 
E.g. 
<TableContainer
content={array}
/> 

*/

const TableContainer = ({ content }) => {
  return (
    <div className="massage-table-container">
      <ul className="massage-table-list">
        {content.map(row => (
          <TableItem content={row} type="client" />
        ))}
      </ul>
    </div>
  )
}

TableContainer.defaultProps = {
  content: [{ name: "default" }],
}

export default TableContainer
