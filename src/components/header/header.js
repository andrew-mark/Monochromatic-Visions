import React, {useState, useEffect, useContext} from 'react'
import './header.scss'
import { motion } from "framer-motion"

const Header = ({headline}) => {
  // useEffect(() => {
  //   getViewportSingleUnit()
  //   window.addEventListener('resize', function onResizeHandler() {getViewportSingleUnit()})
  //   return () => {
  //     window.removeEventListener('resize', function onResizeHandler() {getViewportSingleUnit()})
  //   }
  // }, [])

  const getViewportSingleUnit = () => {
    const vw = window.innerWidth * 0.01
    setLetterSpacing(vw * 2)
    console.log(vw)
    // document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  return (
    <div className={`header`}>
      <motion.h1 className="header-headline">{headline}</motion.h1>
    </div>
  )
}

export default Header