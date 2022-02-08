import React, { useState } from 'react';
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom';
const Sidebar = () => {
    const [show, setShow] = useState(false)
    const [showSubmenu, setShowSubmenu] = useState(false)
    return (
        <div className={`side-Menu ${show ? 'inactive' : ''}`}>
            <div className='side-top'>
                <div className='collapse-btn' onClick={() => setShow(!show)}>
                    <i className="bi bi-chevron-double-right"></i>
                </div>
            </div>
            <div className='side-options'>
                <ul>
                    <li className='py-2'>
                        <i className='bi bi-palette2 pr-2'></i>
                        {show ? '' : <Link className='link' to='#'>Dashboard  <span className='float-right'><i className="bi bi-chevron-right"></i></span></Link>}
                    </li>
                    <li className='py-2'>
                        <i className='bi bi-toggles pr-2'></i>
                        {show ? '' : <Link className='link' to='#'>Layout Builder  <span className='float-right'><i className="bi bi-chevron-right"></i></span></Link>}
                    </li>
                    <div className='divider-space py-3'></div>
                    {show ? '' : <div className='txt'><p>Crafted</p> </div>}
                    <li className='py-2'>
                        <i className='bi bi-x-diamond-fill pr-2'></i>
                        {show ? '' : <Link className='link' to='#'>Pages  <span className='float-right'><i className="bi bi-chevron-right"></i></span></Link>}
                    </li>
                    <li className='py-2'>
                        <i className='bi bi-person-circle pr-2'></i>
                        {show ? '' : <Link className='link' to='#'>Account  <span className='float-right'><i className="bi bi-chevron-right"></i></span></Link>}
                    </li>
                    <li className='py-2'>
                        <i className='bi bi-x-octagon pr-2'></i>
                        {show ? '' : <Link className='link' to='#'>Error  <span className='float-right'><i className="bi bi-chevron-right"></i></span></Link>}
                    </li>
                    <li className='py-2' >
                        <i className='bi bi-grid-fill pr-2'></i>
                        {show ? '' : <Link className='link' to='#' onClick={() => setShowSubmenu(!showSubmenu)}>Widget<span className='float-right'>{showSubmenu ? <i class="bi bi-chevron-down"></i> : <i className="bi bi-chevron-right"></i>}</span></Link>}
                        {showSubmenu && <ul className={`sub-menu ${show ? 'inactive' : ''}`}>
                            <li> <Link>Lists</Link> </li>
                            <li> <Link>ChLinkrts</Link> </li>
                            <li> <Link>StLinktistics</Link> </li>
                            <li> <Link>Mixed</Link> </li>
                            <li> <NavLink to='/tables'>Tables</NavLink> </li>
                            <li> <Link>Feeds</Link> </li>
                        </ul>}

                    </li>
                    <div className='divider-space py-3'></div>
                    {show ? '' : <div className='txt'><p>Apps</p> </div>}
                    <li className='py-2'>
                        <i className="bi bi-menu-app pr-2"></i>
                        {show ? '' : <Link to={'/chat'} className='link '>Chat  <span className='float-right'><i className="bi bi-chevron-right"></i></span></Link>}
                    </li>
                </ul>
            </div>
        </div >
    )
};

export default Sidebar;
