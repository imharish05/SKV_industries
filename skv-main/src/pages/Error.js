import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ErrorContent from "../components/error/ErrorContent";
import FooterOne from "../common/footer/FooterOne";
import Header from '../common/header/Header';

const Error = () => {
    return (
        <>
        <Header/>
            <Breadcrumb
                heading="Error Page"
                currentPage="404" 
            />
            <ErrorContent />
            <FooterOne />
        </>
    )
}

export default Error;