import React from 'react'
import { Link } from 'react-router-dom'

function TopBarLink(props) {
  return (
    <Link to={props.linkurl} className="text-[#8A3CCD] underline hover:opacity-80 text-[10px] lg:text-[12px]" >{props.linktext}</Link>

  )
}

export default TopBarLink