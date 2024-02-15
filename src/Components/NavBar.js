import React from 'react';
import { Link } from "react-scroll";
import Avatar from "../Logo/JohnD.png";

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="bg-transparent fixed top-0 w-full z-10 flex items-center justify-between backdrop-blur-lg">
                <section className='flex items-center'>
                    <img src={Avatar} alt="Avatar" className="h-16 ml-8 w-32 object-contain" /> </section>
                <ul className='flex items-center py-6 text-white mx-7 space-x-4'>
                    <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} className='text-green-600'>Home</Link></li>

                    <li><Link activeClass="" to="body" spy={true} smooth={true} offset={50} duration={500} className='text-green-600'>About</Link></li>

                    <li><Link activeClass="" to="form" spy={true} smooth={true} offset={50} duration={500} className='text-green-600'>Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    );
}


export default Navbar;