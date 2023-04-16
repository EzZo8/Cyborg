import { FeaturedGamesCard, SectionHeader } from '../../components'
import './FeaturedGames.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedGamesData from '../../Data/FeaturedGamesData';


const FeaturedGames = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1180 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1180, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const cards = FeaturedGamesData.map(card => { return(
    <FeaturedGamesCard key= {card.id} image = {card.image}  title={card.title}   category={card.category}     rate={card.rate} hours_played={card.hours_played} downloads= {card.downloads}/>
    )
  })


  return (
    <div className='feat-games'>
      <div className='wrapper'>
      <SectionHeader>Featured Games</SectionHeader>
      
      <Carousel 
  className='carousel-featured-games'
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2500}
  transitionDuration={500}
  
>
        {cards}
     

      </Carousel> 

     
      </div>
    </div>
  )
}

export default FeaturedGames
