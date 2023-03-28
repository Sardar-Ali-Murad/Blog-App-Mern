import React from 'react'
import img1 from "../assets/grid1.png"
import img2 from "../assets/grid2.png"
import img3 from "../assets/grid3.png"
import img4 from "../assets/grid4.png"
import img5 from "../assets/grid5.png"
import img6 from "../assets/grid6.png"
import "./ImageGrid.css"

const ImageGrid = () => {
  return (
    <div className='imageGridMain'>
      <img src={img1}/>
      <img src={img2}/>
      <img src={img3}/>
      <img src={img4}/>
      <img src={img5}/>
      <img src={img6}/>
    </div>
  )
}

export default ImageGrid
