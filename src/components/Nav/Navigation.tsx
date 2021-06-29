import React from 'react';
import { NavLink } from 'react-router-dom';
import covidLogo from '../../assets/covidLogo.jpg';

const Navigation = () => {

    return (
        <header className={"header"}>
            <nav className="nav">
                <div className="navigation-logo">
                    <NavLink exact to="/" className="nav-desktop">
                        <img src={covidLogo} alt="logo du covid19"/>
                    </NavLink>
                </div>
                <div className="wrapper-link">

                    <NavLink exact to="/vaccine" className="nav-link" activeClassName="nav-active">
                        Vaccine
                    </NavLink>

                    <NavLink exact to="/track" className="nav-link" activeClassName="nav-active">
                        Track
                    </NavLink>
                
                    <NavLink exact to="/attestation" className="nav-link" activeClassName="nav-active">
                        Attestation
                    </NavLink>
                    
                </div>
            </nav>
        </header>
    );
};

export default Navigation;