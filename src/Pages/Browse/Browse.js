import './Browse.css'
import { FeaturedGames, TopDownloaded, HowToStart, MostPopularLive} from '../../sections/index';
const Browse = () => {
  return (
    <>
    <div className='big-boss'>
        <FeaturedGames/>
        <TopDownloaded/>
    </div>
      <HowToStart/>
      <MostPopularLive/>
      
    </>
  )
}

export default Browse
