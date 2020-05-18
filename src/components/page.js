import React from 'react'
import Components from './components.js';

const Page = (props) => {
  return (
    <React.Fragment>
      {props.blok.body && props.blok.body.map(blok => {
        return blok.component === 'global_reference' ?
          blok.reference.content.global.map(blokItem => (
            React.createElement(Components(blokItem.component), {key: blokItem._uid, blok: blokItem})
          ))
        :
          React.createElement(Components(blok.component), {key: blok._uid, blok: blok})
      })}
    </React.Fragment>
  )
}

export default Page