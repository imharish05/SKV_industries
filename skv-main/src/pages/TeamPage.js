import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import TeamTwo from '../components/team/TeamTwo';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const TeamPage = () => {
    return (
        <>
            <Breadcrumb
                heading="Team Member"
                currentPage="Team Member" 
            />
            <TeamTwo />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default TeamPage;