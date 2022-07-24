import React from 'react'

function Slide_wrapper(props) {
  return (
    <div className='slide_wrapper fade_area'>
      <ul>
        {props.ListData.map((data, index) =>
           <props.ViewList 
            key={data.primaryKey} 
            action={props.count === index ? 'action' : null}
            bgColor={data.color}
            content={data.num} />  
        )}
      </ul>
    </div>
  )
}

export default Slide_wrapper