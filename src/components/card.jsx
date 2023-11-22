import React from 'react';
import './card-styles.scss';
// eslint-disable-next-line react/prop-types
function Card({ image, title, link }) {
  return (
    <a href={link}>
      <div className="card-container">
        <div className="image">
          <img src={image} alt="" />
          <h2>{title}</h2>
        </div>

        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eos praesentium, voluptas! Accusamus aliquam aspernatur cum
            cupiditate deleniti eos,
            error est incidunt quas quidem ratione,
            recusandae repudiandae sequi similique sit voluptas.
          </p>
        </div>

      </div>
    </a>
  );
}

export default Card;
