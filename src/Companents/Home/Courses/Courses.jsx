import React from 'react'
import "./courses.css"

import logo1 from "../../../imgs/1.webp"
import logo2 from "../../../imgs/2.svg"
import logo3 from "../../../imgs/3.svg"
import logo4 from "../../../imgs/4.svg"
import logo5 from "../../../imgs/5.svg"
import club from "../../../imgs/club.svg"
import logo7 from "../../../imgs/7.svg"


function Courses() {
    return (
        <div>
            <div className="courses_cont">
                <div className="courses container">
                    <h1 data-aos="fade-right">Bizning <span>kurslar</span> <br />nimalardan iborat?</h1>
                    <div className="courses_row">
                        <div className="courses_box" data-aos="fade-right"  data-aos-duration="700" data-aos-delay="500">
                            <div className="logo_img">
                                <img src={logo1} alt="" />
                                <h4>Engliz tili <br /> (<span>IELTS, SEFR</span>)</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nisi perferendis pariatur culpa explicabo aliquid quae.</p>
                        </div>
                        <div className="courses_box" data-aos="fade-right"  data-aos-duration="700" data-aos-delay="500">
                            <div className="logo_img">
                                <img src={club} alt="" />
                                <h4>So'zlashuv clubi <br />(<span>Speaking club</span> )</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nisi perferendis pariatur culpa explicabo aliquid quae.</p>
                        </div>
                        <div className="courses_box" data-aos="fade-right"  data-aos-duration="700" data-aos-delay="500">
                            <div className="logo_img">
                                <img src={logo4} alt="" />
                                <h4>Kompyuter Savdxonligi (<span>Word, Exsel, Power Point</span> )</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nisi perferendis pariatur culpa explicabo aliquid quae.</p>
                        </div>
                        <div className="courses_box" data-aos="fade-right"  data-aos-duration="700" data-aos-delay="500">
                            <div className="logo_img">
                                <img src={logo2} alt="" />
                                <h4>Web saytlar yaratish <br />(<span>Frontend</span>) </h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nisi perferendis pariatur culpa explicabo aliquid quae.</p>
                        </div>
                        <div className="courses_box" data-aos="fade-right"  data-aos-duration="700" data-aos-delay="500">
                            <div className="logo_img">
                                <img src={logo5} alt="" />
                                <h4>Serverlar yaratish <br /> (<span>Backend </span> )</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nisi perferendis pariatur culpa explicabo aliquid quae.</p>
                        </div>
                        <div className="courses_box" data-aos="fade-right"  data-aos-duration="700" data-aos-delay="500">
                            <div className="logo_img">
                                <img src={logo3} alt="" />
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
