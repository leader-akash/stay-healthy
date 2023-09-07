import React from 'react';
import './Card.css'

const Card = (details, key) => {

  let heading = details?.details?.heading.split(':')[0];
  let title = '';

  if(heading === 'undefined'){
    heading = title
  }

  return (
    <div className='card-container'>
          <video id={key} className='video-container' controls src={details?.details?.video} alt='video'/>
        <div className='card-info' >
            
           <p className='video-title'> {heading} </p>
            <p className='video-tags' id={key}>{details?.details?.tags.map((el)=>(
              <p>#{el} </p>
            ))}</p>
        </div>
    </div>
  )
}

export default Card