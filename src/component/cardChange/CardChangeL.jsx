import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardChange.css'


const CardChangeL = ({ imageSrc, title, text}) => {
  
  return (
    <div className="custom" style={{width:'100%'}}>
      <div className="row g-1">
        <div className="col-4 d-flex justify-center ">
          <img src={imageSrc} className="img-fluid border rounded-circle imagen" alt={title} />
        </div>
        <div className="col-8  d-flex align-items-center letter">
          <div className="card-body ">
            <h3 className="card-title fs-1 mb-2">{title}</h3>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardChangeL;