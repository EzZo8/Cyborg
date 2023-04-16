import './Buttons.css'
import { Link } from 'react-router-dom';
const PrimaryBtn = (props) => {
  return (
    <div className='button primary-btn'>
      <Link to={props.href}>{props.children}</Link>
    </div>
  );
};

const SecondaryBtn = (props) => {
  return (
    <div className='button secondary-btn'>
      <a href='/#'>{props.children}</a>
    </div>
  )
}
const SmallPrimaryBtn = (props) =>{
  return (
    <div className='small-button'>
      <a href='/#'>{props.children}</a>
    </div>
  )
}
export default PrimaryBtn;
export {SecondaryBtn, SmallPrimaryBtn};

