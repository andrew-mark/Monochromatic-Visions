import React, {useState, useContext} from 'react'
import './content.scss'
import ContentPanelContext from '../../context/contentPanel'
import { motion } from "framer-motion"
import Tracklist from '@components/tracklist/tracklist'

export const components = {
  Tracklist
}

const Content = (props) => {
  const panel = useContext(ContentPanelContext)[0]

  const animateContent = {
    open: {
      x: '0',
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.25
      }
    },
    closed: {
      x: '-100%',
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.25,
        when: "afterChildren"
      }
    }
  }

  return (
    <motion.div variants={animateContent} initial={false} animate={panel.open ? "open" : "closed"} className="content">
      <div className="content-panel">
        {React.createElement((components['Tracklist']), {})}
      </div>
    </motion.div>
  )
}

export default Content