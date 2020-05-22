import React, {useState, useEffect, useContext} from 'react'
import './shows.scss'
import { motion } from "framer-motion"

const Shows = (props) => {
  return (
    <div className={`shows`}>
      <div className="shows-wrapper -wrapper">
        <div className="-container">
          <h2 className="shows-showsTitle">Shows</h2>
          <div className="shows-events">
            {props.blok.shows && props.blok.shows.length >= 1 ?
              props.blok.shows.map((show, index) => (
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
        </div>
      </div>
    </div>
  )
}

export default Shows