import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogSix from '../components/blog/BlogSix';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';
import Header from '../common/header/Header';

const BlogListPage = () => {
    return (
        <>
        <Header/>
            <Breadcrumb
                heading="Blog List"
                currentPage="Blog List" 
            />
            <BlogSix />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default BlogListPage;