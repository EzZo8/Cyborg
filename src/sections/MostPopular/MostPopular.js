import './MostPopular.css';
import MostPopularData from '../../Data/MostPopularData';
import {Card , SectionHeader, SectionWrapper} from '../../components/index';


const MostPopular = () => {

 
  const cards = MostPopularData.map(card => { return(
    <Card key= {card.id} image = {card.image}  title={card.title}          category={card.category}     rate={card.rate} downloads={card.downloads}/>
    )
  })

  return (
    <>
       <SectionWrapper>
      <SectionHeader>Most Popular</SectionHeader>
        <div className='most-pop-items'>
              {cards}
        </div>
        </SectionWrapper>
    </>
  )
}

export default MostPopular
