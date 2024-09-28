import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {

    function selectText() {
        const input = document.getElementById('text-box');
        input.focus();
        input.select();
        navigator.clipboard.writeText(input.value);
      }
      
  return (
    <>
        <div className="futer container-fluid">
        <div className="link row">
                <div className="col-md-6">
               
                    <ul className='lnks'>
                        <li>
                            <Link to='/' className='lnks2'>Home</Link>
                        </li>
                        <li>
                            <a href='#' className='lnks2'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href='#' className='lnks2'>Terms & Conditions</a>
                        </li>
                        
                    </ul>
                </div>
                <div className="col-md-6 text-center">
                    <h4 className='r-wing'>© Copyright 2022. All Rights Reserved.</h4>
                </div>
                </div>
                
            
        </div>
    </>
  )
}

export default Footer