import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './MobileMenu.css'
const MobileMenu = () => {
    const [showSubmenu, setShowSubmenu] = useState(false)
    const [show, setShow] = useState(false)
    return (
        <div className={`mobile-menu ${show ? 'mobile' : ''}`}>
            <div className='mobile-menu-area'>
                <div className='mobile-toggle-btn' onClick={() => setShow(!show)}>
                    <i className="bi bi-chevron-double-right"></i>
                </div>
                <div className='mobile-menu-options'>
                    <ul>
                        <li> <Link >Dashboard</Link> <span className='float-right'><i className="bi bi-chevron-right"></i></span></li>
                        <li> <Link>Layout Builder</Link><span className='float-right'><i className="bi bi-chevron-right"></i></span> </li>
                        <li> <Link>Pages</Link><span className='float-right'><i className="bi bi-chevron-right"></i></span> </li>
                        <li> <Link>Account</Link> <span className='float-right'><i className="bi bi-chevron-right"></i></span></li>
                        <li> <Link>Error</Link> <span className='float-right'><i className="bi bi-chevron-right"></i></span></li>
                        <li> <Link className='link' onClick={() => setShowSubmenu(!showSubmenu)}>Widget</Link><span className='float-right'>{showSubmenu ? <i class="bi bi-chevron-down"></i> : <i className="bi bi-chevron-right"></i>}</span>
                            {showSubmenu && <ul className='sub-menu'>
                                <li className='sub-menu-link'><Link>Lists</Link></li>
                                <li className='sub-menu-link'><Link>Chrts</Link></li>
                                <li className='sub-menu-link'><Link>Statistics</Link></li>
                                <li className='sub-menu-link'><Link>Mixed</Link></li>
                                <li className='sub-menu-link'><NavLink to={'/tables'}>Tables</NavLink></li>
                                <li className='sub-menu-link'><Link>Feeds</Link></li>
                            </ul>}
                        </li>
                        <li> <Link>Apps</Link><span className='float-right'><i className="bi bi-chevron-right"></i></span> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
