import React, {useState, useEffect, useRef} from 'react'
import { useDimensions } from "../useDimensions";

import { motion } from "framer-motion"
import './Splash.scss'
import Play from '@assets/icons/play.svg'
import Facebook from '@assets/icons/facebook.svg'
import MV from '@assets/icons/mv.svg'
import Water from '../../static/water.gif'
import AudioPlayer from '../audio-player/AudioPlayer'

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
    setTimeout(() => {
      startAnimating(true)
    }, 4000)
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

  const wave = {
    open: {
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  }

  const soundbar = {
    open: {
      scaleY: 5,
    }
  }

  const transition = {
    yoyo: Infinity,
    ease: "linear",
    duration: 1
  }

  return (
    <div className="intro">
      <motion.div className={`intro-video`} animate={{opacity: 1}} initial={true} transition={{ duration: 10, delay: 0.5 }}>
          <img src={Water} alt="lights" className={`${animating ? 'is-open' : ''}`} />
        { /* <MV width="50%" height="50%" className="intro-mv" /> */ }
          <div className="intro-black-overlay clip-path"></div>
          <div></div>
      </motion.div>
      <nav className="intro-menu">
        <ul className="intro-list">
          <li className="intro-listItem"><button onClick={() => openMenu(1, true)}>Gigs</button></li>
          <li className="intro-listItem" onClick={() => openMenu(2, true)}><button>About</button></li>
          <li className="intro-listItem" onClick={() => openMenu(3, true)}><button>Listen</button></li>
        </ul>
      </nav>
      <AudioPlayer />
      <motion.div  animate={"open"} className="intro-waveWrapper">
        <Play className="intro-play" />
        <motion.div variants={wave} className="intro-wave">
          <motion.span variants={soundbar} transition={transition} className="intro-soundBar"></motion.span>
          <motion.span variants={soundbar} transition={transition} className="intro-soundBar"></motion.span>
          <motion.span variants={soundbar} transition={transition} className="intro-soundBar"></motion.span>
          <motion.span variants={soundbar} transition={transition} className="intro-soundBar"></motion.span>
          <motion.span variants={soundbar} transition={transition} className="intro-soundBar"></motion.span>
          <motion.span variants={soundbar} transition={transition} className="intro-soundBar"></motion.span>
          <motion.span variants={soundbar} transition={transition} className="intro-soundBar"></motion.span>
          <motion.span variants={soundbar} transition={transition} className="intro-soundBar"></motion.span>
          <motion.span variants={soundbar} transition={transition} className="intro-soundBar"></motion.span>
          <motion.span variants={soundbar} transition={transition} className="intro-soundBar"></motion.span>
        </motion.div>
        <div className="intro-socialMedia">
          <Facebook className="intro-facebook" />
          <Facebook className="intro-facebook" />
        </div>
        
      </motion.div>
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
      {/*<svg class="clip-svg">
        <defs>
          <clipPath id="triangle" clipPathUnits="objectBoundingBox" >
            <polygon points=".5 0.25, 0.475 0.375, 0.54 0.75, 0.6 0.75"/>
          </clipPath>
        </defs>
</svg> */}
      <svg className="clip-svg">
        <defs>
          <clipPath id="triangle" clipPathUnits="objectBoundingBox" >
            <polygon points=".3 0.75, 0.42 0.25, 0.435 0.25, 0.315 0.75"></polygon>
            <polygon points=".42 0.25, 0.48 0.5, 0.495 0.5, 0.435 0.25"></polygon>
            <polygon points=".52 0.25, 0.535 0.25, 0.635 0.75, 0.62 0.75"></polygon>
            <polygon points=".62 0.75, 0.635 0.75, 0.745 0.25, 0.73 0.25"></polygon>
            <polygon points=".5 0.25, 0.4 0.75, 0.6 0.75"/>
          </clipPath>
        </defs>
      </svg>
      <svg className="clip-svg">
        <defs>
          <clipPath id="triangleOpen" clipPathUnits="objectBoundingBox">
            <polygon points="0 0, 0 1, 1 0, 1 1"></polygon>
            <polygon points="0 0, 0 1, 1 0, 1 0"></polygon>
            <polygon points="0 1, 1 1, 0 0, 0 0"></polygon>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Splash