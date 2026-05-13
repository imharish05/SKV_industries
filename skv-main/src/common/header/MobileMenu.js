import React, { useState, useEffect } from 'react';
import * as AiIcons from 'react-icons/ai';
import { AiOutlineBars } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const menuData = [
    { title: 'Home', path: '' },
    { title: 'About', path: 'about' },
    { title: 'Services', path: 'services' },
    { title: 'Projects', path: 'projects' },
    { title: 'Contact', path: 'contact' },
];

const SidebarNav = styled.nav`
  background: rgb(41, 121, 255,0.9);
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 450ms cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 10001; 
  box-shadow: -10px 0 30px rgba(0,0,0,0.5);
`;

const SidebarLink = styled(Link)`
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid rgba(255,255,255,0.03);
    transition: 0.3s;
    &:hover {
        background: rgba(255, 94, 20, 0.1);
        color: #ff5e14;
        padding-left: 35px;
    }
`;

const MobileMenu = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const publicUrl = process.env.PUBLIC_URL + '/';

    useEffect(() => {
        if (sidebar) {
            document.body.classList.add('mobile-menu-active');
        } else {
            document.body.classList.remove('mobile-menu-active');
        }
    }, [sidebar]);

    return (
        <>
            <Link to="#" className="d-flex d-lg-none justify-content-end" onClick={showSidebar} style={{ color: '#ff5e14', fontSize: '2rem', display: 'flex', justifyContent: 'flex-end', marginRight: '20px'}}>
                <AiOutlineBars />
            </Link>

            <SidebarNav sidebar={sidebar}>
                {/* Header Section */}
                <div style={{display:'flex', justifyContent:'space-between', padding:'20px 25px', alignItems:'center'}}>
                    <Link to={publicUrl} onClick={showSidebar}>
                        <img src={publicUrl + "assets/images/resources/stricky-logo.png"} width="60" alt="logo" />
                    </Link>
                    <div onClick={showSidebar} style={{background: 'rgba(255,255,255,0.1)', width: '35px', height: '35px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                        <AiIcons.AiOutlineClose style={{color: 'white', fontSize: '18px'}} />
                    </div>
                </div>
                
                {/* Navigation Links */}
                <div style={{overflowY: 'auto'}}>
                    {menuData.map((item, index) => (
                        <SidebarLink to={publicUrl + item.path} key={index} onClick={showSidebar}>
                            <span>{item.title}</span>
                            <AiIcons.AiOutlineRight style={{fontSize: '12px', opacity: 0.5}} />
                        </SidebarLink>
                    ))}
                </div>

                {/* Modern Contact Card Section */}
                <div style={{ padding: '20px', background: 'rgba(0,0,0,0.2)', borderRadius: '25px'}}>
                    <div className="contact-card-mini">
                        <a href="mailto:skvindu@yahoo.com" className="contact-item">
                            <div className="icon-wrap"><i className="fa fa-envelope"></i></div>
                            <div className="text-wrap">
                                <label>Email Us</label>
                                <span>skvindu@yahoo.com</span>
                            </div>
                        </a>
                        <a href="tel:8883999999" className="contact-item">
                            <div className="icon-wrap"><i className="fa fa-phone"></i></div>
                            <div className="text-wrap">
                                <label>Call Us</label>
                                <span>+91 88839 99999</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Social Links Block */}
<div style={{ 
    padding: '15px 25px 25px', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '15px' 
}}>
    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-nav-item">
        <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-nav-item">
        <i className="fab fa-instagram"></i>
    </a>
</div>
                
                
            </SidebarNav>

            {sidebar && <div onClick={showSidebar} className="nav-overlay"></div>}
        </>
    );
};

export default MobileMenu;