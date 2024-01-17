import React from "react";
import images from '../../constants/images'
import './Header.css'
import Navbar from "../Navbar/Navbar";
import {FaPaperPlane} from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header flex" id="header">
            <Navbar />
            <div className="container">
                <div className="header-content grid text-center py-6 text-white" data-aos = "fade-right">
                    <div className="header-content-left">
                        <h1 className="text-upper header-title">info-tech app development</h1>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa cupiditate necessitatibus quod provident ipsum dolore possimus esse excepturi, 
                        eveniet incidunt odit facilis amet praesentium.</p>
                        <a href="#" className="btn btn-dark"> <span>view more</span> <FaPaperPlane /> </a>
                    </div>
                    <div className="header-content-right" data-aos =  "fade-left">
                        <img src={images.header_device_img} alt="devices_images" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header