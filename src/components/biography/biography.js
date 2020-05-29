import React, {useState, useEffect, useContext} from 'react'
import './biography.scss'
import { motion } from "framer-motion"
import Bio from '../../static/mono-bio.jpeg'
import Image from '@components/image/image'
import Video from '@components/video/video'

const Biography = (props) => {
  const content = props.blok.Text.content
  console.log(props)
  return (
    <React.Fragment>
      <div className="biography-video">
        <Image src={props.blok.Image} classes={'biography-image'} />
      </div>
      <div className="biography">
        <div className="biography-wrapper -wrapper">
          <div className="biography-container -container">
            <div className="biography-content">
            {content.map(item => {
              return item.content &&
                item.content.map((p, index) => (
                <p key={index}>{p.text}</p>
              ))
            })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Biography