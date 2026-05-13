import React from 'react';
import {Link} from 'react-router-dom';

export default class HeroOne extends React.Component {
    componentDidMount() {
        const $ = window.$;
        if ($('.slider-carousel').length) {
            $('.slider-carousel').owlCarousel({
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              loop: true,
              margin: 0,
              nav: false,
              singleItem: true,
              smartSpeed: 500,
              autoplay: true,
              autoplayTimeout: 6000,
              navText: ['<span class="icon-right-arrow"></span>', '<span class="icon-right-arrow"></span>'],
              responsive: {
                0: { items: 1 },
                600: { items: 1 },
                1024: { items: 1 }
              }
            });
          }
    }

    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="slider-one-sec style3" style={{overflow : "hidden"}}>
                    <div className="slider-carousel owl-carousel owl-theme">
                        
                        {/* Slide 1: Focus on General Fabrication & CNC */}
                        <div className="slider-one__single">
                            <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/update1.0/slider-v1-img4.jpg)'}}>
                            </div>
                            <div className="container">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content">
                                            <h3>Heavy Steel Fabrication.</h3>
                                            <h2>Precision CNC Cutting <br /> & Structural Assembly.</h2>
                                            <p>Delivering high-quality fabrication solutions with advanced CNC cutting <br /> 
                                               technologies and expert engineering for industrial projects.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 2: Focus on RDSO Approval & Quality (Centered) */}
                        <div className="slider-one__single">
                            <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/update1.0/slider-v1-img3.jpg)'}}>
                            </div>
                            <div className="container pl-0">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content text-center">
                                            <h3>RDSO Approved Firm.</h3>
                                            <h2>Excellence in Composite <br /> Girder Processing </h2>
                                            <p>Trusted partners in infrastructure, providing RDSO-certified <br /> 
                                               fabrication for bridges and heavy industrial sectors.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 3: Focus on Saw Processing & Finishing */}
                        <div className="slider-one__single">
                            <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/update1.0/slider-v1-img6.jpg)'}}>
                            </div>
                            <div className="container">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content">
                                            <h3>Industrial Solutions.</h3>
                                            <h2>Advanced Saw Processing <br /> & Metalizing Services</h2>
                                            <p>End-to-end processing from precision saw cutting to <br /> 
                                               specialized grid blasting and zinc chromate painting. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}