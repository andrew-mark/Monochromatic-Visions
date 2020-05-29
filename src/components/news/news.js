import React, {useState, useEffect, useContext} from 'react'
import './news.scss'
import { motion } from "framer-motion"
import AlbumCover from '../../static/too-close-too-the-sea.jpeg'
import Image from '@components/image/image'
import { Link } from 'gatsby'

const News = (props) => {
  return (
    <div className={`news`}>
      <motion.h2 className="news-headline">News</motion.h2>
      <div className="-container">
        <div className="news-items">
        <div className="-container">
          {/*{news.map((item, index) => (
            <div key={index} className="news-item">
              <div className="news-itemInner">
                <div className="news-itemImage">
                  <Image src={AlbumCover} />
                </div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-text">{item.text}</p>
              </div>
            </div>
          ))}*/}
          </div>
        </div>
      </div>
      <Link className="news-button" to="/news">More news</Link>
    </div>
  )
}

export default News