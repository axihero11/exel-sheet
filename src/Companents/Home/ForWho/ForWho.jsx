import React from 'react'
import "./forwho.css"
import foiz from "../../../imgs/100.png"
import AOS from "aos"
import { useEffect } from 'react'

function ForWho() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='for_cont'>
      <div className="for container">
        <h1 data-aos="fade-right" data-aos-duration="300" className="title">Kursda nimalar <br /><span>kafolatlangan</span></h1>
        <div className="for_row">
            <div className="for_box" data-aos="fade-right"  data-aos-duration="700" data-aos-delay="200">
                <img src={foiz} alt="" />
                <h5>Kursni 100% bilim bilan yakunlash</h5><br />
                <p>Kursimizda har qanday bola biz tomonimizdan berilayotgan bilimlarni 100% egalashi kafolatlangan.</p>
                <div className="shadow1"></div>
            </div>
            <div className="for_box" data-aos="fade-right"  data-aos-duration="700" data-aos-delay="600">
                <img src={foiz} alt="" />
                <h5>Kursimizni 100% malakali o'qituvchilar olib boriladi</h5><br />
                <p>Barcha o'qituvchilar sertificat va   yetarlicha tajribaga ega bol</p>
                <div className="shadow1"></div>
            </div>
            <div className="for_box" data-aos="fade-right"  data-aos-duration="700" data-aos-delay="1000">
                <img src={foiz} alt="" />
                <h5>Kursni 100% bilim bilan yakunlash</h5><br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto obcaecati, velit magni </p>
                <div className="shadow1"></div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default ForWho
