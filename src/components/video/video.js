import React, {useState, useContext} from 'react'
import './video.scss'
import Water from '../../static/water.gif'
// import Waves from '../../static/waves-split.mp4'
import MenuContext from '../../context/menu'

const Video = (props) => {
  console.log(props)
  const menu = useContext(MenuContext)[0];
  return (
    <div className={`video ${menu ? 'menu-open' : 'menu-closed'}`}>
    { /* <video src={Waves} muted autoPlay className="video-video" loop></video> */ }
    <img src={Water} alt="lights" className="video-video"/>
    </div>
  )
}

export default Video