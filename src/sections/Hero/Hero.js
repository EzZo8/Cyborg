import React from 'react';
import './Hero.css';
import { PrimaryBtn } from '../../components';


const Hero = () => {
    
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'>Welcome to Cybrog</h6>
            <h4 className='hero-title'><em>Browse</em> Our Popular Games Here</h4>
            <PrimaryBtn to="/browse">Browse Now</PrimaryBtn>
            
        </div>

    </div> 
  )
}

export default Hero
