import React, {useState, useEffect} from 'react'
import './main.scss'
import Header from '@components/header/header'
import Video from '@components/video/video'
import Overlay from '@components/overlay/overlay'
import Content from '@components/content/content'
import MenuContext from '../../context/menu'
import ContentPanelContext from '../../context/contentPanel'

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
    <MenuContext.Provider value={menu}>
      <ContentPanelContext.Provider value={panel}>
        <div className="main">
          <div className="main-wrapper -wrapper">
            <div className="main-container -container">
              <div className="main-content">
                <Header headline={props.blok.headline} />
                <Video />
                <Overlay />
                <Content />
              </div>
            </div>
          </div>
        </div>
      </ContentPanelContext.Provider>
    </MenuContext.Provider>
  )
}

export default Main