import React, {useState, useContext} from 'react'
import './video.scss'
import Waves from '../../static/waves-split.mp4'
import Water from '../../static/water.jpg'

const Video = (props) => {
  return (
    <div className={`video`}>
      <img src={Water} alt="water-flowing" className="video-video"/>
    </div>
  )
}

export default Video