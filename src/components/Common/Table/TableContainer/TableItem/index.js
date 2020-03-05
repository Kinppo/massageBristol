import React from 'react'

import TagContainer from '../../../TagContainer'

import './tableItem.css'

const TableItem = ({ content, type }) => {
  return (
    <a
      className="massage-outbound"
      href={`${content.website}?utm_source=massagesbristol&utm_medium=display&utm_campaign=Premium%20Slot%20Promotion`}
      rel="nofollow"
    >
      <li className="massage-table-item">
        <div className="massage-table-item-detail">
          <h3 className="massage-table-item-header">{content.name}</h3>
          <span className="massage-table-item-location">{content.address ? content.address : 'Bristol, UK'}</span>
        </div>

        {/* If the table is displaying client info, let's show massageType tags */}
        {type === 'client' && <TagContainer {...content} />}
        <div className="cta-button massage-link">View Massages</div>
      </li>
    </a>
  )
}

TableItem.defaultProps = {
  content: { name: 'Default Name', website: 'https://google.com' }
}

export default TableItem
