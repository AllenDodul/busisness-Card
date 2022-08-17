import React from 'react';
import './style';

const Card = () =>{
  return(
    <div className="card">
      <img
        className="profile-picture" 
        src="https://i.ibb.co/s6fxGsc/images-66.jpg"
        alt="profile-picture"
      />
      <div className="info">
        <div className="title-info">
          <h3>Allen</h3>
          <p>Front-end Engineer</p>
        </div>
        <div className="about-info">
          <div className="about-1">
            <h4>About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div className="about-2">
            <h4>About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card;