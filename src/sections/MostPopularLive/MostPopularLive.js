import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  SectionHeader, SectionWrapper } from '../../components'
import './MostPopularLive.css'
import {faEye, faGamepad, faCheck } from '@fortawesome/free-solid-svg-icons'

import stream_01 from '../../assets/images/stream-01.jpg'
import stream_02 from '../../assets/images/stream-02.jpg'
import stream_03 from '../../assets/images/stream-03.jpg'
import stream_04 from '../../assets/images/stream-04.jpg'

import avatar_01 from '../../assets/images/avatar-01.jpg'
import avatar_02 from '../../assets/images/avatar-02.jpg'
import avatar_03 from '../../assets/images/avatar-03.jpg'
import avatar_04 from '../../assets/images/avatar-04.jpg'

const MostPopularLive = () => {
  return (
    <SectionWrapper className='most-pop-live-wrapper'>
      <SectionHeader>Most Popular Live Streams</SectionHeader>
      <div className='most-popular-live-cards'>

        <div className='most-popular-live-card'>
          <div className='stream-img-containing'>
            <img src={stream_01} alt=''/>
            <button className='btn-overlay live-btn'>Live</button>
            <button className='btn-overlay game-btn'><FontAwesomeIcon icon={faGamepad}/> CS-GO</button>
            <button className='btn-overlay views-btn'><FontAwesomeIcon icon={faEye}/> 1.2k</button>
            </div>
          <div className='most-popular-live-card-content'>
          <div className='img-containing'><img src={avatar_01} alt=''/></div>
          <div className='card-text'>
          <FontAwesomeIcon className='check-icon' icon={faCheck}/>
            <span> GangTm</span>
            <h4>Live Streaming Till Morning</h4>
          </div>
          </div>
        </div>

        <div className='most-popular-live-card'>
        <div className='stream-img-containing'>
            <img src={stream_02} alt=''/>
            <button className='btn-overlay live-btn'>Live</button>
            <button className='btn-overlay game-btn'><FontAwesomeIcon icon={faGamepad}/> Fortnite</button>
            <button className='btn-overlay views-btn'><FontAwesomeIcon icon={faEye}/> 2.1k</button>
            </div>
          <div className='most-popular-live-card-content'>
          <div className='img-containing'><img src={avatar_02} alt=''/></div>
          <div className='card-text'>
          <FontAwesomeIcon className='check-icon' icon={faCheck}/>
            <span> Areluwa</span>
            <h4>Maybe Nathej Allnight Chillin'</h4>
          </div>
          </div>
        </div>

        <div className='most-popular-live-card'>
        <div className='stream-img-containing'>
            <img src={stream_03} alt=''/>
            <button className='btn-overlay live-btn'>Live</button>
            <button className='btn-overlay game-btn'><FontAwesomeIcon icon={faGamepad}/> Warfare</button>
            <button className='btn-overlay views-btn'><FontAwesomeIcon icon={faEye}/> 1.2k</button>
            </div>
          <div className='most-popular-live-card-content'>
          <div className='img-containing'><img src={avatar_03} alt=''/></div>
          <div className='card-text'>
          <FontAwesomeIcon className='check-icon' icon={faCheck}/>
            <span> KenganC</span>
            <h4>Just Talking With Fans</h4>
          </div>
          </div>
        </div>
        <div className='most-popular-live-card'>
        <div className='stream-img-containing'>
            <img src={stream_04} alt=''/>
            <button className='btn-overlay live-btn'>Live</button>
            <button className='btn-overlay game-btn'><FontAwesomeIcon icon={faGamepad}/> Warcraft</button>
            <button className='btn-overlay views-btn'><FontAwesomeIcon icon={faEye}/> 3.6k</button>
            </div>
          <div className='most-popular-live-card-content'>
          <div className='img-containing'><img src={avatar_04} alt=''/></div>
          <div className='card-text'>
          <FontAwesomeIcon className='check-icon' icon={faCheck}/>
            <span> LunaMa</span>
            <h4>CS-GO 36 Hours Live Stream</h4>
          </div>
          </div>
        </div>

  
      </div>
    </SectionWrapper>
      
   
  )
}

export default MostPopularLive
