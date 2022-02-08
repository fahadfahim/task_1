import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './Header.css'
import person from '../../assets/person.jpg'
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import MobileMenu from '../MobileMenu/MobileMenu';
const Header = () => {
    const [sidmenu, setSideMenu] = useState('')
    return (
        <>
            <div className='header'>
                <div className='header-links'>
                    <ul className='links'>
                        <li className='link'><a>Dashboard</a></li>
                        <li className='link'><a>Layout Builder</a></li>
                        <li className='link'><NavLink to='/tables'>Crafted</NavLink></li>
                        <li className='link'><a>Apps</a></li>
                        <li className='link'><a>Mega Menu</a></li>
                    </ul>
                </div>
                <div className='header-icon'>
                    <span> <i className="bi bi-search"></i></span>
                    <span><i className="bi bi-bar-chart"></i></span>
                    <span><i className='bi bi-x-diamond-fill '></i></span>
                    <span><i className="bi bi-chat-left-text"></i></span>
                    <span><i className='bi bi-grid-fill'></i></span>
                    <span><Avatar variant='square' src={person} style={{ height: '38px', width: '35px', borderRadius: '5px' }} /></span>
                </div>
            </div>

            <div className='mobile-header'>
                <div className='toggle-btn' onClick={() => setSideMenu(!sidmenu)}>
                    <i className="bi bi-chevron-double-right"></i>
                </div>
                <div className='avatar'>
                    <span><Avatar variant='square' src={person} style={{ height: '38px', width: '35px', borderRadius: '5px' }} /></span>
                </div>
            </div>
            {sidmenu && <MobileMenu />}
        </>
    );
};

export default Header;
