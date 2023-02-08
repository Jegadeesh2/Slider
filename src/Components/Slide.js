import React, { useState } from "react";
import data from '../data';

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa"

const Slide = () => {
  const [index,setIndex] = useState(0);
  const {name,image,job,info} = data[index];

  //Functions
  const nextPerson = () => {
    setIndex(()=> {
      if(index === data.length-1){
        let newIndex = 0
        return newIndex
    }else{
      let newIndex = index+1
      return newIndex;
    }
    })
  }

  const pervPerson = () => {
    setIndex(()=> {
      if(index === 0){
        let newIndex = data.length-1
        return newIndex
    }else{
      let newIndex = index - 1
      return newIndex;
    }
    })
  }

  const randomPerson = () => {
    setIndex(()=> {
      let newIndex = Math.trunc(Math.random() * data.length);
      return newIndex;
    })
  }

  return (
      <div className="container">
      <div className="image-container">
        <img src={image} alt="person" className="image"/>
        <span className="quote-icon"><FaQuoteRight/></span>
      </div>
      <h2 className="author">{name}</h2>
      <h3 className="job">{job}</h3>
      <p className="info">{info}</p>      
      <div className="button-container">
      <button type="button" onClick={()=> pervPerson()}>
        <BsFillArrowLeftCircleFill className="prev-btn"/>
      </button>
      <button type="button" onClick={()=> nextPerson()}>
        <BsFillArrowRightCircleFill className="next-btn"/>
      </button></div>
      <button className="random-btn btn" onClick={()=> randomPerson()}>Random User</button>
    </div>
  ); 
};

export default Slide;
