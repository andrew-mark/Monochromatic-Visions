import React, {useState, useEffect, useContext} from 'react'
import './shows.scss'
import { motion } from "framer-motion"
import { Link } from 'gatsby'

const Shows = ({headline}) => {
  return (
    <div className={`shows`}>
      <h2 className="shows-showsTitle">Upcoming shows</h2>
      <div className="-container">
        <div className="shows-events">
          <p className="shows-showsText">We will be back playing for you when it is safe to do.</p>
        </div>
        <Link className="shows-button" href="/shows">See all shows</Link>
      </div>
    </div>
  )
}

export default Shows