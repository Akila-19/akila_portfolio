import React from 'react';
import Lottie from  "lottie-react";
import homepage1 from "../LottieFiles/homepage1.json";
import Typed from "./Typed.js";
import { AiOutlineEye } from "react-icons/ai";
import {  NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'm <b>Akilandeshwari Srinivasan</b></h1>
          <Typed/>  
        <button className='downloadCV' type='button'>
          
        <NavLink to="/myR" className="flex items-center justify-evenly">
  <AiOutlineEye className="text-3xl pr-1" /> View my Resume
</NavLink>

        </button>
        </div>

        <Lottie 
          className="illustration" 
          animationData={homepage1} 
          loop={true} 
        />
        
      </div>
    </div>
  )
}

export default Home