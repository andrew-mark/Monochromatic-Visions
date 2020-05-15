import React, {useState, useEffect} from 'react'
import './Intro.scss'
import MV from '@assets/icons/mv.svg'
import anime from 'animejs/lib/anime.es.js';
import { motion } from "framer-motion"

const Intro = (props) => {

  useEffect(() => {
    anime({
      targets: '.mv-logo-path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      loop: false
    });
  }, [])

  const fadeOutIntro = {
    open: {
      opacity:0,
      transition: {
        ease: 'easeOut',
        duration: 5,
        delay: 2
      },
      transitionEnd: {
        display: "none",
      },
    },
    closed: {
      opacity: 1
    }
  }

  return (
    <motion.div variants={fadeOutIntro} initial="closed" animate="open" className="intro">
      <div className="intro-background">
        <div className="intro-title">
          <MV className="intro-logo" />
        </div>
      </div>
    </motion.div>
  )
}

export default Intro