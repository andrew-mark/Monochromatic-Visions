import React, {useState, useEffect} from 'react'
import './main.scss'
import Video from '@components/video/video'
import News from '@components/news/news'
import Shows from '@components/shows/shows'

const Main = (props) => {
  return (
    <React.Fragment>
      <div className="main-video">
        <Video />
      </div>
      <div className="main">
        <div className="main-wrapper -wrapper">
          <div className="main-container -container">
            <div className="main-content">
              <News />
              <Shows />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Main