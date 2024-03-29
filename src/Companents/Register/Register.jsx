import React from 'react'
import "./register.css"

import { useState, useEffect } from 'react';
import axios from 'axios'

import MasketInput from "react-text-mask"
import gif from "../../imgs/loading1.png"
import CoursesIng from './CoursesIng';
import java from "../../imgs/java.png"


function Register() {
  const [name, setName] = useState('');
  const [sureName, setSureName] = useState('');
  const [number, setNumber] = useState('');
  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // useState for course

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Loadingni yoqish
    const currentDate = new Date(); // Bugungi sana
    const formattedDate = formatDate(currentDate); // Sana formatini o'zgartirish
    setDate(formattedDate);


    const data = {
      ISM: name,
      FAMILIYASI: sureName,
      NOMERI: number,
      KURSI: course,
      QABUL_SANASI: formattedDate, // Formatlangan sana
      JAVOB: 'NEW',
    };
    axios
      .post('https://sheet.best/api/sheets/09f434cc-cb7d-4bdc-89e5-7994af645e36', data)
      .then((response) => {
        console.log(response, data);
        setName('');
        setSureName('');
        setNumber('');
        setCourse('');
        setDate('');
        setIsLoading(false); // Loadingni o'chirish
      })
      .catch((error) => {
        alert('Internetga ulanmagansiz', error);
        setIsLoading(false);
      });
  };


  // Sana formatini o'zgartirish uchun yordamchi funktsiya
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0'); // Kun
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Oy (0-based indeks)
    const year = date.getFullYear(); // Yil
    return `${day}-${month}-${year}`; // Formatlangan sana
  };
  return (
    <div>
      <div className="form1">
        <div style={{ display: isLoading ? 'flex' : 'none' }} className="loading1">
          <img src={gif} alt="" />
        </div>
        <form autoComplete='off' className='form-group' onSubmit={handleSubmit}>
          <h1 className='heading'>Kurs texnalogiyalari</h1>
          <div className="radio-container">
            <div className="radio-section">
              <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="100" className="radio-item">
                <input type="radio" id='eng' name='course' onChange={(e) => setCourse(e.target.value)} value={'Math'}  />
                <label htmlFor="eng">English</label>
              </div>
              <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="200" className='radio-item'>
                <input type="radio" id='comp' name='course' onChange={(e) => setCourse(e.target.value)} value={'Komp_Sav'}  />
                <label htmlFor="comp">Kompyuter Savadxonligi</label>
              </div>
              <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="300" className='radio-item'>
                <input type="radio" id='front' name='course' onChange={(e) => setCourse(e.target.value)} value={'Frontend'}  />
                <label htmlFor="front">Frontend</label>
              </div>
              <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="400" className='radio-item'>
                <input type="radio" id='back' name='course' onChange={(e) => setCourse(e.target.value)} value={'Backend'}  />
                <label htmlFor="back">Backend</label>
              </div>
              <div data-aos="fade-right"  data-aos-duration="700" data-aos-delay="500" className='radio-item'>
                <input type="radio" id='grafic' name='course' onChange={(e) => setCourse(e.target.value)} value={'Grafic Desing'}  />
                <label htmlFor="grafic">Grafic Desing</label>
              </div>
            </div>
            <CoursesIng course={course} />
          </div>
          <div className="text-section">
            <div className="inputBox">
              <input className='input'  onChange={(e) => setName(e.target.value)} value={name} type="text" required='required' />
              <span>Ism</span>
            </div>
            <div className="inputBox">
              <input className='input' onChange={(e) => setSureName(e.target.value)} value={sureName} type="text" required='required' />
              <span>Familiya</span>
            </div>
            <div className="inputBox">
              <MasketInput className='input' onChange={(e) => setNumber(e.target.value)} value={number} type="text" required='required' mask={['(', /[1-9]/, /\d/, ')', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]} guide={true} ></MasketInput>
              <span>Telefon Raqam</span>
            </div>
            <div className='button1'>
              <button type='submit' className='btn btn-primary'>Jo'natish</button>
            </div>
          </div>
        </form>
      </div>
      <div className="footer-bottom">
        <div className="border-footer"></div>
        <strong>2022 Yupiter Team. All rights reserved</strong>
      </div>
    </div>
  )
}
export default Register
