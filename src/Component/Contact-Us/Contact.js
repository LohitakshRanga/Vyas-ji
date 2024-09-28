import React from 'react'
import { Link } from 'react-router-dom'
import "./contact.css"
import mail from '../../Image/contact us/envelop.png';
import loc from '../../Image/contact us/pin.png';


function Contact() {
    return (
        <>
            
            <form>
                <div className=" container row sec-1st">
                    <div className="col-md-9">
                    <h2 className='head-cntct'>
                        LEAVE MESSAGE
                    </h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input type="text" placeholder='Full Name*' className="form-control" id="exampleInputText1" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input type="email" placeholder='Email' className="form-control" id="exampleInputPassword1" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input type="email" placeholder='Email' className="form-control" id="exampleInputPassword1" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input type="number" placeholder='Phone Number' className="form-control" id="exampleInputPassword1" />
                                </div>
                            </div>
                        </div>


                        <div className="mb-3">
                            <textarea maxLength="500" placeholder="Enter your message..." rows="5" className=" msg form-control" name="message" id="message" required=""></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </div>
                    <div className="col-md-3 sec-2nd">

                        <h2>
                            GET IN TOUCH
                        </h2>

                        <div className='inner-sec'>
                            <img className='email' src={mail} alt="" />
                            <span className='my-auto'>Bikaner, Rajsthan (Ind.)</span>
                        </div>

                        <div className='inner-sec'>
                            <img className='email' src={loc} alt="" />
                            <span className='my-auto'><Link to="">VYAS JI GROUPS</Link></span>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Contact