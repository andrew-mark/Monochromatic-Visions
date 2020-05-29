import React, {useState, useEffect, useContext} from 'react'
import './disc.scss'
import { motion } from "framer-motion"

const Disc = (props) => {
  const player = props.props.audio_player
  console.log(props)
  return (
    <React.Fragment>
    <div className={`disc`} dangerouslySetInnerHTML={{ __html: player }}>
    </div>
    <div className="disc-title"><p>Album title:</p><h3>{props.props.Title}</h3></div>
    { props.props.release_date && <div className="disc-releaseDate"><p className="disc-date">Release date:</p><p>{props.props.release_date}</p></div> }
    { props.props.Link && <a className="disc-link" href={props.props.Link}>Go to Bandcamp</a> }
    </React.Fragment>
  )
}

export default Disc