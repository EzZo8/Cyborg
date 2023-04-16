import './Card.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDownload } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
  return (
    
        <div className='most-pop-item'>
                <div className='card-wrapper'>
                   <div className='img-containing'><img className='most-pop-item-img' src={props.image} alt=""/></div>
                    <div className='most-pop-item-content'>
                        <h4 className='most-pop-item-title'>
                            {props.title} <br/>
                            <span>{props.category}</span>
                        </h4>
                        <ul>
                            <li><FontAwesomeIcon style={{"color":"var(--color-icons)"}} icon={faStar}/> <span>{props.rate}</span> </li>
                            <li><FontAwesomeIcon style={{"color":"var(--color-primary)"}} icon={faDownload}/> <span>{props.downloads}</span> </li>
                        </ul>
                    </div>
                </div>
            </div>
    
  )
}

export default Card
