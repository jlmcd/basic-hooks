import React from 'react'
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver'
import './ImageChangeOnMouseOver.scss'

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="./static/images/bw/jonathan.jpg"
        secondaryImg="./static/images/color/jonathan.jpg"
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="./static/images/bw/jonathan.jpg"
        secondaryImg="./static/images/color/jonathan.jpg"
        alt=""
      />
    </div>
  )
}

export default ImageChangeOnMouseOver
