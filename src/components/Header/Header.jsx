import React, { useRef } from 'react'
import './Header.css'
import menu_bar from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

function Header() {

    const menuRef = useRef();
    function openMenu() {
        menuRef.current.style.right = '0';
    }
    function closeMenu() {
        menuRef.current.style.right = '-200px';
    }

     return(
        <div className="head-section" id='home'>
            <h1>My Portfolio</h1>
            <img src={menu_bar} alt="Menu Icon" className='menu_open' onClick={openMenu} />
            <ul ref={menuRef} className='menu-part'>
                <img src={menu_close} alt="Close Icon" className='menu_close' onClick={closeMenu} />
                <li><a href="#home" className='route-link' onClick={closeMenu}>Home</a></li>
                <li><a href="#about-me" className='route-link' onClick={closeMenu}>About Me</a></li>
            </ul>
            <a href="#lets-connect" className='route-link'><div className="connect-now">Let's Connect</div></a>
        </div>
     )
}

export default Header