import React from 'react';

import Directory from '../../components/directory/directory.component'
import hero from '../../assets/hero.jpg';
import './homepage.styles.scss';

const homepage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <img class="hero__image" src={hero} alt="scotty clothing" />
        <span className="hero__header">Scotty Clothing</span>
      </div>
      <Directory />
    </div>
  )
}

export default homepage
