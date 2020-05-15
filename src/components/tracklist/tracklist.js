import React, {useContext} from 'react'
import './tracklist.scss'
import { motion } from "framer-motion"

const Tracklist = (props) => {
  const tracks = [
    { trackName: 'Intro', },
    { trackName: 'Mysterious skin' },
    { trackName: 'I‘ll never feel the same' },
    { trackName: 'What about trees', },
    { trackName: 'Wipeout', },
    { trackName: 'Too close to the sea', },
    { trackName: 'I wonder where you are', },
    { trackName: 'Farewell summer', },
    { trackName: 'The sun', }
  ]

  const menuList = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.4 }
    }
  }

  const menuItems = {
    open: {
      y: '0%',
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 1,
        delay: 5
      }
    },
    closed: {
      y: '150%',
      opacity: 0
    }
  }
  const tracklistTitle = {
    open: {
      y: '0%',
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 1,
        delay: 5
      }
    },
    closed: {
      y: '150%',
      opacity: 0
    }
  }

  return (
    <div className="tracklist">
      <motion.h2 variants={tracklistTitle} initial="closed" animate="open" className="tracklist-title">Too Close To The Sea</motion.h2>
      <motion.ul className="tracklist-tracks" initial="closed" animate="open" variants={menuList}>
        {tracks.map((track,index) => (
          <motion.li key={index} initial="closed" animate="open" variants={menuItems} className="tracklist-track">
            <span className="tracklist-trackNumber"><span>0</span><span>{index + 1}.</span></span><span>{track.trackName}</span>
          </motion.li>
        ))}
      </motion.ul>
      <a className="tracklist-buyNow" target="_blank" href="https://monochromaticvisions.bandcamp.com/">Buy now</a>
    </div>
  )
}

export default Tracklist
