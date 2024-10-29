import React from 'react'
import { Link } from 'react-router-dom'

function TopBarIcons(props) {
    return (
        <Link to={props.linkurl} className="hidden w-7 h-7 md:mx-4 hover:opacity-60 md:inline-block">
        <img src={props.imgsrc} alt={props.alt} className={props.className} title={props.alt} />
    </Link>
    
)  
}


export default TopBarIcons