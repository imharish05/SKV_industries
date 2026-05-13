import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogFive from '../components/blog/BlogFive';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const BlogGridPage = () => {
    return (
        <>
            <Breadcrumb
                heading="Blog Grid"
                currentPage="Blog Grid" 
            />
            <BlogFive />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default BlogGridPage;