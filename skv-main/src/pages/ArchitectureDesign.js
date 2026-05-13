import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleArchitectureDesign from '../components/single-service/SingleArchitectureDesign';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const ArchitectureDesign = () => {
    return (
        <>
            <Breadcrumb 
                heading="Architecture Design"
                currentPage="Architecture Design" 
            />
            <SingleArchitectureDesign />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default ArchitectureDesign;