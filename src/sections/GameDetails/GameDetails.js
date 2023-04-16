import './GameDetails.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDownload, faGamepad, faHardDrive } from '@fortawesome/free-solid-svg-icons';
import { SectionWrapper} from '../../components/index';
import details_01 from '../../assets/images/details-01.jpg';
import details_02 from '../../assets/images/details-02.jpg';
import details_03 from '../../assets/images/details-03.jpg';


const GameDetails = () => {
    return (
    
   <SectionWrapper>
        
          <div className='game-details-top-cards '>
            <div className=' game-details-top-card left-card '>
                <h2>Fortnite</h2>
                <div className='rate-info'><FontAwesomeIcon className='rate-icon' icon={faStar}/><span>4.8</span></div>
                <p>Sandbox</p>
                <div className='download-info'><FontAwesomeIcon className='download-icon' icon={faDownload}/><span>2.3M</span></div>
            </div>
            <div className=' game-details-top-card right-card '>
                <div className='rate-info'><FontAwesomeIcon className='rate-icon' icon={faStar}/><span>4.8</span></div>
                <div className='download-info'><FontAwesomeIcon className='download-icon' icon={faDownload}/><span>2.3M</span></div>
                <div className='storage-info'><FontAwesomeIcon className='storage-icon' icon={faHardDrive}/><span>36GB</span></div>
                <div className='game-info'><FontAwesomeIcon className='game-icon' icon={faGamepad}/><span>Action</span></div>



            </div>
          </div>

          <div className='mid-images'> 
            <div className='img-containing'><img src={details_01} alt=''/></div>
            <div className='img-containing'><img src={details_02}alt=''/></div>
            <div className='img-containing'><img src={details_03}alt=''/></div>
          </div>
          <p className='game-details-paragraph'>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a <span>small contribution via PayPal</span> to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
          <button className='game-details-download-btn'>Download Fortnite Now!</button>
    </SectionWrapper>
    
    
      )
}

export default GameDetails
