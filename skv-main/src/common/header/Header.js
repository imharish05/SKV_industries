import React from 'react';
import {Link} from "react-router-dom";
import LogoBlack from './LogoBlack';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import LogoBox from './LogoBox';
import OffCanvasStyleOne from './OffCanvasStyleOne';

export default class Header extends React.Component {
    render(){
        return (
            <>
                <header className="main-header main-header-three clearfix">
                    <div className="main-header-three__wrapper">

                        <div className="main-header-three__middle">
                            <div className="container">
                                <div className="main-header-three__middle-inner">
                                    <LogoBox />

                                    <div className="contact-info">
                                        <ul>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-pin"></span>
                                                </div>
                                                <div className="text-box">
                                                    <h3 className='text-dark'>Our Location</h3>
                                                    <p>Namakkal, Tamil Nadu</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-email"></span>
                                                </div>
                                                <div className="text-box">
                                                    <h3 className='text-dark'>Online Support</h3>
                                                    <p className="email"><a href="mailto:skvindu@yahoo.com">skvindu@yahoo.com 
</a>
                                                    </p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-phone-call"></span>
                                                </div>
                                                <div className="text-box">
                                                    <h3 className='text-dark'>Free Contact</h3>
                                                    <p className="number"><a href="tel:8883999999">8883999999</a></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-header-three__bottom ">
                            <div className="container">
                                <div className="main-header-three__bottom-inner">
                                    <div className="main-header-one__bottom-left">
                                        <nav className="main-menu main-menu--1">
                                            <div className="main-menu__inner">
                                                <MobileMenu />
                                                <div className="stricky-one-logo">
                                                    <LogoBlack />
                                                </div>
                                                <Nav />
                                            </div>
                                        </nav>
                                    </div>


                                    <div className="main-header-one__bottom-right">

                                        <div className="side-content-button-box">
                                            <OffCanvasStyleOne />
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </header>

                <div className="stricky-header stricked-menu main-menu">
                    <div className="sticky-header__content"></div>
                </div>

            </>
        )
    }
}