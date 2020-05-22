import React, {useState, useEffect, useContext} from 'react'
import './contact.scss'

const Contact = (props) => {
  console.log(props)
  return (
    <div className="contact">
      <div className="-wrapper">
        <div className="-container">
          <h2 className="contact-subline">You want to get in contact?</h2>
          <p className="contact-text">{props.blok.contact_text}</p>
        </div>
      </div>
    </div>
  )
}

export default Contact