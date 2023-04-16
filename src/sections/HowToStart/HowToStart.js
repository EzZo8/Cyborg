import { SectionHeader } from '../../components'
import './HowToStart.css'
import service_01 from '../../assets/images/service-01.jpg';
import service_02 from '../../assets/images/service-02.jpg';
import service_03 from '../../assets/images/service-03.jpg';
import { Link } from 'react-router-dom';

const HowToStart = () => {
  return (
    <div className='how-to-start'>
      <SectionHeader>How To Start Your Live Stream</SectionHeader>
      <div className='how-to-start-content '>
        <div className='how-to-start-item container'>
          <div className='img-containing'><img src={service_01} alt=''/></div>
          <h5>Go To Your Profile</h5>
          <span>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</span>
        </div>

        <div className='how-to-start-item container'>
          <div className='img-containing'><img src={service_02} alt=''/></div>
          <h5>Live Stream Button</h5>
          <span>If you wish to support us, you can make a</span><Link className='paypal-link'> small contribution via PayPal</Link><span> to info [at] templatemo.com</span>
        </div>

        <div className='how-to-start-item container'>
          <div className='img-containing'><img src={service_03} alt=''/></div>
          <h5>You Are Live</h5>
          <span>You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.</span>
        </div>
      </div>
    </div>
  )
}

export default HowToStart
