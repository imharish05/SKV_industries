import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleBuildingRenovation from '../components/single-service/SingleBuildingRenovation';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const BuildingRenovation = () => {
    return (
        <>
            <Breadcrumb
                heading="Metrial Managment"
                currentPage="Metrial Managment" 
            />
            <SingleBuildingRenovation />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default BuildingRenovation;