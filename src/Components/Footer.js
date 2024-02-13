import React from 'react'
import JohnD from "../Logo/JohnD.png";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6"
import { FaTripadvisor } from "react-icons/fa";

function Footer() {
    return (
        <div className='Footer'>
            <div className="grid">
                <div className="grid grid-cols-3 bg-green-400 sm:block">
                    <div className="grid1 mx-12 mt-12 w-60">
                        <img src={JohnD} alt="John Deere Logo" className='sm:text-center' />
                    </div>
                    <div className="grid2">
                        <h3 className='pb-0 text-center mt-14 font-serif'>Designed & Developed by:
                            <a href="http://github.com/gilbertmunuotz" target="_blank" rel="noopener noreferrer">Micka</a>
                        </h3>
                    </div>
                    <div className="grid3">
                        <h3 className='text-2xl text-center mt-4 font-serif font-semibold'>Visit Us Here</h3>
                        <div className="flex justify-evenly mt-4 sm:flex items-center">
                            <GrInstagram size={"1.5rem"} className='my-2' />
                            <FaXTwitter size={"1.5rem"} className='my-2' />
                            <FaTripadvisor size={"1.8rem"} className='my-2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer