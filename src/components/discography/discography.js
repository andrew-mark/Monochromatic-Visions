
import React, {useState, useEffect, useContext} from 'react'
import './discography.scss'
import { motion } from "framer-motion"
import Disc from '../disc/disc'

const Footer = (props) => {
  console.log(props)
  return (
    <div className={`discography`}>
      <div className="discography-wrapper -wrapper">
        <div className="discography-container -container">
          <h1>Discography</h1>
          <div className="discography-discs">
            {props.blok.Title.map((disc, index) => (
              <div className="discography-disc">
                <Disc key={index} props={disc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer