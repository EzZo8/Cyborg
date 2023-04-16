import './FeaturedGamesCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDownload } from '@fortawesome/free-solid-svg-icons'



const FeaturedGamesCard = (props) => {
  return (
    <div className='feat-games-card-wrapper'>
      <div className='img-cotaining-div'><img src = {props.image} className='feat-games-card-img' alt='' /></div>
      <div className='feat-games-card-content'>
                        <h4 className='feat-games-card-title'>
                            {props.title}<br/>
                            <span>{props.category}</span>
                        </h4>
                        <ul>
                            <li><FontAwesomeIcon style={{"color":"var(--color-icons)"}} icon={faStar}/> <span>{props.rate}</span> </li>
                            <li><FontAwesomeIcon style={{"color":"var(--color-primary)"}} icon={faDownload}/> <span>{props.downloads}</span> </li>
                        </ul>
                    </div>
      
    </div>
  )
}

export default FeaturedGamesCard
