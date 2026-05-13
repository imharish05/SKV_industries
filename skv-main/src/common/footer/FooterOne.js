import React from 'react';
import {Link} from 'react-router-dom';
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5"

export default class FooterOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <footer className="footer-one-sec">
                    <div className="footer-one__pattern" style={{backgroundImage: 'url('+publicUrl+'assets/images/pattern/footer-v1-pattern.png)'}}></div>
                    <div className="footer-one__top">
                        <div className="footer-one__top-img"
                            style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/footer-crane.png)'}}></div>
                        <div className="container-fluid px-4">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer-one__top-inner">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                                <div className="footer-widget__column footer-widget__about">
                                                    <div className="footer-widget__about-logo">
                                                        <Link to={`${publicUrl}`} className="logo-container"><img className='img-fluid' style={{maxWidth : "100px"}} src={publicUrl+"assets/images/resources/stricky-logo.png"} alt="Logo" /></Link>
                                                    </div>

                                                    <p className="footer-widget__about-text">Specializing in the manufacturing and supply of high-quality heavy steel fabrication products built for strength, reliability, and performance.</p>

                                                    <div className="footer-widget__about-social-link">
                                                        <ul>
                                                            <li>
                                                                <a href="https://facebook.com">
                                                                    <span className="first icon-facebook-app-symbol"></span>
                                                                    <span className="second icon-facebook-app-symbol"></span>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="https://twitter.com">
                                                                    <span className="first fa-brands fa-instagram"></span>
                                                                    <span className="second fa-brands fa-instagram"></span>
                                                                </a>
                                                            </li>

                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                                <div className="footer-widget__column footer-widget__services">
                                                    <h2 className="footer-widget__title">Quick Links</h2>
                                                    <ul className="footer-widget__services-list">
                                                        <li className="footer-widget__services-list-item"><Link to={process.env.PUBLIC_URL + `/`}>Home</Link></li>
                                                        <li className="footer-widget__services-list-item"><Link to={process.env.PUBLIC_URL + `/about`}>About Us</Link></li>
                                                        <li className="footer-widget__services-list-item"><Link to={process.env.PUBLIC_URL + `/services`}>Services</Link></li>
                                                        <li className="footer-widget__services-list-item"><Link to={process.env.PUBLIC_URL + `/projects`}>Projects</Link></li>
                                                        <li className="footer-widget__services-list-item"><Link to={process.env.PUBLIC_URL + `/contact`}>Contact Us</Link></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.5s">
                                                <div className="footer-widget__column footer-widget__explore">
                                                    <h2 className="footer-widget__title text-nowrap">Our Services</h2>
                                                    <ul className="footer-widget__explore-list">
                                                        <li className="footer-widget__explore-list-item"><Link to="/">Fabrication Unit</Link></li>
                                                        <li className="footer-widget__explore-list-item"><Link to="/">CNC Cutting</Link></li>
                                                        <li className="footer-widget__explore-list-item"><Link to="/">Saw Processing</Link></li>
                                                        <li className="footer-widget__explore-list-item"><Link to="/">Composite Girder Joint Processing</Link></li>
                                                        <li className="footer-widget__explore-list-item"><Link to="/">Trail Assembly</Link></li>
                                                        <li className="footer-widget__explore-list-item"><Link to="/">Gird Blasting</Link></li>
                                                        <li className="footer-widget__explore-list-item"><Link to="/">Metalizing</Link></li>
                                                        <li className="footer-widget__explore-list-item"><Link to="/">Zinc Chromate Painting</Link></li> 
                                                        <li className="footer-widget__explore-list-item"><Link to="/">PEB Sheds</Link></li> 
                                                        <li className="footer-widget__explore-list-item"><Link to="/">Bowstring</Link></li> 
                                                        <li className="footer-widget__explore-list-item"><Link to="/">Launching</Link></li> 
                                                        <li className="footer-widget__explore-list-item"><Link to="/">ISRO Crane Girder</Link></li> 
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.7s">
    <div className="footer-widget__column footer-widget__posts">
        <h2 className="footer-widget__title">Contact Us</h2>
        <div className="footer-contact-container">

            <div className="footer-contact-item d-flex align-items-center"> {/* Changed center to start */}
    <div className="icon-box">
        <IoLocationSharp className="footer-contact-icon" />
    </div>
    <div className="contact-details">
        <span className="contact-label">Location</span>
        <p className='text-white' style={{ margin: 0, lineHeight: '1.5' }}>
            S.F.No: 1/2B, Nachipatti, Vennandur, Rasipuram (Tk), Namakkal, Tamil Nadu - 637505.
        </p>
    </div>
</div>
            
            {/* Call Item */}
            <div className="footer-contact-item d-flex align-items-center">
                <div className="icon-box">
                    <IoMdCall className="footer-contact-icon" />
                </div>
                <div className="contact-details">
                    <span className="contact-label">Call Us</span>
                    <a href="tel:+918883999999" className="contact-value">88839 99999</a>
                </div>
            </div>
           {/* Email  */}
            <div className="footer-contact-item d-flex align-items-center">
                <div className="icon-box">
                    <IoIosMail className="footer-contact-icon" />
                </div>
                <div className="contact-details">
                    <span className="contact-label">Email Us</span>
                    <a href="mailto:skvindu@yahoo.com" className="contact-value">skvindu@yahoo.com </a>
                </div>
            </div>
            
        </div>
    </div>
</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-one__bottom clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer-one__bottom-inner">
                                        <div className="footer-one__bottom-text">
                                            <p>Copyright &copy;2026. All rights reserved.<Link to={process.env.PUBLIC_URL + `/`}> Developed By Sai Techno Solutions</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}