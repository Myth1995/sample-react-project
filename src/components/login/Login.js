import React from 'react';
import './Login.css';
import formBack from '../../assets/formback.svg';
import back from '../../assets/back.svg';

export default function Login() {
  return(
    <div className="d-flex">
      <div className='col-sm-6 position-relative'>
        <img src={formBack} width={"100%"} alt="form-back" />
        <div className='w-100 h-100 position-absolute top-0'>
        </div>
      </div>
      <div className='col-md-6 position-relative'>
        <img src={back} width={"100%"} alt="form-back" />
        <div className='position-absolute w-100 h-100 top-0 bg-white-color'></div>
      </div>
    </div>
  )
}