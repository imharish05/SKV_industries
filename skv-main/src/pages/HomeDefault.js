import React from "react";
import Header from "../common/header/Header";
import HeroOne from "../components/hero/HeroOne";
import ProjectThree from "../components/project/ProjectThree";
import ServiceThree from "../components/services/ServiceThree";
import FeatureFour from "../components/features/FeatureFour";
import TestimonialThree from "../components/testimonial/TestimonialThree";
import FooterOne from "../common/footer/FooterOne";

const HomeDefault = () => {
    return (
        <>
            <Header />
            <HeroOne />
            <ServiceThree />
            <ProjectThree />
            <FeatureFour />
            <TestimonialThree />
            <FooterOne />
        </>
    )
}

export default HomeDefault;