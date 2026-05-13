import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleBlogDetails from '../components/single-blog/SingleBlogDetails';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';
import Header from '../common/header/Header';

const BlogDetails = () => {
    return (
        <>
            <Header/>
            <Breadcrumb
                heading="Blog Details"
                currentPage="Blog Details" 
            />
            <SingleBlogDetails />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default BlogDetails;