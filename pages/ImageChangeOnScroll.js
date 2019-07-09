import React, {useRef, useEffect, } from 'react'
import ImageToggleOnScroll from '../src/ImageToggleOnScroll'
import './ImageChangeOnScroll.scss'

const ImageChangeOnScroll = () => {
  return (
    <div>
      <ImageToggleOnScroll
        primaryImg="./static/images/bw/jonathan.jpg"
        secondaryImg="./static/images/color/jonathan.jpg"
        alt=""
      />
      <ImageToggleOnScroll
        primaryImg="./static/images/bw/jonathan.jpg"
        secondaryImg="./static/images/color/jonathan.jpg"
        alt=""
      />
      <ImageToggleOnScroll
        primaryImg="./static/images/bw/jonathan.jpg"
        secondaryImg="./static/images/color/jonathan.jpg"
        alt=""
      />
      <ImageToggleOnScroll
        primaryImg="./static/images/bw/jonathan.jpg"
        secondaryImg="./static/images/color/jonathan.jpg"
        alt=""
      />
      <ImageToggleOnScroll
        primaryImg="./static/images/bw/jonathan.jpg"
        secondaryImg="./static/images/color/jonathan.jpg"
        alt=""
      />
      <ImageToggleOnScroll
        primaryImg="./static/images/bw/jonathan.jpg"
        secondaryImg="./static/images/color/jonathan.jpg"
        alt=""
      />
    </div>
  )
}

export default ImageChangeOnScroll
