import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
import { motion } from "framer-motion"
import anime from 'animejs/lib/anime.es.js';
import Play from '@assets/icons/play.svg'

import './AudioPlayer.scss'

const AudioPlayer = () => {
  const [playing, startPlayback] = useState(false)
  const [currentAudioFile, setCurrentFile] = useState('')

  useEffect(() => {
    // setCurrentFile(require('../../assets/audio/sample.mp3'))
    setCurrentFile('')
    anime({
      targets: '.mono-audioPlayer-path',
      points: [
        { value: '0,50 30,50 90,15 150,60 200,10 260,70 280,50 300,50' },
        { value: '0,50 30,50 90,50 150,50 200,50 260,50 280,50 300,50' },
        { value: '0,50 30,30 90,70 150,40 200,80 260,15 280,50 300,50' },
        { value: '0,50 30,50 90,50 150,50 200,50 260,50 280,50 300,50' },
      ],
      easing: 'easeInQuad',
      duration: 1500,
      // direction: 'alternate',
      loop: true
    });
  }, [])

  const handlePlayPause = () => {
    startPlayback(true)
  }

  const wave = {
    open: {
      x: [0, 100],
      
      transition: { duration: 4, loop: Infinity, staggerChildren: 1 }
    }
  }

  const soundbar = {
    open: {
      scaleY: [0, 5, 3, 7, 0, 10],
    }
  }

  const transition = {
    yoyo: Infinity,
    ease: "linear",
    duration: 4
  }

  return (
    <div className="mono-audioPlayer">
      <div className="mono-audioPlayer-controls">
        <Play className="mono-audioPlayer-play" />
        <Play className="mono-audioPlayer-play" />
        <Play className="mono-audioPlayer-play" />
      </div>
      <div className="mono-audioPlayer-trackName">
        Mysterious skin
      </div>
      <div className="mono-audioPlayer-waveWrapper">
        <svg className="mono-audioPlayer-wave" height="100px" width="300px" viewbox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
          <polyline className="mono-audioPlayer-path" points="0,50 30,50 90,50 150,50 200,50 260,50 280,50 300,50" fill="none" stroke="#fff" strokeWidth="2" />
        </svg>
      </div>
      {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204.7 41.52">
        <g data-name="Layer 2">
          <path fill="none" stroke="#282826" stroke-miterlimit="10" d="M0 30.9h45.51l23.74-10 20.17 10 23.65-30 22.53 40 24.76-10h44.34" data-name="Layer 1"/>
        </g>
  </svg>*/}
      <ReactPlayer
        playing={playing}
        className='react-player mono-audioPlayer-player'
        url={currentAudioFile}
        width='100%'
        height='100%'
      />
      {/*<span onClick={() => this.handlePlayPause()}>Play</span>*/}
    </div>
  )
}

export default AudioPlayer