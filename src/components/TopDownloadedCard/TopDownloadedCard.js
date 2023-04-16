import './TopDownloadedCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDownload } from '@fortawesome/free-solid-svg-icons';

const TopDownloaded = (props) => {
  return (
    <div className='top-downloaded-card-wrapper'>
      <div className='top-downloaded-card-img-containing'><img src={props.image} alt=''/></div>
      <div className='top-downloaded-card-content'>
                        <h4 className='top-downloaded-card-title'>
                            {props.title}<br/>
                            <span>{props.category}</span>
                        </h4>
                        <ul>
                            <li><FontAwesomeIcon style={{"color":"var(--color-icons)"}} icon={faStar}/> <span>{props.rate}</span> </li>
                            <li><FontAwesomeIcon style={{"color":"var(--color-primary)"}} icon={faDownload}/> <span>{props.downloads}</span> </li>
                        </ul>
       </div>
       <div className='download-icon'><FontAwesomeIcon className='fa-icon' style={{"color":"var(--color-primary)",
                                                               "background":"var(--color-dark)",
                                                               "border-radius":"var(--border-radius-primary",
                                                               "font-size":'20px',
                                                               'padding':'1rem',
                                                               'margin-top':'45%',
                                                               'margin-left':'-10%'
                                                              }
                                                                } icon={faDownload}/></div>
    </div>
  )
}

export default TopDownloaded
