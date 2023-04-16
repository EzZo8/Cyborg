import './Buttons.css'

const PrimaryBtn = (props) => {
  return (
    <div className='button primary-btn'>
      <a href='/#'>{props.children}</a>
    </div>
  )
}

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

