import React from 'react'
import {Link} from 'gatsby'

const PageNotFound = (props) => {
  return (
    <div className="notFound">
      <h1><Link to="/">Monochromatic visions</Link></h1>
      <h2>Seems to be no page here</h2>
    </div>
  )
}

export default PageNotFound