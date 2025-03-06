import React from 'react';
import { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FaCode , FaRegEnvelope} from 'react-icons/fa';

const Nav = () => {
    const [navbarblur, setnavbarblur] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        }
        else {
            setnavbarblur(false);
        }
    }

    var showMenu = () => {
        
        var ham = document.getElementsByClassName("NavbarLinks");
       

        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = () => {
        
        var ham = document.getElementsByClassName("NavbarLinks");
        ham[0].classList.remove("showNavbar");
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>

            

            <div className='Hamburger' onClick={showMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>

            <ul className='NavbarLinks'>
                <li onClick={hideMenu}>
                    <NavLink to="/akila_portfolio" style={({ isActive }) => ({
                    color: isActive ? '#64ffda' : '#ffffff',
                })}><AiOutlineHome className='text-3xl pr-1'/> Home</NavLink>
                </li>

                <li onClick={hideMenu}>
                    <NavLink to="/Aboutme" style={({ isActive }) => ({
                    color: isActive ? '#64ffda' : '#ffffff',
                })}><BsPerson className='text-3xl pr-1'/> About</NavLink>
                </li>
                <li onClick={hideMenu}>
                    <NavLink to="/Skills" style={({ isActive }) => ({
                    color: isActive ? '#64ffda' : '#ffffff',
                })}><FaCode className='text-3xl pr-1'/> Skills</NavLink>
                </li>
                <li onClick={hideMenu}>
                    <NavLink to="/Experience" style={({ isActive }) => ({
                    color: isActive ? '#64ffda' : '#ffffff',
                })}><CgFileDocument className='text-3xl pr-1' /> Projects </NavLink>
                </li>

                <li onClick={hideMenu}>
                    <NavLink to="/Certification" style={({ isActive }) => ({
                    color: isActive ? '#64ffda' : '#ffffff',
                })}><FaRegEnvelope  className='text-3xl pr-1'/> Certifications </NavLink>
                </li>

                <li onClick={hideMenu}>
                    <NavLink to="/Contact" style={({ isActive }) => ({
                    color: isActive ? '#64ffda' : '#ffffff',
                })}><FaRegEnvelope  className='text-3xl pr-1'/> Contact </NavLink>
                </li>

              

            </ul>
            <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>AS</h1>
        </nav>
    )
}

export default Nav