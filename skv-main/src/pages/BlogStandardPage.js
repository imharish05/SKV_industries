import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogSeven from '../components/blog/BlogSeven';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';
import Header from '../common/header/Header';

const BlogStandardPage = () => {
    return (
        <>
        <Header/>
            <Breadcrumb
                heading="Blog Standard"
                currentPage="Blog Standard" 
            />
            <BlogSeven />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default BlogStandardPage;