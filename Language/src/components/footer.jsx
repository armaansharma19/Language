import React from 'react';
import './Footer.css'; // Assuming Footer.css contains additional styles

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Correct imports for brand icons

export default function Footer() {
  return (
    <> 
  
   <div id='second'> 

    <div className="centered-links">
      <a href="/route1"><FontAwesomeIcon icon={faFacebook} className="footer-icon" /></a>
      <a href="/route2"><FontAwesomeIcon icon={faInstagram} className="footer-icon" /></a>
      <a href="/route3"><FontAwesomeIcon icon={faGithub} className="footer-icon" /></a>
      <a href="/route4"><FontAwesomeIcon icon={faLinkedin} className="footer-icon" /></a>
      <a href="/route5"><FontAwesomeIcon icon={faTwitter} className="footer-icon" /></a>

    </div>

  <p> ©️ 2024 FlashCard.io, All rights reserved</p>

  </div>

    </>
  );
}
