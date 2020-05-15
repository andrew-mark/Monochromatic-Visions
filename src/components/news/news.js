import React, {useState, useEffect, useContext} from 'react'
import './news.scss'
import { motion } from "framer-motion"

const News = ({headline}) => {

  const news = [
    {
      title: 'Debut album',
      text: `On may 29th we released our debut album titled 'Too Close Too The Sea'`
    }
  ]
  return (
    <div className={`news`}>
      <motion.h1 className="news-headline">News</motion.h1>
      <div className="news-items">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <h3 className="news-title">{item.title}</h3>
            <p className="news-text">{item.text}</p>
          </div>
        ))}
      </div>
      <a className="news-button" href="/">More news</a>
    </div>
  )
}

export default News