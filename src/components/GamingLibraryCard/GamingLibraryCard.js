import './GamingLibraryCard.css'

const GamingLibraryCard = (props) => {

  const downloadfunc = (ii) => {
    if(ii === "Downloaded"){

      return(
      <a className='rounded-pill downloadedbtn' href='/#'>Downloaded</a>
      )
    }

    else { return(
      <a className='rounded-pill downloadbtn' href='/#'>Download</a>
      )
    }
  }
  return (
    <div className='gaming-library-card'>
        <ul>
            
            <li className='img-containing'><img classname='gaming-library-card-img'src={props.image} alt=''/></li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>Date Added</h4><span>{props.date_added}</span></li>
            <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
            <li><h4>Currently</h4><span>{props.downloaded}</span></li>
            <li className='main-button'>{downloadfunc(props.downloaded)}</li>
        </ul>
      
    </div>
  )
}

export default GamingLibraryCard
