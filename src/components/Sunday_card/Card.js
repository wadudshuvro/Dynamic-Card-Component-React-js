/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./style.scss";

function Card({cat}) {
    console.log(cat)
  return (
      <div className="card">
        <img src={cat.image} className="card__img"/>
        <div className="card__body">
          <h2 className="card__title">{cat.name}</h2>
          {/* <p className="card__description">{cat.description}</p> */}
          <button className="card__btn">Start Exam</button>
        </div>
      </div>
    );
  }

export default Card;