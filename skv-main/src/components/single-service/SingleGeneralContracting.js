import React, { useEffect, useState } from 'react';

const SingleGeneralContracting = ({title}) => {

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
          

        let publicUrl = process.env.PUBLIC_URL+'/'

        const [service,setService ]= useState([])

        const serviceData = [
    {
        title: "Bowstring Girders",
        text1: "SKV Industriees specializes in fabrication of RDSO approved Bowstring Arch Bridge Girders for Indian Railways. Our bowstring girders are fabricated using heavy structural steel with precision CNC cutting, SAW welding and full trial assembly before dispatch.",
        text2: "Completed and ongoing bowstring girder projects for South Western Railway at Patchur, Jolarpetti and Nayandahalli with spans up to 42 metres and weights up to 275 MT per span.",
        process_title: "Fabrication Process",
        process_content: "Every bowstring girder goes through a strict multi-stage fabrication and quality process before site launching.",
        process_list: [
            "CNC plasma cutting and SAW welding to RDSO standards.",
            "Full trial assembly and dimensional inspection at factory.",
            "Gird blasting, metalizing and zinc chromate painting applied.",
            "Composite girder joint processing with precision machinery.",
            "Mobile crane launching up to 25 tonnes at site.",
            "Spans up to 42 metres completed for South Western Railway.",
            "RDSO approved fabrication with ISO 9001:2015 quality system."
        ],
        bg : "metalizing-bg.jpg",
        img : "bowstring-grider.png",
    },
    {
        title: "Metalizing",
        text1: "SKV Industriees provides professional zinc metalizing services for heavy steel fabricated structures. Metalizing is a thermal spray process that applies a zinc coating to steel surfaces, providing long-lasting corrosion protection for railway bridges and structural steel.",
        text2: "All metalizing work is carried out as per RDSO specifications followed by zinc chromate painting to ensure complete surface protection of fabricated girders and structures.",
        process_title: "Metalizing Process",
        process_content: "Our metalizing process follows strict quality control procedures ensuring maximum corrosion protection on all steel surfaces.",
        process_list: [
            "Sand blasting to Sa 2.5 surface preparation standard.",
            "Zinc thermal spray metalizing applied to all steel surfaces.",
            "Zinc chromate painting applied as final protective coat.",
            "3 sand blasting machines of 200 litre capacity available.",
            "3 airless spray gun machines for uniform paint application.",
            "Heavy duty compressors at 12 bar and 8 bar pressure used.",
            "Carried out as per RDSO specifications for railway bridges."
        ],
        bg : "metalizing-bg.jpg",
        img : "metalizing.jpg",
    },
    {
        title: "CNC Cutting",
        text1: "SKV Industriees operates 2 CNC plasma cutting machines with capacity up to 300mm for precision steel plate cutting. Our CNC cutting facility ensures accurate and clean cuts for all heavy steel fabrication requirements including bridge girders, PEB structures and industrial buildings.",
        text2: "Combined with our CNC drilling machine capable of drilling up to 62mm holes, our machining facility handles all precision fabrication requirements in-house without outsourcing.",
        process_title: "CNC Cutting Capabilities",
        process_content: "Our CNC facility is equipped with the latest machines ensuring precision cutting for all heavy steel fabrication projects.",
        process_list: [
            "2 CNC plasma cutting machines up to 300mm plate capacity.",
            "CNC drilling machine for precision holes up to 62mm diameter.",
            "Automatic warpage bend removal machine up to 75mm thickness.",
            "Plasma cutting machine of 600 amps capacity available.",
            "6 pug cutting machines and 15 magnetic core cutting machines.",
            "Hydraulic pressing machine of 200 tonnes capacity in use.",
            "Warpage machine of 500 tonnes for structural straightening.",
            "15 manual gas cutting sets for on-site and shop cutting work."
        ]
    },
    {
        title: "PEB Roofing & Structures",
        text1: "SKV Industriees designs and constructs Pre-Engineered Steel Buildings and warehouse structures for industrial, commercial and government clients. Our PEB projects range from small factory buildings to large spinning mills, cold storage plants and helicopter manufacturing facilities.",
        text2: "Completed PEB projects include a 650 MT helicopter plant for HAL, a 140 MT loco paint shop for Southern Railway and multiple warehouses for Tamil Nadu Government Civil Supplies Department across various locations.",
        process_title: "PEB Construction Process",
        process_content: "Our PEB construction follows a systematic process from design to erection ensuring structural integrity and quality at every stage.",
        process_list: [
            "Steel fabrication with CNC cutting and auto welding machines.",
            "EOT crane erection with 20 MT and 25 MT capacity cranes.",
            "Roofing, cladding and painting completed to specifications.",
            "Completed 650 MT helicopter plant for HAL at Bidrehalla Kaval.",
            "140 MT loco paint shop delivered for Southern Railway Chennai.",
            "Multiple warehouses built for Tamil Nadu Government Civil Supplies.",
            "PEB spans from small 408 sqm boiler plants to 11250 sqm mills.",
            "20+ PEB sheds completed for government and private sector clients."
        ]
    },
];

        useEffect(() => {
            setService(() => serviceData.filter((item) =>item.title === title ))
        },[title])


        return (


            <>
                <section className="services-details-page">
                    <div className="container">
                        <div className="row">
                            {/* Start Services Details Content */}
                            <div className="col-xl-12 col-lg-10">
                                {service.map((item,index) => (
                                <div className="services-details__content" key={index}>
                                    <div className="services-details__img1">
                                        <img src={publicUrl+`assets/images/services/${item.bg}`} alt="" />
                                    </div>
                                    <div className="services-details__text-box1">
                                        <div className="title">
                                            <h2>{item.title}</h2>
                                        </div>
                                        <p className="text-1">{item.text1}</p>

                                        <p className="text-2">{item.text2} </p>
                                    </div>

                                    <div className="services-details__text-box2">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="services-details__text-box2-img">
                                                    <img src={publicUrl+`assets/images/services/${item.img}`} className='d-none d-lg-block' alt="" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="services-details__text-box2-content">
                                                    <div className="title">
                                                        <h2>{item.process_title}</h2>
                                                    </div>
                                                    <div className="text">
                                                        <p>{item.process_content}</p>
                                                    </div>
                                                    <ul>
                                                       {item.process_list.map((list,index) => (
                                                           <li key={index}>
                                                            <div className="icon">
                                                                <span className="icon-tick"></span>
                                                            </div>

                                                            <div className="text">
                                                                <p>{list}</p>
                                                            </div>
                                                        </li>
                                                       ))
                                                    }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
}

export default SingleGeneralContracting;