import React from 'react';
import './Footer.css';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return(
        <footer className="footer bg-dark text-white py-6" id="footer">
            <div className="container">
                <div className="footer-content text-center">
                    <div className="footer-item-group grid">
                        <div className="footer-item">
                            <h3 className="footer-item-title">Portfolio</h3>
                            <ul className="footer-item-links">
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">Branding & Identity</a></li>
                                <li><a href="#">Mobile Design</a></li>
                                <li><a href="#">Print</a></li>
                                <li><a href="#">User Interface</a></li>
                            </ul>
                        </div>

                        <div className="footer-item">
                            <h3 className="footer-item-title">about</h3>
                            <ul className="footer-item-links">
                                <li><a href="#">The Company</a></li>
                                <li><a href="#">History</a></li>
                                <li><a href="#">Mobile Design</a></li>
                                <li><a href="#">Vision</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-item">
                            <h3 className="footer-item-title">gallery</h3>
                            <ul className="footer-item-links">
                                <li><a href="#">Flicker</a></li>
                                <li><a href="#">Picase</a></li>
                                <li><a href="#">iStockPhoto</a></li>
                                <li><a href="#">PhotoDune</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-item">
                            <h3 className="footer-item-title">contact</h3>
                            <ul className="footer-item-links">
                                <li><a href="#">Basic info</a></li>
                                <li><a href="#">Map</a></li>
                                <li><a href="#">Contact Form</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-social icons flex flex-center">
                        <a href="https://facebook.com" className='bg-red flex flex-center'><FaFacebook /> </a>
                        <a href="https://twitter.com" className='bg-red flex flex-center'><FaTwitter /> </a>
                        <a href="https://instagram.com" className='bg-red flex flex-center'><FaInstagram /> </a>
                        <a href="https://linkedin.com" className='bg-red flex flex-center'><FaLinkedin /> </a>
                    </div>
                    <div className="footer-bottom-text">
                        <p className="text fs-6">Copyright &copy; 2024 By Ahmad Mustafa</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
