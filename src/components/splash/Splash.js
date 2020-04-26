import React, {useState, useEffect, useRef} from 'react'
import { useDimensions } from "../useDimensions";

import { motion } from "framer-motion"
import './Splash.scss'
import Triangle from '@assets/icons/triangle.svg'
import Rectangle from '@assets/icons/rectangle.svg'
import lights from '../../assets/images/pulsing-clip.gif'
// import Triangle from './path/to/twitter.svg';

const Splash = (props) => {
  const [animating, startAnimating] = useState(false)
  const [content, selectContent] = useState(0)
  const [menuOpen, toggleMenu] = useState(false)

  useEffect(() => {
    getViewportSingleUnit()
    window.addEventListener('resize', function onResizeHandler() {getViewportSingleUnit()})
    return () => {
      window.removeEventListener('resize', function onResizeHandler() {getViewportSingleUnit()})
    }
  }, [])

  useEffect(() => {
    startAnimating(true)
  }, [])

  const getViewportSingleUnit = () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  const openMenu = (value, toggle) => {
    selectContent(value)
    toggleMenu(toggle)
  }

  const closeMenu = () => {
    toggleMenu(false)
  }

  const menuStates = {
    menuContent: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.2
      }
    },
    noContent: {
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.1
      }
    }
  }

  return (
    <div className="intro">
      <motion.div className={`intro-video`} animate={{opacity: 1}} initial={true} transition={{ duration: 10, delay: 0.5 }}>
        <img src={lights} alt="lights" />
      </motion.div>
      <div className="intro-title">
        <h1>
          <div className="intro-title-one">
            Mono
          </div>
          <div className="intro-title-one">
            chromatic
          </div>
          <div className="intro-title-second">
            Visions
          </div>
        </h1>
      </div>
      <div className="intro-clickToPlay">
        Click to play
      </div>
      <nav className="intro-menu">
        <ul className="intro-list">
          <li className="intro-listItem"><button onClick={() => openMenu(1, true)}>Who</button></li>
          <li className="intro-listItem" onClick={() => openMenu(2, true)}><button>What</button></li>
          <li className="intro-listItem" onClick={() => openMenu(3, true)}><button>Where</button></li>
        </ul>
      </nav>

      <motion.div animate={menuOpen ? "menuContent" : "noContent"} className={`intro-slideInMenu ${menuOpen ? 'is-open' : ''}`}>
        <motion.div variants={menuStates} initial={false} className={`intro-content ${menuOpen ? 'is-open' : ''}`} >
          <div className="intro-about">
           Monochromatic Visions was conceived in 2014 while Arthur was lead guitarist and founding member of another band that had been thriving in the Greek indie rock scene for the past decade, after having inked a record deal with a major label at the age of 17. Their collective decision to leave their country (then in the depths of the debt crisis) was intended as a first step towards breaking out of the comfort and confines of the local scene and an attempt to reinvigorate their creative process but lead, paradoxically, to the rapid dismantling of that band and the birth of Monochromatic Vision’s first EP From Here To There. Having returned to his hometown and finding himself if not at a dead-end then perhaps in a long and winding tunnel, Arthur followed up with a second EP aptly named Waiting For The Light, until the self-titled Monochromatic Visions EP finally took form.
          </div>
          <button onClick={() => closeMenu()} className="intro-slideInMenuClose">
            X
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Splash