import React from 'react';

export default class WhyChooseFour extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($('.count-bar').length) {
            $('.count-bar').appear(function () {
              var el = $(this);
              var percent = el.data('percent');
              $(el).css('width', percent).addClass('counted');
            }, {
              accY: -50
            });
        
        }

        if ($(".circle-progress").length) {
            $(".circle-progress").appear(function () {
              let circleProgress = $(".circle-progress");
              circleProgress.each(function () {
                let progress = $(this);
                let progressOptions = progress.data("options");
                progress.circleProgress(progressOptions);
              });
            });
          }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="why-choose-two-sec why-choose-two-sec--services">
                    <div className="shape1 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <img src={publicUrl+"assets/images/shapes/why-choose-v2-shape1.png"} alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            {/* Start Why Choose Two Content */}
                            <div className="col-xl-6">
                                <div className="why-choose-two__content">
                                    <div className="sec-title">
    <div className="sec-title__tagline">
        <h6>Why Choose Us</h6> <span className="right"></span>
    </div>
    <h2 className="sec-title__title">RDSO Approved & Trusted <br /> Steel Fabrication Firm</h2>
    <p className="sec-title__text">SKV Industriees delivers high-quality heavy steel fabrication 
    with ISO 9001:2015 certified processes, serving Indian Railways, 
    NHAI, HAL and ISRO across India.</p>
</div>

{/* Progress Bars */}
<div className="why-choose-two__content-progress">

    {/* Bar 1 */}
    <div className="why-choose-two__content-progress-single">
        <div className="top">
            <h3>On Time Delivery</h3>
            <div className="count-text">95%</div>
        </div>
        <div className="bar">
            <div className="bar-inner count-bar" data-percent="95%"></div>
        </div>
    </div>

    {/* Bar 2 */}
    <div className="why-choose-two__content-progress-single">
        <div className="top">
            <h3>Quality Compliance</h3>
            <div className="count-text">98%</div>
        </div>
        <div className="bar">
            <div className="bar-inner count-bar" data-percent="98%"></div>
        </div>
    </div>

    {/* Bar 3 */}
    <div className="why-choose-two__content-progress-single mar0">
        <div className="top">
            <h3>Customer Satisfaction</h3>
            <div className="count-text">95%</div>
        </div>
        <div className="bar">
            <div className="bar-inner count-bar" data-percent="95%"></div>
        </div>
    </div>

</div>
                                </div>
                            </div>
                            {/* End Why Choose Two Content */}

                            {/* Start Why Choose Two Img */}
                            <div className="col-xl-6">
                                <div className="why-choose-two__img" style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/why-choose-v2-bg.jpg)'}}></div>
                            </div>
                            {/* End Why Choose Two Img */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}