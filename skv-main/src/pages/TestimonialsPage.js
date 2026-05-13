import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleTestimonialContent from '../components/single-testimonial/SingleTestimonialContent';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const TestimonialsPage = () => {
    return (
        <>
            <Breadcrumb
                heading="Testimonials Page"
                currentPage="Testimonials Page" 
            />
            <SingleTestimonialContent />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default TestimonialsPage;