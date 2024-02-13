import React from 'react'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";

import "./ourGroup.css"
import Ai from "./../../../imgs/ai.png"
import img1 from "../../../imgs/umid aka.png"
import img2 from "../../../imgs/ahror.jpg"
import img3 from "../../../imgs/Maruf.jpg"
import img4 from "../../../imgs/Azam.jpg"

function OurGroup() {
    return (
        <div className='group-cont'>
            <div className="container">
                <h1 data-aos="fade-right">Yupiter Team <br /><span style={{ color: "#f9c321" }}>A'zolari</span> </h1>
                <div className="our_scrool">
                    <div className="row_group">
                        <div style={{ transition: "2s" }} data-aos="zoom-out-right" data-aos-duration="800" data-aos-delay="300" className="box_group">
                            <div className="img">
                                <img src={img1} alt="" />
                            </div>
                            <h4>Umid Xaliqov</h4>
                            <p>Direktor & Menter</p>
                            <div className="icons">
                                <FaInstagram />
                                <FaFacebookF />
                                <FaTelegramPlane />
                                <FaYoutube />
                            </div>
                        </div>
                        <div style={{ transition: "2s" }} data-aos="zoom-out-right" data-aos-duration="800" data-aos-delay="400" className="box_group">
                            <div className="img">
                                <img src={img2} alt="" />
                            </div>
                            <h4>Ahror Temirov</h4>
                            <p>Meniger & Menter</p>
                            <div className="icons">
                                <FaInstagram />
                                <FaFacebookF />
                                <FaTelegramPlane />
                                <FaYoutube />
                            </div>
                        </div>
                        <div style={{ transition: "2s" }} data-aos="zoom-out-right" data-aos-duration="800" data-aos-delay="500" className="box_group">
                            <div className="img">
                                <img src={img3} alt="" />
                            </div>
                            <h4>Peter White</h4>
                            <p>manager, Logistic</p>
                            <div className="icons">
                                <FaInstagram />
                                <FaFacebookF />
                                <FaTelegramPlane />
                                <FaYoutube />
                            </div>
                        </div>
                        <div style={{ transition: "2s" }} data-aos="zoom-out-right" data-aos-duration="800" data-aos-delay="600" className="box_group">
                            <div className="img">
                                <img src={img4} alt="" />
                            </div>
                            <h4>Peter White</h4>
                            <p>manager, Logistic</p>
                            <div className="icons">
                                <FaInstagram />
                                <FaFacebookF />
                                <FaTelegramPlane />
                                <FaYoutube />
                            </div>
                        </div>
                        <div style={{ transition: "2s" }} data-aos="zoom-out-right" data-aos-duration="800" data-aos-delay="700" className="box_group">
                            <div className="img">
                                <img src={img4} alt="" />
                            </div>
                            <h4>Peter White</h4>
                            <p>manager, Logistic</p>
                            <div className="icons">
                                <FaInstagram />
                                <FaFacebookF />
                                <FaTelegramPlane />
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurGroup
