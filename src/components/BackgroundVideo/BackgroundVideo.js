import React from "react"
import { useSelector } from "react-redux"

export default function BackgroundVideo () {
  const back = useSelector((state) => state.back)
  
  return(
    <div className='video--container'>
      {/* <video autoPlay muted loop id="myVideo">
      <source src={back} type="video/mp4"/>
      </video> */}
      <img id="image" src={back} alt="ss"/>
    </div>
  )
}