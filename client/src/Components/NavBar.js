import React from 'react'
import { NavLink } from 'react-router-dom';

import HubOEM_logo from '../img/huboem.jpeg'

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="logo">
                    <img src={HubOEM_logo} alt="" />
                </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/machines" exact activeClassName="active">
                            Machines
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/orders" exact activeClassName="active">
                            Orders
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