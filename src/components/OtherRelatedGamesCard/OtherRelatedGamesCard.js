import './OtherRelatedGamesCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDownload } from '@fortawesome/free-solid-svg-icons';
const OtherRelatedGamesCard = (props) => {
  return (
    <div className='other-related-games-card'>
      <div className='img-containing'><img src={props.image} alt=''/></div> 
        <div className='other-related-games-content'>
            <h4>{props.title}</h4>
            <div><FontAwesomeIcon  className="FAicons rate-icon" style={{"color":"var(--color-icons)"}} icon={faStar}/> <span>{props.rate}</span></div>
            <p>{props.category}</p>
            <div><FontAwesomeIcon className="FAicons download-icon" style={{"color":"var(--color-primary)"}} icon={faDownload}/> <span>{props.downloads}</span></div>
            
        </div>
    </div>
  )
}

export default OtherRelatedGamesCard
