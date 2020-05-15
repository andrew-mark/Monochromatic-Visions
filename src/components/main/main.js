import React, {useState, useEffect} from 'react'
import './main.scss'
import Header from '@components/header/header'
import Footer from '@components/footer/footer'
import Video from '@components/video/video'
import Intro from '@components/intro/Intro'
import Tracklist from '@components/tracklist/tracklist'

export const components = {
  Tracklist
}

const Main = (props) => {
  const menu = useState(false);
  const panel = useState(false);

  useEffect(() => {
    getViewportSingleUnit()
    window.addEventListener('resize', function onResizeHandler() {getViewportSingleUnit()})
    return () => {
      window.removeEventListener('resize', function onResizeHandler() {getViewportSingleUnit()})
    }
  }, [])

  const getViewportSingleUnit = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  return (
    <div className="main">
      <div className="main-wrapper -wrapper">
        <div className="main-container -container">
          <div className="main-content">
            <Header headline={props.blok.headline} />
            <div className="main-content-content">
              <Video />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main