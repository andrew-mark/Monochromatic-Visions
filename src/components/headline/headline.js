import React, {useState, useEffect, useContext} from 'react'
import './headline.scss'
import { Link } from "gatsby"
import { motion } from "framer-motion"

const Headline = (props) => {
  return (
    <div className={`headline`}>
      <div className="-wrapper">
        <div className="-container">
          <h2 className="headline-content">{props.blok.headline}</h2>
        </div>
      </div>
    </div>
  )
}

export default Headline