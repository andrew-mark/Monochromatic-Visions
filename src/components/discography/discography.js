
import React, {useState, useEffect, useContext} from 'react'
import './discography.scss'
import { motion } from "framer-motion"
import Disc from '../disc/disc'

const Footer = (props) => {
  return (
    <div className={`discography`}>
      <div className="discography-wrapper -wrapper">
        <div className="discography-container -container">
          <h1>Discography</h1>
          <div className="discography-discs">
            <div className="-container">
              {props.blok.Title.map((disc, index) => (
                <div key={index} className="discography-disc">
                  <div className="discography-discInner">
                    <Disc props={disc} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer