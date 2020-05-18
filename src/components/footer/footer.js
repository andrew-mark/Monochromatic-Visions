import React, {useState, useEffect, useContext} from 'react'
import './footer.scss'
import { motion } from "framer-motion"
import Facebook from '@assets/icons/facebook.svg'
import Instagram from '@assets/icons/instagram.svg'
import Bandcamp from '@assets/icons/bandcamp.svg'
import Soundcloud from '@assets/icons/soundcloud.svg'
import ArrowDown from '@assets/icons/arrow-down.svg'
import News from '@components/news/news'

const Footer = ({headline}) => {

  const bounce = {
    y: [10, 0],
    loop: true,
    direction: 'alternate'
  }

  return (
    <div className={`footer`}>
      <div className="-wrapper">
        <div className="-container">
          <div className="footer-content">
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
        </div>
      </div>
    </div>
  )
}

export default Footer