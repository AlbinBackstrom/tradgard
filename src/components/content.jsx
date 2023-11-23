import React from 'react';
import './content-styles.scss';

// eslint-disable-next-line react/prop-types
function Content({ text, image }) {
  return (
    <div className="container">
      <div className="inner">
        <div className="text">{text}</div>
        <div className="image">
          <img src={image} alt="content" />
        </div>
      </div>
    </div>
  );
}

export default Content;
