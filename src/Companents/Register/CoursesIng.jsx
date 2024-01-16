import React from 'react'
// imports Image
import word from "../../imgs/word.png"
import exel from "../../imgs/exel.png"
import point from "../../imgs/point.png"
import html from "../../imgs/html.png"
import css from "../../imgs/css.png"
import js from "../../imgs/js.png"
import ai from "../../imgs/ai.png"
import cr from "../../imgs/Cr.png"
import ps from "../../imgs/ps.png"
import py from "../../imgs/py.png"
import node from "../../imgs/node.png"
import java from "../../imgs/java.png"



function CoursesIng({ course }) {
  return (
    <div className="radio-imgs-container">
      <div className="imgs-item">
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="300" id={course == "Math" ? 'selected1' : ''} className="img-box">
          <h1>IELTS</h1>
        </div>
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="300" id={course == "Math" ? 'selected1' : ''} className="img-box">
          <h1>SEFR</h1>
        </div>
      </div>
      <div className="imgs-item item_cor">
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="100" id={course == "Komp_Sav" ? 'selected1' : ''} className="img-box">
          <img src={word} alt="Word" />
        </div>
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="200" id={course == "Komp_Sav" ? 'selected1' : ''} className="img-box">
          <img src={exel} alt="Word" />
        </div>
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="300" id={course == "Komp_Sav" ? 'selected1' : ''} className="img-box">
          <img src={point} alt="Word" />
        </div>
      </div>
      <div className="imgs-item">
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="400" id={course == "Frontend" ? 'selected1' : ''} className="img-box">
          <img src={html} alt="Word" />
        </div>
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="500" id={course == "Frontend" ? 'selected1' : ''} className="img-box">
          <img src={css} alt="Word" />
        </div>
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="600" id={course == "Frontend" ? 'selected1' : ''} className="img-box">
          <img src={js} alt="Word" />
        </div>
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="700" id={course == "Frontend" ? 'selected1' : ''} className="img-box">
          <img src={html} alt="Word" />
        </div>
      </div>
      <div className="imgs-item">
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="800" id={course == "Backend" ? 'selected1' : ''} className="img-box">
          <img src={py} alt="Word" />
        </div>
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="900" id={course == "Backend" ? 'selected1' : ''} className="img-box">
          <img src={node} alt="Word" />
        </div>
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="1000" id={course == "Backend" ? 'selected1' : ''} className="img-box">
          <img src={java} alt="Word" />
        </div>
      </div>
      <div className="imgs-item">
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="1100" id={course == "Grafic Desing" ? 'selected1' : ''} className="img-box">
          <img src={ps} alt="Word" />
        </div>
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="1200" id={course == "Grafic Desing" ? 'selected1' : ''} className="img-box">
          <img src={ai} alt="Word" />
        </div>
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="1400" id={course == "Grafic Desing" ? 'selected1' : ''} className="img-box">
          <img src={cr} alt="Word" />
        </div>
      </div>
      <div className="imgs-item">
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="1500" id={course == "English" ? 'selected1' : ''} className="img-box">
          <img src={ps} alt="Word" />
        </div>
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="1600" id={course == "English" ? 'selected1' : ''} className="img-box">
          <img src={ai} alt="Word" />
        </div>
        <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="1700" id={course == "English" ? 'selected1' : ''} className="img-box">
          <img src={cr} alt="Word" />
        </div>
      </div>
    </div>
  )
}

export default CoursesIng
