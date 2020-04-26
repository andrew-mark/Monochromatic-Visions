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
  const [transitionLengths, updateTransition] = useState({left: 0, right: 0})
  const visionsRef = useRef(null);
  const monoRef = useRef(null);
  const mRef = useRef(null);
  const vRef = useRef(null);
  const mono = useDimensions(monoRef);
  const visions = useDimensions(visionsRef);
  const m = useDimensions(mRef);
  const v = useDimensions(vRef);
  
  useEffect(() => {
    getViewportSingleUnit()
    window.addEventListener('resize', function onResizeHandler() {getViewportSingleUnit()})
    return () => {
      window.removeEventListener('resize', function onResizeHandler() {getViewportSingleUnit()})
    }
  }, [])

  useEffect(() => {
    const leftTransition = m.left - mono.left
    const rightTransition = visions.left - v.left
    updateTransition({ left: leftTransition,right: rightTransition})
  }, [mono, m, v, visions])

  useEffect(() => {
    startAnimating(true)
  }, [transitionLengths])

  const getViewportSingleUnit = () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  const variants = {
    initial: {
      rotate: [0, -360, -90]
    },
  }

  const initial = {
    initial: {
      rotate: [0, 90]
    }
  }

  const slideLeft = {
    initial: (transitionLengths) => ({
      opacity: [0,1],
      x: -transitionLengths.left
    })
  }

  const slideRight = {
    initial: (transitionLengths) => ({
      opacity: [0,1],
      x: transitionLengths.right
    })
  }

  const fadeIn = {
    initial: {
      opacity: [0, 1, 0]
    }
  }

  const video = {
    initial: {
      opacity: [0, 1]
    }
  }

  return (
    <div className="intro">
      <motion.div className={`intro-video`} animate={{opacity: 1}} initial={true} transition={{ duration: 10, delay: 0.5 }}>
        <img src={lights} alt="lights" />
      </motion.div>
      <div className="intro-title">
        <motion.div className="intro-spinner" animate={animating ? "initial" : ""}>
          <motion.div className="intro-initials">
            <motion.div className="intro-triangle" variants={fadeIn} initial={false} transition={{ duration: 1.5 }} >
              <Triangle width="45" height="52"/>
            </motion.div>
            <motion.div variants={slideLeft} ref={mRef} custom={transitionLengths} transition={{ duration: 1, delay: 1.5 }} className="intro-initialWrapper">
              <motion.span className="intro-initial">M</motion.span>
            </motion.div>
            <motion.div variants={slideRight} custom={transitionLengths} ref={vRef} transition={{ duration: 1, delay: 1.5  }} className="intro-initialWrapper">
              <motion.span className="intro-initial">V</motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div animate={{opacity: [0,1], visibility: 'visible'}} transition={{ duration: 2, delay: 2 }} className="intro-words">
          <span ref={monoRef} className="intro-word">Monochromatic</span>&nbsp;
          <span ref={visionsRef} className="intro-word">Visions</span>
        </motion.div>
      </div>
    </div>
  )
}

export default Splash