import React from "react";
import './Support.css';
import images from '../../constants/images';

const Support = () => {
    return (
        <section className="support py-6" id="support">
            <div className="container">
                <div className="section-title bg-dark">
                    <h2 className="text-upper text-white text-center">updates & support</h2>
                </div>
                <div className="support-content grid py-6 text-center">
                    <div className="support-content-left" data-aos = "fade-right">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Nihil placeat ad aperiam dolore temporibus fugit? Totam sequi, 
                        consectetur incidunt nulla consequuntur quidem officia nisi deserunt?</p>
                        <p className="text mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ut doloribus asperiores corporis natus quo exercitationem culpa optio maiores!</p>
                        <a href="#" className="btn btn-red">support center</a>
                    </div>
                    <div className="support-content-right" data-aos = "fade-left">
                        <img src={images.header_device_img} alt=""  className="mx-auto"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support;
