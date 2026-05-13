import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaAngleUp, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const FloatingContact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const phoneNumber = "+918883999999"; 

    const isHomePage = location.pathname === "/" || location.pathname === "/home";

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100 && !isHomePage) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [isHomePage]);

    if (isHomePage) return null;

    return (
        <div className='floating-container'>
            {/* WhatsApp - Original Green */}
            <a href={`https://wa.me/${phoneNumber}?text=Hello,%20I%20would%20like%20to%20enquire%20about%20your%20steel%20fabrication%20services.`} 
               className="btn-floating btn-whatsapp text-white shadow-lg" 
               target="_blank" rel="noopener noreferrer">
                <IoLogoWhatsapp/>
            </a>

            {/* Phone - Your Blue or BS Primary */}
            <a href={`tel:${phoneNumber}`} 
               className="btn-floating btn-call  text-white shadow-lg">
                <FaPhoneAlt />
            </a>

            {/* Scroll Top - Black Background */}
            <button style={{opacity :isVisible ? '1' : '0'  , transition: 'opacity 0.4s ease', pointerEvents: isVisible ? 'auto' : 'none' }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="btn-floating bg-dark text-white shadow-lg border-0">
                <FaAngleUp/>
            </button>
        </div>
    );
};

export default FloatingContact;