
import React, {useState, useEffect, useContext} from 'react'
import './discography.scss'
import { motion } from "framer-motion"

const Footer = ({headline}) => {

  return (
    <div className={`discography`}>
      <iframe style={{border: 0, width: '350px', height: '350px'}}
        src="https://bandcamp.com/EmbeddedPlayer/album=3170880229/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/" seamless>
        <a href="http://monochromaticvisions.bandcamp.com/album/waiting-for-the-light">Waiting For The Light by Monochromatic Visions</a>
      </iframe>
    </div>
  )
}

export default Footer