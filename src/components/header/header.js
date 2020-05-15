import React, {useState, useEffect, useContext} from 'react'
import './header.scss'
import { motion } from "framer-motion"

const Header = ({headline}) => {
  return (
    <div className={`header`}>
      <motion.h1 className="header-headline">{headline}</motion.h1>
      <div className="header-menu">
        <ul className="header-menuList">
          <li className="header-menuListItem">Shows</li>
          <li className="header-menuListItem">About</li>
          <li className="header-menuListItem">Discography</li>
        </ul>
      </div>
    </div>
  )
}

export default Header