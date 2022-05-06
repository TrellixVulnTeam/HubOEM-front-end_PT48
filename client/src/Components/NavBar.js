import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import HubOEM_logo from '../img/huboem.jpeg'

function Navbar() {
    let navigate = useNavigate();

    function goToHomePage() {
        navigate('/')
    }
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="nav__logo">
                    <img className="nav__logo_img" onClick={goToHomePage} src={HubOEM_logo} alt="" />
                </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/dashboard" exact activeClassName="active">
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/orders" exact activeClassName="active">
                            Orders
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/machines" exact activeClassName="active">
                            Machines
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/services" exact activeClassName="active">
                            Request Service
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/documents" exact activeClassName="active">
                            Documents
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/oems" exact activeClassName="active">
                            OEMs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/messages" exact activeClassName="active">
                            Messages
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        @2022 Copyright©
                    </p>
                </footer>
            </nav>

        </div>
    )
}

export default Navbar;