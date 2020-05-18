import * as React from 'react'
import './image.scss'

const Image = ({src, alt, classes = '', objFit, objPosition}) => {
	const objectFit = objFit ? objFit : `cover`
	const objectPosition = objPosition ? objPosition : `50% 50%`
	const fontFamily = `"object-fit: ${objectFit}; object-position: ${objectPosition}"`

	return (
		<img src={src} alt={alt} className={`image ${classes} -${objectFit}`} style={{fontFamily: fontFamily}}/>
	)
}

export default Image