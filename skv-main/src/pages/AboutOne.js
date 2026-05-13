import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import WorkPerformanceOne from '../components/work-performance/WorkPerformanceOne';
import FeatureFive from '../components/features/FeatureFive';
import ProjectOne from '../components/project/ProjectOne';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';
import Header from '../common/header/Header';
import FeatureThree from "../components/features/FeatureThree"

const AboutOne = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="About Us"
                currentPage="About Us" 
                Img = "about.png"
            />
            <WorkPerformanceOne />
            <FeatureFive />
            <FeatureThree/>
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default AboutOne;