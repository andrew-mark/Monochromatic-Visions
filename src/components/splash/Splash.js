import React, {useState, useEffect} from 'react'
import './Splash.scss'

const Splash = (props) => {

  const [startAnimation, startAnimating] = useState(false)
  const [endAnimation, endAnimating] = useState(false)
  const [secondStage, startSecondStage] = useState(false)

  useEffect(() => {
    getViewportSingleUnit()
    window.addEventListener('resize', function onResizeHandler() {getViewportSingleUnit()})
    setTimeout(() => {
      startAnimating(true)
    }, 1000)
    setTimeout(() => {
      endAnimating(true)
    }, 1700)
    setTimeout(() => {
      startSecondStage(true)
    },3000)
    return () => {
      window.removeEventListener('resize', function onResizeHandler() {getViewportSingleUnit()})
    }
  }, [])

  const getViewportSingleUnit = () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  return (
    <div className="intro">
      <div className={`intro-background
        ${startAnimation ? 'is-animating' : ''}
        ${endAnimation ? 'has-finished-animating' : ''}
        `}>
        <div className="intro-title">
          Monochromatic Visions
        </div>
      </div>
      <div className={`intro-line ${endAnimation ? 'is-active' : ''}`}></div>
      <div className={`intro-video ${secondStage ? 'is-active' : ''}`}>
        <img src={require('../../assets/images/Pulsing clip.gif')} alt="lights" />
      </div>
      <div className={`intro-secondBackground ${secondStage ? 'second-stage' : ''}`}>
      </div>
      <div className={`intro-thirdBackground ${secondStage ? 'second-stage' : ''}`}>
      </div>
    </div>
  )
}

export default Splash