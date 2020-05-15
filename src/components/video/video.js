import React, {useState, useContext} from 'react'
import './video.scss'
import Water from '../../static/water.gif'
import Waves from '../../static/waves-split.mp4'
import { motion } from "framer-motion"

const Video = (props) => {
  const fadeUp = {
    hidden: {
      y: '0'
    },
    visible: {
      y: '0'
    }
  }

  const transition = {
    duration: 1,
    delay: 5
  }

  const videos = [
    Waves
  ]

  const scaleVideos = {
    hidden: {
      scale: 1
    },
    visible: index => ({
      scale: 1 - index * 0.2,
      transition: {
        duration: 0.4,
        delay: index * 1
      }
    })
  }


  return (
    <motion.div variants={fadeUp} initial="hidden"
    animate="visible" transition={transition} className={`video`}>
      {videos.map((video, index) => (
         <motion.video key={index} variants={scaleVideos} initial="hidden"
      animate="visible" custom={index} src={video} muted autoPlay className="video-video" loop></motion.video>
      ))}
    </motion.div>
  )
}

export default Video