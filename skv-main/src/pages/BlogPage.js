import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogFour from '../components/blog/BlogFour';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';
import Header from '../common/header/Header';

const BlogPage = () => {
    return (
        <>
        <Header/>
            <Breadcrumb
                heading="Latest News"
                currentPage="Blog Grid" 
            />
            <BlogFour />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default BlogPage;