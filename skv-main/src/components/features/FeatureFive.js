import React from 'react';
import {Link} from 'react-router-dom';

export default class FeatureFive extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".tabs-box").length) {
            $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
              e.preventDefault();
              var target = $($(this).attr("data-tab"));
        
              if ($(target).is(":visible")) {
                return false;
              } else {
                target
                  .parents(".tabs-box")
                  .find(".tab-buttons")
                  .find(".tab-btn")
                  .removeClass("active-btn");
                $(this).addClass("active-btn");
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .fadeOut(0);
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .removeClass("active-tab");
                $(target).fadeIn(300);
                $(target).addClass("active-tab");
              }
            });
        }

        if ($(".feature-three__history-carousel").length) {
            $(".feature-three__history-carousel").owlCarousel({
              loop: false,
              margin: 30,
              nav: false,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: false,
              autoplayTimeout: 6000,
              navText: [
                '<i className="fa fa-angle-double-left" aria-hidden="true"></i>',
                '<i className="fa fa-angle-double-right" aria-hidden="true"></i>',
              ],
              responsive: {
                0: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                992: {
                  items: 2,
                },
                1200: {
                  items: 3,
                },
                1350: {
                  items: 3,
                },
              },
            });
        }
          
    }
    render(){

const companyHistory = [
    {
        year: "2010",
        title: "Foundation",
        text: "SKV Industriees was established at Vennandur, Namakkal, Tamil Nadu, starting its journey in heavy steel fabrication and structural work here."
    },
    {
        year: "2012",
        title: "First Railway Project",
        text: "Secured and completed first Southern Railway steel girder project, marking the start of a strong and lasting bond with Indian Railways work."
    },
    {
        year: "2014",
        title: "RDSO Approval",
        text: "Obtained RDSO approval from Ministry of Railways, India, for fabrication of Open Web, Composite and Other Steel Plate Girders successfully."
    },
    {
        year: "2016",
        title: "HAL & ISRO Projects",
        text: "Delivered 650 MT helicopter plant for HAL at Bidrehalla Kaval and crane girder for ISRO VSSC Thumba Kerala with full quality compliance here."
    },
    {
        year: "2018",
        title: "ISO Certification",
        text: "Achieved ISO 9001:2015 certification from Otabu Certification Pvt Ltd for manufacturing and supply of heavy steel fabrication products work."
    },
    {
        year: "2019",
        title: "NHAI Projects",
        text: "Executed NHAI bridge projects at Ananthapur totalling 1420 MT and Mudigubba 550 MT, expanding our strong presence beyond the railway sector."
    },
    {
        year: "2020",
        title: "PEB Expansion",
        text: "Expanded into Pre-Engineered Buildings, delivering warehouses for Tamil Nadu Government Civil Supplies Department successfully across locations."
    },
    {
        year: "2021",
        title: "Bowstring Girders",
        text: "Commenced bowstring girder work for Southern and South Western Railways, completing landmark arch bridge structures across Tamil Nadu, India."
    },
    {
        year: "2022",
        title: "Major Milestones",
        text: "Completed ROB projects at Perungalathur and Paranur for Southern Railway, each weighing 830 MT with a massive 53 metre span at both sites."
    },
    {
        year: "2024",
        title: "80+ Projects",
        text: "Crossed 80 completed projects with active bowstring girder work at Jolarpetti and Nayandahalli for South Western Railway totalling 550 MT."
    },
];
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="feature-three-sec clearfix">
                    <div className="feature-three__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/features-v1-bg.jpg)'}}>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="feature-three__title">
                                    <div className="sec-title">
    <div className="sec-title__tagline">
        <h6>More About Us</h6> <span className="right"></span>
    </div>
    <h2 className="sec-title__title">Our Journey Of <br /> Excellence & Growth</h2>
    <p className="sec-title__text">From a single fabrication unit in Namakkal to an RDSO approved, 
    ISO certified firm delivering steel structures across India.</p>
</div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="feature-three__tab tabs-box">
                                    <div className="feature-three__tab-button">
                                                <h3>Our History</h3>
                                    </div>


                                    <div className="tabs-content">
                                        {/* Start Tab */}
                                        <div className="tab active-tab" id="history">
                                            <div className="feature-three__tab-content-item">
                                                <div className="feature-three__history-carousel owl-carousel owl-theme">

                                                    {
                                                        companyHistory.map((item,index) => (
                                                            
                                                    <div className="feature-three__history-single" key={index}>
                                                        <h5 className='pb-3'>{item.title}</h5>
                                                        <div className="history-text">
                                                            <h2>history</h2>
                                                        </div>
                                                        <div className="date-box">
                                                            <h2>{item.year}</h2>
                                                        </div>
                                                        <p>{item.text}</p>
                                                    </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Tab */}
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