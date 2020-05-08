import React, {useState, useContext} from 'react'
import './video.scss'
import Water from '../../static/water.gif'
import MenuContext from '../../context/menu'

const Video = (props) => {
  console.log(props)
  const menu = useContext(MenuContext)[0];
  return (
    <div className={`video ${menu ? 'menu-open' : 'menu-closed'}`}>
      <img src={Water} alt="lights" className="video-video"/>
    </div>
  )
}

export default Video