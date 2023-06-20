import React from 'react';
import logo from '../../images/logo/navlogo.png';
import home from '../../images/logo/navlogo.png';

import Slider from './slider';
import slides from './mock.json';
import './home.css'

function Home() {
    return (
        <div className="pt-5">
            <div className='first pb-5'>
                <div className='container'>
                    <div className="row pt-5 row-eq-height">
                        <div className="col-lg-6">
                            <div className='text-center'>
                                <img className='pt-4' src={logo} height="184" /><br/>
                            </div>
                            <h1 className="d-inline-block underline pt-4" >About Us</h1>
                            <p className="text-star pe-5 pt-4"  >MEDIA FEDERATION OF INDIA IS A REPUTED ORGANIZATION OF AND FOR JOURNALISTS OF OUR COUNTRY. MEDIA FEDERATION OF INDIA WAS FORMED IN THE YEAR 2006 BY GROUP OF JOURNALIST ORGANIZATIONS OF INDIA TO WORK FOR THE BENEFIT AND TO SUPPORT MEDIA PROFESSIONALS.</p>
                            <button type="button" className="btn btn-success">Know More</button>
                        </div>

                        <div className="col-lg-6 my-auto pt-4">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={home} className="d-block w-100 rounded" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={home} className="d-block w-100 rounded" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={home} className="d-block w-100 rounded" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="card mb-3" style="max-width: 540px;"> */}
            <div className='container'>
                <div className="row py-5 ">
                    <div className="col-lg-4">
                        <img src={home} className="img-fluid rounded" alt="..." />
                    </div>
                    <div className="col-lg-8">
                        <div className="card-body pt-4">
                            <h1 className="card-title d-inline-block underline pt-4">MFI Events</h1>
                            <p className="card-text pt-4">MFI HOLDS NATIONAL AWARDS AND ON THE OTHER HAND REGIONAL AWARDS IN ALMOST ALL STATES AS STATE AWARDS.
                                MFI IS ALSO TAKEN A STEP AHEAD TO ORGANISE SEMINARS AIMING OVERALL DEVELOPMENT OF JOURNALISTS.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='background'>
                <div className='container'>
                <div className="row py-5">

                    <div className="col-lg-8">
                        <div className="card-body py-4">
                            <h1 className="card-title d-inline-block underline pt-4">Business Summit</h1>
                            <p className="card-text pt-4">MFI ALSO ORGANISES BUSINESS SUMMIT FOR THE BENEFIT OF THE NEWSPAPER PUBLISHERS, NEWS CHANNELS AND DIGITAL MEDIUMS. THESE BUSINESS SUMMITS ARE HELD IN METROCITIES & MAJOR TOWNS OF THE COUNTRY.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 pt-4">
                        <img src={home} className="img-fluid rounded" alt="..." />
                    </div>
                </div>
                </div>
            </div>
            <div className='container'>
                <div className="row py-5">
                    <div className="col-lg-4">
                        <img src={home} className="img-fluid rounded" alt="..." />
                    </div>
                    <div className="col-lg-8">
                        <div className="card-body pt-4">
                            <h1 className="card-title underline d-inline-block pt-4">Careers</h1>
                            <p className="card-text pt-4">MEDIA FEDERATION OF INDIA PROVIDES CAREER OPPORTUNITIES TO ITS MEMBERS & JOURNALISTS AS WELL. IT SUPPORTS BOTH TECHNICAL, NON TECHNICAL AND OTHER FIELDS TO PURSUE JOBS ALONG WITH LEARNING SKILLS. THE BASIC OBJECTIVE OF THE FEDERATION IS TO OPEN DESIRED CAREER VENTURES TO THE ASSOCIATED MEMBERS AND JOURNALISTS.</p>
                        </div>
                    </div>
                </div>
            </div>
                <Slider slides={slides} />
            {/* </div> */}
        </div>
    );
}

export default Home;
