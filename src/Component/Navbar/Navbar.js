import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
 const [activeNav, setactiveNav] = useState('')
  return (
    <>
                <nav className="navbar navbar-expand-lg bg-light sticky-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Vyas Ji</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">

                                    
                                    <Link className={`nav-Link ni1 ${activeNav==="about"? "active": ''}`} aria-current="page" to="/about" onClick={()=>{
                                        setactiveNav("about");
                                    }}>About Us</Link>
                                </li>
                                <li className="nav-item">
                                

                                    <Link className={`nav-Link ni1 ${activeNav==="Business"? "active": ''}`} aria-current="page" to="/business" onClick={()=>{
                                        setactiveNav("Business");
                                    }} >Business</Link>
                                </li>
                                <li className="nav-item">
                              

                                    <Link className={`nav-Link ni1 ${activeNav==="Contact"? "active": ''}`} to='/contact' onClick={()=>{
                                        setactiveNav("Contact");
                                    }} >Contact Us</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
        </>
  )
}

export default Navbar