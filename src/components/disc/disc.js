import React, {useState, useEffect, useContext} from 'react'
import './disc.scss'
import { motion } from "framer-motion"

const Disc = (props) => {
  const player = props.props.audio_player
  return (
    <div className={`disc`} dangerouslySetInnerHTML={{ __html: props.props.audio_player }}>
    </div>
  )
}

export default Disc