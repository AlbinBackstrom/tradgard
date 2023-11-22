import React from 'react';
import './styles.scss';

// eslint-disable-next-line react/prop-types
function Hero({ image, text, subText }) {
  return (
    <div className="hero">
      <img src={image} alt="Hero" className="hero-image" />
      <div className="hero-text">
        <h1>{text}</h1>
        <p>{subText}</p>
      </div>
    </div>
  );
}

export default Hero;
