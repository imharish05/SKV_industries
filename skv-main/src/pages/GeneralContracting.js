import React, { useEffect, useState } from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleGeneralContracting from '../components/single-service/SingleGeneralContracting';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';
import Header from '../common/header/Header';
import { useParams } from 'react-router-dom';

const GeneralContracting = () => {

    return (


        <>
        <Header/>
            <Breadcrumb
                heading="Contract"
                currentPage="sample"
            />
            <SingleGeneralContracting />
            <FooterOne />
        </>
    )
}

export default GeneralContracting;