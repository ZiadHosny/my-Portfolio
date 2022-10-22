import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const WebsiteLink = ({ icon, href }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon} color="#4d4d4e" className="anchor-icon" />
      </a>
    </li>
  )
}

export default WebsiteLink
