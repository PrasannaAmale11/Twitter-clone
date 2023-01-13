import React from 'react'
import './sidebaroption.css'
const SidebarOption = ({active,text,Icon}) => {
  return (
    <div className={`sidebaroption ${active && 'sidebarOption--active'}`}>

        <Icon/>
        <h2>{text}</h2>
    
    </div>
  )
}

export default SidebarOption