import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FaqTwo from '../components/faq/FaqTwo';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const FaqPage = () => {
    return (
        <>
            <Breadcrumb
                heading="Faq Page"
                currentPage="Faq" 
            />
            <FaqTwo />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default FaqPage;