import React from 'react'
import "../components/businessCard.css"
import { Link, Navigate } from "react-router-dom";
// import hrdwr from '../../../Image/hardware.jpg';


function BusinessCard(props) {
  return (
    <>
      <div className="card mb-5" style={{ width: "20rem" }} >
        <img src={props.imag} className="card-img-top" alt="..." />
        <div className="card-body">
        
          {/* <button className='btn' to="/PageContent">{props.name}</button> */}
          {/* <p className="card-text shp">{props.name}</p> */}
          <Link className='btn'  to='/business/businesspage'>{props.name}</Link>
        </div>
      </div>
    </>
  )
}

export default BusinessCard