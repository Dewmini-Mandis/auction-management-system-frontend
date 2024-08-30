import React from 'react'
import { Link } from 'react-router-dom'

function TopBarIcons(props) {
    return (
        <Link to={props.linkurl} className="hidden md:mx-4 w-7 h-7 hover:opacity-60 md:inline-block">
        <img src={props.imgsrc} alt={props.alt} className={props.className} title={props.alt} />
    </Link>
    
)  
}


export default TopBarIcons