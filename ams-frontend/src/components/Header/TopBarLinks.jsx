import React from 'react'
import { Link } from 'react-router-dom'

function TopBarLink(props) {
  return (
    <Link to={props.linkurl} className="text-[#8A3CCD] underline text-[10px] md:text-[16px] md:hover:font-medium" >{props.linktext}</Link>

  )
}

export default TopBarLink