import React, {useState, useContext} from 'react'
import './content.scss'
import ContentPanelContext from '../../context/contentPanel'
import { motion } from "framer-motion"

const Content = (props) => {
  const panel = useContext(ContentPanelContext)[0]

  const animateContent = {
    open: {
      scaleX: 1,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.25
      }
    },
    closed: {
      scaleX: 0.2,
      opacity: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.25
      }
    }
  }

  return (
    <motion.div variants={animateContent} initial={false} animate={panel ? "open" : "closed"} className="content">
      <div className="content-wrapper">
        <div className="content-container">
          <div className="content-panel">
            here goes some content
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Content