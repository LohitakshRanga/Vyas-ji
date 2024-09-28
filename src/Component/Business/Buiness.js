import React from 'react'
import './business.css'
import hrdwr from '../../Image/hardware.jpg';
import BusinessCard from '../Home/components/BusinessCard';




function Buiness() {
    return (
        <>
            <div className='container'>

                {/* <BusinessCard className="shp-nme" name="Shop 1" imag={hrdwr}  />
                
                <BusinessCard className="shp-nme" name="Shop 2" imag={hrdwr}/>
                <BusinessCard className="shp-nme" name="Shop 3" imag={hrdwr}/>
                <BusinessCard className="shp-nme" name="Shop 4" imag={hrdwr}/>
                <BusinessCard className="shp-nme" name="Shop 6" imag={hrdwr}/>
                <BusinessCard className="shp-nme" name="Shop 5" imag={hrdwr}/>
                <BusinessCard className="shp-nme" name="Shop 5" imag={hrdwr}/>
                <BusinessCard className="shp-nme" name="Shop 5" imag={hrdwr}/> */}

                <div class="row featurette">
                    <div class="col-md-8">
                        <h2 class="featurette-heading fw-normal lh-1 pt-5">Shop 1 <span class="text-muted">VYAS JI </span></h2>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos deserunt doloribus laboriosam quidem blanditiis, maiores ducimus et voluptatum consequuntur impedit? Error placeat, aspernatur nihil expedita vero deleniti libero, beatae maxime, illo reprehenderit doloribus ducimus?</p>
                    </div>
                    <div class="col-md-4">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">300x300</text></svg>

                    </div>
                </div>
                
                <div class="row featurette">
                    <div class="col-md-8 order-md-2 right">
                        <h2 class="featurette-heading fw-normal lh-1 pt-5">Shop 1 <span class="text-muted">VYAS JI </span></h2>
                        <p class="lead ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos deserunt doloribus laboriosam quidem blanditiis, maiores ducimus et voluptatum consequuntur impedit? Error placeat, aspernatur nihil expedita vero deleniti libero, beatae maxime, illo reprehenderit doloribus ducimus?</p>
                    </div>
                    <div class="col-md-4 order-md-1">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">300x300</text></svg>

                    </div>
                </div>

                


            </div>
        </>
    )
}

export default Buiness