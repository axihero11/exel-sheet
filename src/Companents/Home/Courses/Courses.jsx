import React from 'react'
import "./courses.css"

import logo1 from "../../../imgs/1.svg"


function Courses() {
    return (
        <div>
            <div className="courses_cont">
                <div className="courses container">
                    <h1>Bizning <span>kurslar</span> <br />nimalardan iborat?</h1>
                    <div className="courses_row">
                        <div className="courses_box" data-aos="fade-right" data-aos-duration="1000">
                            <div className="logo_img">
                                <img src={logo1} alt="" />
                                <h4>Engliz tili <br /> (<span>IELTS, SEFR</span>)</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nisi perferendis pariatur culpa explicabo aliquid quae.</p>
                        </div>
                        <div className="courses_box" data-aos="fade-up" data-aos-duration="1000">
                            <div className="logo_img">
                                <img src={logo1} alt="" />
                                <h4>So'zlashuv clubi <br />(<span>Speaking club</span> )</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nisi perferendis pariatur culpa explicabo aliquid quae.</p>
                        </div>
                        <div className="courses_box" data-aos="fade-left" data-aos-duration="1000">
                            <div className="logo_img">
                                <img src={logo1} alt="" />
                                <h4>Kompyuter Savdxonligi (<span>Word, Exsel, Power Point</span> )</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nisi perferendis pariatur culpa explicabo aliquid quae.</p>
                        </div>
                        <div className="courses_box" data-aos="fade-right" data-aos-duration="1000">
                            <div className="logo_img">
                                <img src={logo1} alt="" />
                                <h4>Web saytlar yaratish <br />(<span>Frontend</span>) </h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nisi perferendis pariatur culpa explicabo aliquid quae.</p>
                        </div>
                        <div className="courses_box" data-aos="fade-up" data-aos-duration="1000">
                            <div className="logo_img">
                                <img src={logo1} alt="" />
                                <h4>Serverlar yaratish <br /> (<span>Backend </span> )</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nisi perferendis pariatur culpa explicabo aliquid quae.</p>
                        </div>
                        <div className="courses_box" data-aos="fade-left" data-aos-duration="1000">
                            <div className="logo_img">
                                <img src={logo1} alt="" />
                                <h4>Turli xildagi dizyanlar <br />( <span>Grafic Dizayner</span> )</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nisi perferendis pariatur culpa explicabo aliquid quae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
