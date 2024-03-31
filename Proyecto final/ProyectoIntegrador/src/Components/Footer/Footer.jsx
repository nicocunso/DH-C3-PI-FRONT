import React from 'react'
import footerStyles from './Footer.module.css'

import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className={footerStyles.container}>
        
        
        <img className={footerStyles.img} src={logo} alt="logo" />
        <div className={footerStyles.h4}>
        <h4>Copyright © 2024 CarBook</h4>
        </div>
    </div>
  )
}

export default Footer