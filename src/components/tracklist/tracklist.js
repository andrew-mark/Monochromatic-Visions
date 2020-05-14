import React, {useContext} from 'react'
import './tracklist.scss'
import { motion } from "framer-motion"
import ContentPanelContext from '../../context/contentPanel'
import Play from '@assets/icons/play.svg'

const Tracklist = (props) => {
  const content = useContext(ContentPanelContext);

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
    },
    closed: {
      transition: { staggerChildren: 0.05, delayChildren: 0, staggerDirection: -1}
    }
  }

  const menuItems = {
    open: {
      y: '0%',
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.3
      }
    },
    closed: {
      y: '150%',
      opacity: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.3
      }
    }
  }
  const tracklistTitle = {
    open: {
      y: '0%',
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.3,
        delay: 0.4
      }
    },
    closed: {
      y: '150%',
      opacity: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.3,
        delay: 0.3
      }
    }
  }

  return (
    <div className="tracklist" animate={content.open ? "open" : "closed"}>
      <motion.h2 variants={tracklistTitle} className="tracklist-title">Too Close To The Sea</motion.h2>
      <motion.ul className="tracklist-tracks" variants={menuList}>
        {tracks.map((track,index) => (
          <motion.li key={index} variants={menuItems} className="tracklist-track">
            <span>{track.trackName}</span>
            <span><Play className="tracklist-play" /></span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Tracklist
