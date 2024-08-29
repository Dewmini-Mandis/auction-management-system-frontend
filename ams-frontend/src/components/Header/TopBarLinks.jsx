import React from 'react'
import { Link } from 'react-router-dom'

function TopBarLink(props) {
  return (
    <Link to={props.linkurl} className="text-[#8A3CCD] text-xs underline hover:opacity-80" style={{ fontSize: '14px' }}>{props.linktext}</Link>

  )
}

export default TopBarLink