import React from 'react';
import { Link } from 'react-router-dom';

export default class LogoBox extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <div className="logo-box" style={{ maxWidth: '100px' }}> 
                <Link to={process.env.PUBLIC_URL + `/`}>
                    <img 
                        className="img-fluid d-block" 
                        src={publicUrl + "assets/images/resources/stricky-logo.png"} 
                        alt="Logo" 
                    />
                </Link>
            </div>
        )
    }
}