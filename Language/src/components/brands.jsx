import React from 'react';
import './Brands.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStripe, faWix, faNode, faZhihu, faWodu, faVnv } from '@fortawesome/free-brands-svg-icons'; // Correct imports for brand icons

export default function Brands() { 
  return (
    <div>
      <div className='brand'>
        <h1> 
          <FontAwesomeIcon icon={faStripe} />
          <FontAwesomeIcon icon={faWix} />
          <FontAwesomeIcon icon={faNode} />
          <FontAwesomeIcon icon={faZhihu} />
          <FontAwesomeIcon icon={faWodu} />
          <FontAwesomeIcon icon={faVnv} />
        </h1>
      </div>
    </div>
  );
}
