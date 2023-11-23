import React from 'react';
import './footer-stryles.scss';

function Footer() {
  return (
    <div className="footer-container">
      <div className="wrapper">
        <div>
          <span>Ring mig på </span>
          <a href="tel:+00000000">00000000</a>
        </div>
        <div>
          <span>Skicka ett </span>
          <a href="mailto:someone@yoursite.com">email</a>

        </div>
      </div>
    </div>
  );
}

export default Footer;
