import React from 'react';
import {Link} from 'react-router-dom';

export default class ServiceThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="services-three">
                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/services-v3-shape1.png"} alt="#" /></div>
                    <div className="shape2 rotate-me"><img src={publicUrl+"assets/images/update1.0/services-v3-shape2.png"} alt="#" /></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="services-three__top">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <span className="right"></span> <h6>COMPANY SERVICES</h6> <span className="right"></span>
                                        </div>
                                    <div className='d-flex justify-content-between align-items-center w-100'>
                                        <h2 className="sec-title__title">Our Company Best <br /> Services</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {/* Start Services One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="services-three__single">
                                    <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/services/services-v1-bg.jpg)'}}></div>
                                    <div className="services-three__single-icon">
                                        <span className="icon-construction"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/services`}>Bowstring Girders</Link></h3>
                                    <p>Fabrication of RDSO approved bowstring girders for railway bridges up to 42 metres span.</p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/services`}><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}

                            {/* Start Services One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="services-three__single">
                                    <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/services/services-v1-bg.jpg)'}}></div>
                                    <div className="services-three__single-icon">
                                        <span className="icon-industrial-zone"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/services`}>Metalizing</Link></h3>
                                    <p>Professional zinc metalizing and chromate painting for long-lasting corrosion protection on steel structures.</p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/services`}><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}

                            {/* Start Services One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="services-three__single">
                                    <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/services/services-v1-bg.jpg)'}}></div>
                                    <div className="services-three__single-icon">
                                        <span className="icon-wrench"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/services`}>CNC Cutting</Link></h3>
                                    <p>Precision CNC plasma cutting up to 300mm with state-of-the-art machines for accurate steel fabrication.</p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/services`}><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}

                            {/* Start Services One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="services-three__single">
                                    <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/services/services-v1-bg.jpg)'}}></div>
                                    <div className="services-three__single-icon">
                                        <span className="icon-hammer"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/services`}>PEB Roofing</Link></h3>
                                    <p>Design and construction of pre-engineered steel buildings and warehouse sheds for industrial and commercial use.</p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/services`}><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}

                        </div>
                            <div className="service-btn d-flex align-items-center justify-content-center">
                                        <Link className='btn border p-3 text-white w-auto' id='service-btn' style={{transition : 'all 0.3s ease'}}
                                        to= {publicUrl + "services"}>All Services</Link>
                            </div>
                    </div>
                </section>
            </>
        )
    }
}