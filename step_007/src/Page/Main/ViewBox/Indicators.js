import React from 'react'
import uuid from 'react-uuid';

function Indicators(props) {
  return (
    <div className='indicators'>
        <ul className='blind_area'>
          {
            props.ListData.map((data, index) => 
              <li key={uuid()} className={props.count === index ? 'action' : null}>
                <a href="#" onClick={(e) => {
                  {e.preventDefault(); return props.setCount(index)} }}>
                  <span>{index + 1}번째 광고 요약</span>
                </a>
              </li>
            )}
        </ul>
        <p>
          <span className='now'>{props.count + 1}</span>/
          <span className='total'>{props.total + 1}</span>
        </p>
    </div>
  )
}

export default Indicators