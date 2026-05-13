import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import WhyChooseFour from '../components/why-choose-us/WhyChooseFour';
import FeatureTwo from '../components/features/FeatureTwo';
import ServiceFour from '../components/services/ServiceFour';
import FooterOne from '../common/footer/FooterOne';
import Header from '../common/header/Header';

const ServicesPage = () => {
    return (
        <>
        <Header/>
            <Breadcrumb
                heading="Services"
                currentPage="Services" 
                Img = "services.png"
            />
            <WhyChooseFour />
            <FeatureTwo />
            <ServiceFour />
            <FooterOne />
        </>
    )
}

export default ServicesPage;