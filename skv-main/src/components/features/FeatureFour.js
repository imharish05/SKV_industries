import React from 'react';
import {Link} from 'react-router-dom';

export default class FeatureFour extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                {/* Start Feature Four */}
                <section className="feature-four">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>OUR FEATURES</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">Our Best Features</h2>
                        </div>
                        <div className="row">
                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single">
                                    <div className="feature-four__single-img">
                                        <img src={publicUrl+"assets/images/update1.0/feature-v3-img1.png"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single style2 text-center">
                                    <div className="feature-four__single-icon">
                                        <span className="icon-cv"></span>
                                    </div>
                                    <div className="feature-four__single-content">
                                        <h5 className='pb-3'>RDSO Approved Firm</h5>
                                        
                                        <p>SKV Industriees is approved by the Research Design & Standards Organisation under the Ministry of Railways, Government of India, authorizing them to fabricate Steel Bridge Girders for Indian Railways — a certification held by very few firms in Tamil Nadu.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single">
                                    <div className="feature-four__single-img">
                                        <img src={publicUrl+"assets/images/update1.0/feature-v3-img2.png"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single style2 text-center">
                                    <div className="feature-four__single-icon">
                                        <span className="icon-automation"></span>
                                    </div>
                                    <div className="feature-four__single-content">
                                        <h5 className='pb-3'>World-Class Workshop Infrastructure</h5>
                    
                                        <p>Equipped with CNC Plasma Cutting Machines, Automatic Beam 
        Welding Machines, EOT Cranes up to 25MT, Sand Blasting units 
        and 40+ specialized machines — all operated by a skilled 
        team of 75 employees within a dedicated fabrication unit 
        at Namakkal, Tamil Nadu.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single">
                                    <div className="feature-four__single-img">
                                        <img src={publicUrl+"assets/images/update1.0/feature-v3-img3.png"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}

                            {/* Start Feature Four Single */}
                            <div className="col-xl-4">
                                <div className="feature-four__single style2 text-center">
                                    <div className="feature-four__single-icon">
                                        <span className="icon-line-chart"></span>
                                    </div>
                                    <div className="feature-four__single-content">
    
                                        <h5 className='pb-3'>Proven Track Record Across India</h5>
                                        <p>From bowstring girders for Southern Railway to crane girders 
        for ISRO at VSSC Kerala and helicopter manufacturing plants 
        for Hindustan Aeronautics Limited — SKV Industriees has 
        successfully delivered 80+ heavy steel projects across 
        Tamil Nadu, Andhra Pradesh, Karnataka and Kerala.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Four Single */}
                        </div>
                    </div>
                </section>
                {/* End Feature Four */}
            </>
        )
    }
}