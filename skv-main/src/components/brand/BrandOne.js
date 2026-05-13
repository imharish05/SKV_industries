import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper"; // Ensure these modules are imported

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

export default class BrandOne extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        
        // Array for your 3 unique certificates
        const certificates = [
            { id: 1, img: "certificate1.png" },
            { id: 2, img: "certificate2.png" },
            { id: 3, img: "certificate3.png" },
        ];

        return (
            <section className="brand-one-sec py-5">
                <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>OUR CERTIFICATIONS</h6> <span className="right"></span>
                            </div>
                      <h2 className="sec-title__title">Our Trusted Certifications <br /> & Approvals.</h2>
                        </div>
                <div className="brand-one__bg" style={{ backgroundImage: `url(${publicUrl}assets/images/backgrounds/brand-v1-bg.png)` }}></div>
                <div className="container">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        loop={true}
                        spaceBetween={30}
                        slidesPerView={3} // Default for desktop
                        speed={1400}
                        freeMode={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            // Mobile: 1 image
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            // Tablet: 2 images
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            // Desktop: 3 images
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            }
                        }}
                        className="thm-swiper__slider"
                    >
                        {certificates.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="brand-one__single p-2 bg-white rounded">
                                    <Link to="/">
                                        <img 
                                            className='img-fluid w-50' 
                                            src={`${publicUrl}assets/images/certificates/${item.img}`} 
                                            alt={`Certificate ${item.id}`} 
                                        />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        );
    }
}