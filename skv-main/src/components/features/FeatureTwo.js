import React from 'react';
import {Link} from 'react-router-dom';

export default class FeatureTwo extends React.Component {
    render(){

const features = [
    {
        title: "RDSO Approved Firm  ",
        text: "Approved by Ministry of Railways for steel bridge girder fabrication work.",
        icon: "icon-tick"
    },
    {
        title: "ISO 9001:2015 Certified",
        text: "Certified for manufacturing and supply of heavy steel fabrication products.",
        icon: "icon-document"
    },
    {
        title: "Advanced Machinery   ",
        text: "40+ machines including CNC plasma cutters, EOT cranes and auto welders ok.",
        icon: "icon-automation"
    },
    {
        title: "Experienced Workforce",
        text: "75 skilled employees including engineers, welders, blasters and painters ok.",
        icon: "icon-industrial-zone"
    },
    {
        title: "80+ Projects Delivered",
        text: "Completed 80+ projects for SR, NHAI, HAL, ISRO and Tamil Nadu Government.",
        icon: "icon-construction"
    },
    {
        title: "End To End Services  ",
        text: "CNC cutting, SAW welding, blasting, metalizing and painting under one roof.",
        icon: "icon-wrench"
    },
    {
        title: "Pan India Presence   ",
        text: "Projects delivered across Tamil Nadu, Andhra Pradesh, Karnataka and Kerala.",
        icon: "icon-chart"
    },
    {
        title: "PEB & Warehouse Experts",
        text: "Delivered 20+ PEB sheds and warehouses for government and private clients.",
        icon: "icon-hammer"
    },
];
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="feature-two-sec">
                    <div className="feature-two__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/benefits-v1-bg.jpg)'}}></div>
                    <div className="shape3 float-bob-y"><img src={publicUrl+"assets/images/shapes/feature-v2-shape1.png"} alt="" /></div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>Our Feature</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">Why Choose Us</h2>
                        </div>
                        <div className="row">

                            <div className="row" style={{display: 'flex', flexWrap: 'wrap'}}>
    {features.map((item, index) => (
        <div className="col-xl-3 col-lg-6 col-md-6" key={index} 
            style={{display: 'flex', marginBottom: '30px'}}>
            <div className="feature-two__single" style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <div className="shape1"></div>
                <div className="shape2"></div>
                <div className="icon">
                    <span className={item.icon}></span>
                </div>
                <h3><Link to={process.env.PUBLIC_URL + `/`}>{item.title}</Link></h3>
                <p>{item.text}</p>
                <div className="btn-box">
                    <Link to={process.env.PUBLIC_URL + `/`}>
                        <span className="icon-right-arrow-1"></span>
                    </Link>
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
}