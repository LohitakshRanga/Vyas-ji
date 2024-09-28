import React from 'react'
import './About.css'
import lucky from '../../Image/about/lucky.jpg';
import image from '../../Image/about/exp-img2.jpg';
import Footer from '../footer/Footer';



function About() {
    return (
        <>
            <div>

                <div className="container sec-1">
                    <p className='head-abt'>WHO WE ARE</p>
                    <p>
                        JustoGo is a Mumbai based home solution providing company that has started it's pilot project in Bikaner and then will launching in other major cities soon. It is founded by a group of aspirant with consideration to put the world in a more comfort zone via weaving new ideas and implementing it at ground level.
                    </p>
                </div>

                <div className="container sec-1">
                    <p className="hed2-abt">OUR TEAM</p>

                    <div className="justify-content-around row">

                        <div className="crd-abt col-md-3 col-sm-6 col-xs-12">
                            
                            <div className=" crd-2" >
                                <img src={lucky} className="card-img-top pic-abt" alt="..." />
                                <div className="title">
                                <span className="title-name">Lucky</span>
                                <span className="title-type">Founder</span>
                                </div>
                            </div>
                        </div>

                        <div className="crd-abt col-md-3 col-sm-6 col-xs-12">
                            <div className=" crd-2" >
                                <img src={lucky} className="card-img-top pic-abt" alt="..." />
                                <div className="title">
                                <span class="title-name">Lucky</span>
                                <span class="title-type">Founder</span>
                                </div>
                            </div>
                        </div>

                        <div className="crd-abt col-md-3 col-sm-6 col-xs-12">
                            <div className=" crd-2" >
                                <img src={lucky} className="card-img-top pic-abt" alt="..." />
                                <div className="title">
                                <span class="title-name">Lucky</span>
                                <span class="title-type">Founder</span>
                                </div>
                            </div>
                        </div>

                        <div className="crd-abt col-md-3 col-sm-6 col-xs-12">
                            <div className=" crd-2" >
                                <img src={lucky} className="card-img-top pic-abt" alt="..." />
                                <div className="title">
                                <span class="title-name">Lucky</span>
                                <span class="title-type">Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        
                    </div>
                </div>

                <div className="container sec-1">
                    <p className='head-abt'>BUILDING A MARKETPLACE FOR ALL YOUR SERVICES</p>
                    <p>
                        Tired of asking your friends or co-workers to recommend a good electrician, plumber, or any other service? Wondering if there is a better price out there for the same service? We felt there had to be a better way to get things done. And that’s how Justogo came about. Justogo is here, to bridge the gap between your service needs and the service providers.
                    </p>
                </div>

                <div className="container sec-1">
                    <p className='head-abt'>WHY VYAS JI</p>
                    <ul className='lst'>
                        <li>
                            We make it easy to hire the right service provider with the budget the suits you
                        </li>
                        <li>
                            We partner with the trusted service providers, who meet our standards
                        </li>
                        <li>
                            We ensure a hassle free process from booking to delivery of the service
                        </li>
                        <li>
                            With us, you won’t call your friends again to recommend a service provider
                        </li>
                    </ul>
                </div>

                <div className="container sec-1">
                    <p className='head-abt'>HOW WE WORK</p>

                    <div className='d-flex justify-content-around row'>

                        <div className="card border-light mb-3 col-xs-12" style={{width: "22rem"}}>
                            <div className="card-header d-flex hedr">Step <div  className='golo'>1</div></div>
                            <div className="card-body">
                                <h5 className="card-title">Light card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                       
                        <div className="card border-light mb-3 col-xs-12" style={{width: "22rem"}}>
                            <div className="card-header d-flex hedr">Step <div  className='golo'>2</div></div>
                            <div className="card-body">
                                <h5 className="card-title">Light card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        
                        <div className="card border-light mb-3 col-xs-12" style={{width: "22rem", height:"20rem"}}>
                            <div className="card-header d-flex hedr">Step <div  className='golo'>3</div></div>
                            <div className="card-body">
                                <h5 className="card-title">Light card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>


                </div>
                    



            </div>


          
        </>
    )
}

export default About