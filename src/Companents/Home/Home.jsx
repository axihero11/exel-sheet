import React from 'react'
import "./home.css"
// import AOS from 'aos'


import Register from '../Register/Register'
import logo from "../../imgs/logo.png"
import ForWho from './ForWho/ForWho'
import Courses from './Courses/Courses'

function Home() {

  // AOS.init()
  return (
    <div>
      <div className="home_container">
        <div className="home_head container">
          <div className="navbar">
            <div className="logo">
              <img src={logo} alt="logo img" />
              <h3>Yupiter <br /> <sup>Team</sup></h3>
            </div>
            <div className="time">
              <h4>Qabul <sub>vaqti</sub></h4>
              <p>08 <sup>30</sup> 20 <sup>30</sup></p>
            </div>
            <div className="phone">
              <h4>Telefon <sup>raqam</sup></h4>
              <a href="tel:+998 88 898 07 57">+998 <sup>(88)</sup> 898-07-57</a>
            </div>
          </div>
          <div className="head_main">
            <div className="head_text">
              <h1>Yangicha <span>tizim</span> bilan <br /> Yangicha <span>sifatga</span> erishing</h1>
              <p>Biz bilan ta'limni har doiyimgidan tez va sifatli o'rganing va amalda qo'lang
                Biz bilan ta'limni har doiyimgidan tez va sifatli o'rganing va amalda qo'lang
              </p>
              <button>Ro'yxatdan o'ting</button>
            </div>
          </div>
          <div className="result container11">
            <div className="result_row">
              <div className="result_card" data-aos="zoom-in" data-aos-duration="1000">
                <h3>200+</h3>
                <p>Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Adipisci expedita
                  sed voluptatibus quos illum numquam et</p>
              </div>
              <div className="result_card" data-aos="zoom-in" data-aos-duration="1000">
                <h3>200+</h3>
                <p>Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Adipisci expedita
                  sed voluptatibus quos illum numquam et</p>
              </div>
              <div className="result_card" data-aos="zoom-in" data-aos-duration="1000">
                <h3>200+</h3>
                <p>Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Adipisci expedita
                  sed voluptatibus quos illum numquam et</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ForWho />
      <Courses />
      <Register />
    </div>
  )
}

export default Home
