import React, {useState, useContext} from 'react'
import './video.scss'
import Waves from '../../static/waves-split.mp4'

const Video = (props) => {
  return (
    <div className={`video`}>
      <video muted autoPlay loop className="video-video">
        <source src={Waves} type="video/mp4"></source>
      </video>
    </div>
  )
}

export default Video