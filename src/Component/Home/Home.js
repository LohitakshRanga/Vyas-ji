import React from 'react'
import './home.css'
import hrdwr from '../../Image/hardware.jpg';
import BusinessCard from './components/BusinessCard';
import Footer from '../footer/Footer';

import { Link} from "react-router-dom";


const Home = () => {
    return (
        <>

    
            <div >
                <img className='img-fluid pic' src={hrdwr} alt="" />
            </div>

            <div className="content">
                <h1>We are <strong>JustoGo</strong></h1>
                <h4>We manage your services. You manage Life.</h4>
                <p>JustoGo provides excellent services to our Clients and we believed in optimizing our relationship with our clients. We have our fully equipped and trained staffs whom we can assure our client for a quality services.</p>

                <button type="button" className="btn1 btn-warning">Warning</button>
            </div>

            <div className="contnt-2">
                <p className='head'>Looking for <strong>Expert</strong> service</p>
                <h2 className='subhead mb-4'>Quality that is guaranteed!</h2>
                <button type="button" className="btn btn-warning btn2">Contact Vyas Ji</button>
            </div>

            <div className="content-3">
                <h1 className='head2'>Our <strong>Business</strong></h1>

                <div className='d-flex justify-content-around crd row'>

                    <BusinessCard className="shp-nme" name="Shop 1" imag={hrdwr} />
                    <BusinessCard className="shp-nme" name="Shop 2" imag={hrdwr} />
                    <BusinessCard className="shp-nme" name="Shop 3" imag={hrdwr} />
                </div>

                <Link type="button" to="/business" className="btn btn-warning btn3">View All</Link>    
            </div>

            {/* <Footer/> */}
           
                
        </>
    )
}

export default Home