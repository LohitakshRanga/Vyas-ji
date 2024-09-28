import React from 'react'
import BusinessPageScreen from './BusinessPageScreen'

function BusinessPage({head, body}) {
  return (
    <>
    <h1>
        hee
    </h1>
        <div className="contianer">

             <h1 className='had'>props.heading</h1>

             <p className='cntnt'>props.cntnt</p>
        
        </div>
        <BusinessPageScreen heading={head} content={body}/>
    </>
  )
}

export default BusinessPage