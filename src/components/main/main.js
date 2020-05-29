import React, {useState, useEffect} from 'react'
import './main.scss'
import Video from '@components/video/video'
import News from '@components/news/news'
import { Link } from 'gatsby'
import Image from '@components/image/image'

const Main = (props) => {
  const shows = props.blok.News[1].reference.content.global[0].shows.reverse().slice(0,4)
  const news = props.blok.News[0].reference.content.global[0]['news_item'].reverse().slice(0,4)

  return (
    <React.Fragment>
      <div className="main-video">
        <Video />
        <div className="main-videoOverlay">
          <h3 className="main-newAlbum">New Album</h3>
          <h2 className="main-albumTitle">Too Close To The Sea</h2>
          <a target="_blank" className="main-albumLink" href="https://monochromaticvisions.bandcamp.com/album/too-close-to-the-sea">Listen here</a>
        </div>
      </div>
      <div className="main">
        <div className="main-wrapper -wrapper">
          <div className="main-container -container">
            <div className="main-content">
              <div className="-container main-newsContainer">
                <div className="news-items">
                <h2 className="main-newsTitle">News</h2>
                <div className="-container">
                  {news.map((item, index) => (
                    <div key={index} className="news-item">
                      <div className="news-itemInner">
                        <div className="news-itemImage">
                          <Image src={item.Image} alt={item.title} />
                        </div>
                        <h3 className="news-title">{item.Title}</h3>
                        <p className="news-text">{item.Text}</p>
                        <a className="news-link" href={item.Link}>{item.link_text}</a>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
              <div className="-container">
                <h2 className="main-showsTitle">Shows</h2>
                <div className="shows-events">
                  {shows && shows.length >= 1 ?
                    shows.map((show, index) => (
                      <div key={index} className="shows-show">
                        <div className="shows-showLocation">
                          {show.location}
                        </div>
                        <div className="shows-showDate">
                          {show.date}
                        </div>
                      </div>
                    ))
                    : <p className="shows-showsText">We will be back playing for you when it is safe to do.</p>
                  }
                </div>
                <Link className="shows-button" to="/shows">See all shows</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Main