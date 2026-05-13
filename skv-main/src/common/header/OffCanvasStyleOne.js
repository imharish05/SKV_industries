import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function OffCanvasStyleOne() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div className="side-content-button">
            <Link to="#" variant="primary" className="navSidebar-button" onClick={handleShow}>
                <span className="decor"></span>
                <span className="decor"></span>
                <span className="decor"></span>
            </Link>

            <Offcanvas show={show} onHide={handleClose} className="xs-sidebar-group info-group info-sidebar isActive">
                <div className="xs-overlay xs-bg-black"></div>
                    <div className="xs-sidebar-widget">
                        <div className="sidebar-widget-container">
                            <Offcanvas.Header closeButton className="close-side-widget">
                            </Offcanvas.Header>
                            <div className="sidebar-textwidget">
                                <div className="sidebar-info-contents">
                                    <div className="content-inner">
                                        <div className="logo">
                                            <Link to="/"><img src="/assets/images/resources/logo-1.png" alt="" /></Link>
                                        </div>
                                        <div className="content-box">
                                            <h4>About Us</h4>
                                            <div className="inner-text">
                                                <p>SKV Industriees is a premier engineering and fabrication firm based in Namakkal, Tamil Nadu. Specializing in high-precision Electrical, Instrumentation, and Civil works, we serve the critical needs of the Oil, Gas, Power, and Industrial sectors. With a focus on technical excellence and safety, we transform complex engineering challenges into reliable infrastructure solutions.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sidebar-contact-info">
                                            <h4>Contact Info</h4>
                                            <ul>
                                                <li>
                                                    <span className=" icon-maps-and-flags "></span>S.F.No: 1/2B, Nachipatti,Vennandur, Rasipuram (Tk),Namakkal, Tamil Nadu - 637505.
                                                </li>
                                                <li>
                                                    <span className="icon-phone-call-1"></span>
                                                    <a href="tel:+918883999999">8883999999</a>
                                                </li>
                                                <li>
                                                    <span className="icon-email-1"></span>
                                                    <a href="mailto:skvindu@yahoo.com ">skvindu@yahoo.com </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="thm-social-link1">
                                            <ul className="social-box">
                                                <li className="facebook">
                                                    <a href="https://facebook.com"><i className="icon-facebook-app-symbol" aria-hidden="true"></i></a>
                                                </li>
                                                <li className="instagram">
                                                    <a href="https://twitter.com"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Offcanvas>
        </div>
    </>
  );
}

export default OffCanvasStyleOne;