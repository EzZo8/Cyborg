import './Details.css'
import feature_left from '../../assets/images/feature-left.jpg';
import feature_right from '../../assets/images/feature-right.jpg'
import GameDetails from '../../sections/GameDetails/GameDetails';
import OtherRelatedGames from '../../sections/OtherRelatedGames/OtherRelatedGames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from '@fortawesome/free-solid-svg-icons';

const Details = () => {
  return (
    <>
    <div className='details-top-section d-flex'>
        <div className='left-img-containing'><img className='left-img' src={feature_left} alt=''/></div>
        <div className='right-img-containing'>
          <img className='right-img' src={feature_right} alt=''/>
          <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target='_blank' rel="noreferrer"><FontAwesomeIcon className='play-button' icon={faPlay} /></a>
          </div>
    </div>
    <div className='details-game-title'><h2>Fortnite Details</h2></div>
    <GameDetails/>
    <OtherRelatedGames/>
    </>
  )
}

export default Details
