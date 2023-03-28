import React from 'react'
import "./Trending.css"
import img from "../assets/trending.png"
import calender from "../assets/calender.png"
import time from "../assets/time.png"
import {trendingData}  from "./data"

const Trending = () => {
  return (
    <div className='trendingMain'>
        <div className='trendingText'>
            <h2>tranding</h2>
            {/* <div className='trendingContainer'>
                <a className='trendingHead'>I Created a Developer Rap Video -</a>
                <a className='trendingHead'>Here's What I Learned</a>
                <div className='trendingFlex'>
                    <img src={img}/>
                    <p>Jenny kiaa</p>
                </div>
                <div className='trendingTime'>
                    <img src={calender}/>
                    <p>02 december 2022</p>
                    <img src={time}/>
                    <p>3 min. to read</p>
                </div>
                <p className='trendingEnd'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp</p>
            </div> */}

            <div className='trendingGrid'>
               {trendingData.map((item)=>{
                return   <div className='trendingContainer'>
                <a className='trendingHead'>I Created a Developer Rap Video -</a>
                <a className='trendingHead'>Here's What I Learned</a>
                <div className='trendingFlex'>
                    <img src={img}/>
                    <p>Jenny kiaa</p>
                </div>
                <div className='trendingTime'>
                    <img src={calender}/>
                    <p>02 december 2022</p>
                    <img src={time}/>
                    <p>3 min. to read</p>
                </div>
                <p className='trendingEnd'>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp</p>
            </div> 
               })}
            </div>
        </div>
    </div>
  )
}

export default Trending
