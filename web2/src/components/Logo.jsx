import React from 'react'

import logo from '../assets/logo.svg'

const Logo = ({ link }) => {
  return (
    <div
      className="flex justify-start"
      onClick={() => window.open(link, "_blank")}
    >
      <img
        src={logo}
        alt="logo_icon"  
        width="300px"      
      />
      
    </div>
  )
}

export default Logo