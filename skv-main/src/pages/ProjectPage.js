import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ProjectFour from '../components/project/ProjectFour';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';
import Header from '../common/header/Header';

const ProjectPage = () => {
    return (
        <>
        <Header/>
            <Breadcrumb 
                heading="Projects"
                currentPage="Project"
                Img = "projects.png"
            />
            <ProjectFour />
            <FooterOne />
        </>
    )
}

export default ProjectPage;