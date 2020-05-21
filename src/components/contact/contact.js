import React, {useState, useEffect, useContext} from 'react'
import './contact.scss'

const Contact = (props) => {
  console.log(props)
  return (
    <div className="contact">
      <div className="-wrapper">
        <div className="-container">
          <p className="contact-text">{props.blok.contact_text}</p>
        </div>
      </div>
    </div>
  )
}

export default Contact