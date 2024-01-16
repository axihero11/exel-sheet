import React from 'react'
import "./forwho.css"
import foiz from "../../../imgs/100.png"

function ForWho() {
  return (
    <div className='for_cont'>
      <div className="for container">
        <h1 className="title">Kursda nimalar <br /><span>kafolatlangan</span></h1>
        <div className="for_row">
            <div className="for_box">
                <img src={foiz} alt="" />
                <h5>Kursni 100% bilim bilan yakunlash</h5><br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto obcaecati, velit magni </p>
                <div className="shadow1"></div>
            </div>
            <div className="for_box">
                <img src={foiz} alt="" />
                <h5>Kursni 100% bilim bilan yakunlash</h5><br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto obcaecati, velit magni </p>
                <div className="shadow1"></div>
            </div>
            <div className="for_box">
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
