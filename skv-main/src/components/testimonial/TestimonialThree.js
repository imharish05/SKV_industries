import React from 'react';

export default class TestimonialThree extends React.Component {
    componentDidMount() {
        const $ = window.$;
        
        if ($(".testimonials-three__carousel").length) {
            $(".testimonials-three__carousel").owlCarousel({
              loop: true,
              margin: 50,
              nav: true,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: false,
              autoplayTimeout: 10000,
              navText: [
                '<i class="icon-right-arrow left"></i>',
                '<i class="icon-right-arrow"></i>',
              ],
              responsive: {
                0: { items: 1 },
                600: { items: 1 },
                800: { items: 2 },
                992: { items: 2 },
                1200: { items: 2 },
              },
            });
        }
    }

    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'

 const testimonials = [
    {
        name: "V. Karthik",
        role: "Dy. Chief Engineer, Southern Railway",
        text: "SKV Industriees successfully completed the composite girder fabrication and erection work meeting all quality assurance standards set by Southern Railway.",
        stars: 5
    },
    {
        name: "Thavam Constructions",
        role: "Main Contractor, Southern Railway",
        text: "We entrusted SKV with our 860 MT composite girder fabrication and they delivered with great precision, meeting every RDSO specification fully on schedule.",
        stars: 5
    },
    {
        name: "TATA Projects",
        role: "ISRO VSSC Project, Kerala",
        text: "SKV Industriees handled the crane girder fabrication for our ISRO wind tunnel project with exceptional technical accuracy and outstanding professionalism.",
        stars: 5
    },
    {
        name: "Hindustan Aeronautics Limited",
        role: "HAL, Helicopter Manufacturing Plant",
        text: "The 650 MT PEB structure for our helicopter manufacturing plant was delivered to exact specifications with great technical expertise and strict quality control.",
        stars: 5
    },
    {
        name: "Southern Railway",
        role: "Loco Works, Chennai",
        text: "SKV Industriees constructed our Loco Paint Shop PEB structure with full efficiency. Their ISO certified processes and RDSO approval gave us total confidence.",
        stars: 5
    },
    {
        name: "Tamil Nadu Government",
        role: "Civil Supplies Department",
        text: "Multiple warehouse sheds across Edappadi, Vazhapadi and Omallur were completed on time. SKV delivered quality steel structures that perfectly serve our needs.",
        stars: 5
    },
];
        return (
            <>
                <section className="testimonials-three">
                    <div className="testimonials-three__img1 zoom-fade">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img7.jpg"} alt="#" />
                    </div>
                    <div className="testimonials-three__img2 float-bob-y">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img3.jpg"} alt="#" />
                    </div>
                    <div className="testimonials-three__img3 float-bob-y">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img4.jpg"} alt="#" />
                    </div>
                    <div className="testimonials-three__img4 zoom-fade">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img10.jpg"} alt="#" />
                    </div>
                    <div className="testimonials-three__img5 zoom-fade">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img1.jpg"} alt="#" />
                    </div>
                    <div className="testimonials-three__img6 float-bob-y">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img8.jpg"} alt="#" />
                    </div>
                    <div className="testimonials-three__img7 zoom-fade">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img6.jpg"} alt="#" />
                    </div>
                    <div className="testimonials-three__img8 zoom-fade">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img5.jpg"} alt="#" />
                    </div>
                    <div className="testimonials-three__img9 float-bob-y">
                        <img src={publicUrl+"assets/images/update1.0/testimonials-v3-img9.jpg"} alt="#" />
                    </div>

                    <div className="container">
                        <div className="sec-title">
                            <div className="sec-title__tagline">
                                <h6>TESTIMONIALS</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">What Our Clients Say</h2>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="testimonials-three__carousel owl-carousel owl-theme">

                                    {testimonials.map((item, index) => (
                                        <div className="testimonials-three__single" key={index}>
                                            <div className="quote-icon">
                                                <span className="fa fa-quote-right"></span>
                                            </div>
                                            <div className="testimonials-three__single-inner">
                                                <div className="title-box">
                                                    <h3>{item.name}</h3>
                                                    <span>{item.role}</span>
                                                </div>
                                                <div className="text-box">
                                                    <p>{item.text}</p>
                                                </div>
                                                <ul className="rating-box">
                                                    {[...Array(item.stars)].map((_, i) => (
                                                        <li key={i}><span className="icon-star"></span></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}