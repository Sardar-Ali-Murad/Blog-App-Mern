// WithOut Swipper

import React from "react";
import "./HeroText.css";
import {FaRegArrowAltCircleRight}  from "react-icons/fa"
import {FaRegArrowAltCircleLeft}  from "react-icons/fa"

let data=[
  {head:"Stay curio 1",para:"Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s."},
  {head:"Stay curio 2",para:"Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s."},
  {head:"Stay curio 3",para:"Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s."},
  {head:"Stay curio 4",para:"Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s."},
  {head:"Stay curio 5",para:"Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s."}
]

const HeroText = () => {
  let [activeIndex,setActiveIndex]=React.useState(0)
  let [nextActive,setNextActive]=React.useState(false)
  let [preActive,setPreActive]=React.useState(false)

  function next(){
    setNextActive(true)
    setTimeout(()=>{
      setNextActive(false)
    },2000)
     let dummyIndex=activeIndex+1
     if(dummyIndex>data.length-1){
      setActiveIndex(0)
     }
     else{
      setActiveIndex((pre)=>pre+1)
     }

  }


  function pre(){
    setPreActive(true)
    setTimeout(()=>{
       setPreActive(false)
    },2000)

     let dummyIndex=activeIndex-1
     if(dummyIndex<0){
      setActiveIndex(data.length-1)
     }
     else{
      setActiveIndex((pre)=>pre-1)
     }

  }




  return (
    <div className="heroBigMain">
      <FaRegArrowAltCircleRight style={{color:"white"}} className={`arrow1`} onClick={next}/>
      <FaRegArrowAltCircleLeft style={{color:'white'}} className={`arrow2 `} onClick={pre}/>
    <div className={`heroTextMain   ${nextActive?"activeNext":""}  ${preActive?"activePre":""}`}>
      <h1>{data[activeIndex].head}</h1>
      <p>
      {data[activeIndex].para}
      </p>
      <div className="heroTextFlex">
        <button className="signUp" style={{ background: "#0065FD" }}>
          Start Reading
        </button>
        <button className="login">Sign In</button>
      </div>
    </div>
    </div>
  );
};
export default HeroText;


