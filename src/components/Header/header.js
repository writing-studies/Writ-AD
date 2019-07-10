import React from 'react';
import './header.css';

const Header = props => (
    <Header className = "Header">
        <ul>
            <li>
                <a href="#">{"Book and Appointment"}</a>
            </li>
            <li>
                <a href="#">{"Return Home"}</a>
            </li>
            <li>
                <a href="#">{"Contact Info"}</a>
            </li>
        </ul>
    </Header>
);
export default Header;