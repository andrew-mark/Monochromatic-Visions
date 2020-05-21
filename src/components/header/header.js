import React, {useState, useEffect, useContext} from 'react'
import './header.scss'
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Facebook from '@assets/icons/facebook.svg'
import Instagram from '@assets/icons/instagram.svg'
import Bandcamp from '@assets/icons/bandcamp.svg'
import Soundcloud from '@assets/icons/soundcloud.svg'
import Spotify from '@assets/icons/spotify.svg'

const Header = (props) => {
  const [menuOpen, onOpenMenu] = useState(false)
  const menuHandler = () => {
    menuOpen ? onOpenMenu(false) : onOpenMenu(true)
  }

  return (
    <div className={`header`}>
      <div className="-wrapper">
        <div className="-container">
          <div className="header-content">
            <motion.h1 className="header-headline"><Link className="header-headlineLink" to="/">{props.blok.logo}</Link></motion.h1>
            <button onClick={() => menuHandler()} className={`header-burger hamburger hamburger--squeeze ${menuOpen ? 'is-active' : 'not-active'}`} type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className={`header-menu ${menuOpen ? 'is-active' : 'not-active'}`}>
              <ul className="header-menuList">
                {props.blok.menu.map((item, index) => (
                  <li key={index} className="header-menuListItem"><Link to={item.menu_link} activeClassName="is-active" className="header-menuListLink">{item.menu_label}</Link></li>
                ))}
              </ul>
              <div className="header-socialMedia">
                <div className="header-icons">
                  <a className="header-iconLink" target="_blank" href="https://www.monochromaticvisions.bandcamp.com/">
                    <Bandcamp className="header-bandcamp" />
                  </a>
                  <a className="header-iconLink" target="_blank" href="https://soundcloud.com/monochromaticvisions/">
                    <Soundcloud className="header-soundcloud" />
                  </a>
                  <a className="header-iconLink" target="_blank" href="https://open.spotify.com/artist/3UYvaunBP0kB17VtRE8Fen?si=Lm7r9RXoSPCiRsLWBtfDaw">
                    <Spotify className="header-spotify" />
                  </a>
                  <a className="header-iconLink" target="_blank" href="https://www.facebook.com/monochromaticvisions/">
                    <Facebook className="header-facebook" />
                  </a>
                  <a className="header-iconLink" target="_blank" href="https://www.instagram.com/monochromatic.visions/">
                    <Instagram className="header-instagram"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header