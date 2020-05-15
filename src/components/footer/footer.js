import React, {useState, useEffect, useContext} from 'react'
import './footer.scss'
import { motion } from "framer-motion"
import Facebook from '@assets/icons/facebook.svg'
import Instagram from '@assets/icons/instagram.svg'
import Bandcamp from '@assets/icons/bandcamp.svg'
import Soundcloud from '@assets/icons/soundcloud.svg'

const Footer = ({headline}) => {
 
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
    <div className={`footer`}>
      <div className="footer-icons">
        <a className="footer-iconLink" href="https://www.monochromaticvisions.bandcamp.com/">
          <Bandcamp className="footer-bandcamp" />
        </a>
        <a className="footer-iconLink" href="https://soundcloud.com/monochromaticvisions/">
          <Soundcloud className="footer-soundcloud" />
        </a>
        <a className="footer-iconLink" href="https://www.facebook.com/monochromaticvisions/">
          <Facebook />
        </a>
        <a className="footer-iconLink" href="https://www.instagram.com/monochromatic.visions/">
          <Instagram className="footer-instagram"/>
        </a>
      </div>
    </div>
  )
}

export default Footer