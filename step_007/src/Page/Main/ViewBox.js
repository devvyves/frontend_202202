import React, { useEffect, useState, useRef } from 'react'
// import {v4 as uuidv4} from 'uuid';
import uuid from 'react-uuid';

import Buttons from './ViewBox/Buttons';
import Indicators from './ViewBox/Indicators';
import Slide_wrapper from './ViewBox/Slide_wrapper';

import ViewList from './ViewBox/ViewList';
import ListData from './ViewBox/ListData';

import './ViewBox.scss'

function ViewBox() {
  const total = ListData.length - 1;
  const timed = 1000;

  


  const [count, setCount] = useState(0);
  const [intervalState, setIntervalState] = useState(true); // PERMISSION = true
  const moveSlide = useRef(null); //moveSlide.current = null

  

  // useEffect( () => {
  //   // startSlide();
    
  //   // return stopSlide();
  //   const goSlide = setInterval(() => {
  //     handlerNextClick() }, timed);
  //     return () => clearInterval(goSlide);
  // })

  // const listData = [1, 2, 3, 4, 5];
  // const listColor = ['#adf', '#f4a', '#af7', '#ccf', '#faa'];
  // const setUUID = [uuid(), uuid(), uuid(), uuid(), uuid()];

  // useEffect( () => {
  //   console.log(count);
  // }, [count]);

  const handlerNextClick = (e) => {
    e && e.preventDefault(); //자동으로 넘어가는 이유도 있어 e & e.prevent
    // count >= listData.length - 1 ? setCount(0) : setCount(count + 1);
    setCount (count >= total ? 0 : count + 1);
  }
  const handlerPrevClick = (e) => {
    e.preventDefault();
    // count <= 0 ? setCount(listData.length - 1) : setCount(count - 1);
    setCount(count <= 0 ? total : count - 1);
  }

  const handlerClickOn = (e) => {
    e.preventDefault();
  }

  const startSlide = () =>{
    setIntervalState(true);
    if(moveSlide.current !== null) {return} 
    moveSlide.current = setInterval(()=> handlerNextClick(), timed);
  }

  //const stopSlide = () => clearInterval(moveSlide.current);
  const stopSlide = () => {
    setIntervalState(false);
    if(moveSlide.current === null) {return}
    clearInterval(moveSlide.current);
    moveSlide.current = null;
  }

  useEffect( () => {
    intervalState && startSlide();
    return () => stopSlide();
  }, [count, intervalState])



  return (
    <section id="viewBox" onMouseEnter={stopSlide} onMouseLeave={startSlide}>
      <h2 className='blind'>광고영역</h2>
      <Buttons nextEvent={handlerNextClick} preEvent={handlerPrevClick} />

      <Indicators 
      ListData={ListData}
      count={count} 
      total={total} 
      setCount={setCount} />

      <Slide_wrapper 
      ListData={ListData} 
      ViewList={ViewList}
      count={count}
      />

    </section>
  )
}

export default ViewBox