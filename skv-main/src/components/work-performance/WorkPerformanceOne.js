import React from 'react';

export default class WorkPerformanceOne extends React.Component {
    componentDidMount() {
        const $ = window.$;
        
        if ($('.dial').length) {
            $('.dial').appear(function () {
              var elm = $(this);
              
              var perc = elm.attr('value');
              elm.knob({
                'value': 0,
                'min': 0,
                'max': 100,
                'skin': 'tron',
                'readOnly': true,
                'thickness': 0.15,
                'dynamicDraw': true,
                'displayInput': false
              });
              $({ value: 0 }).animate({ value: perc }, {
                duration: 2000,
                easing: 'swing',
                progress: function () {
                  elm.val(Math.ceil(this.value)).trigger('change');
                }
              });
              $(this).append(function () {});
            }, { accY: 20 });
        }

        if ($(".count-box").length) {
            $(".count-box").appear(function () {
                var $t = $(this),
                  n = $t.find(".count-text").attr("data-stop"),
                  r = parseInt($t.find(".count-text").attr("data-speed"), 10);
                if (!$t.hasClass("counted")) {
                  $t.addClass("counted");
                  $({ countNum: $t.find(".count-text").text() }).animate({ countNum: n }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                      $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                      $t.find(".count-text").text(this.countNum);
                    },
                  });
                }
              }, { accY: 0 }
            );
        }
    }

    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="work-perfomance-one-sec">
                    <div className="container">
                        <div className="row">
                            {/* Start Work Performance One Content */}
                            <div className="col-xl-7">
                                <div className="work-perfomance-one__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>Work Performance</h6> <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">We Fabricate Strong Steel <br /> Structures Across India</h2>
                                        <p className="sec-title__text">
                                            RDSO approved and ISO 9001:2015 certified, SKV Industriees delivers 
                                            heavy steel fabrication projects with precision, quality and 
                                            on-time completion for railways, highways and industries.
                                        </p>
                                    </div>

                                   <div className="work-perfomance-one__content-bottom">
    <div className="progress-box">
        <div className="inner-box">
            <div className="graph-outer">
                <input
                    type="text"
                    className="dial"
                    data-fgcolor="#ff5e14"
                    data-bgcolor="#ebebeb"
                    data-width="100"
                    data-height="100"
                    data-linecap="normal"
                    value="95"
                    readOnly
                />
                <div className="inner-text count-box">
                    <span className="count-text" data-stop="95" data-speed="2000"></span>
                    <span className="count-Parsent">%</span>
                </div>
            </div>
        </div>
    </div>
    <div className="text-box">
        <h2>Customer Satisfaction</h2>
        <p>Trusted by Southern Railway, NHAI, HAL, ISRO and Tamil Nadu Government for consistent quality and professional project execution.</p>
    </div>
</div>
                                </div>
                            </div>
                            {/* End Work Performance One Content */}

                            {/* Start Work Performance One Img */}
                            <div className="col-xl-5">
                                <div className="work-perfomance-one__img">
                                    <img src={publicUrl+"assets/images/resources/work-perfomance-v1-img1.jpg"} alt="" />
                                </div>
                            </div>
                            {/* End Work Performance One Img */}

                        </div>
                    </div>
                </section>
            </>
        )
    }
}