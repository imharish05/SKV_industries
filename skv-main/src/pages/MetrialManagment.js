import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleMetrialManagment from '../components/single-service/SingleMetrialManagment';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const MetrialManagment = () => {
    return (
        <>
            <Breadcrumb
                heading="Metrial Managment"
                currentPage="Metrial Managment" 
            />
            <SingleMetrialManagment />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default MetrialManagment;