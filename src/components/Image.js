import React from 'react'

const Image = (props) => {
  console.log(props)
  return (
    <img src={props.blok.image} alt="america"/>
  )
}

export default Image