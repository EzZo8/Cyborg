import { SectionHeader, SectionWrapper,OtherRelatedGamesCard } from '../../components'
import './OtherRelatedGames.css'
import OtherRelatedGamesData from '../../Data/OtherRelatedGamesData'


const OtherRelatedGames = () => {
   const OtherRelatedGamesCards = OtherRelatedGamesData.map(card => { return (
    <OtherRelatedGamesCard key={card.id} title={card.title} category={card.category} image={card.image} rate={card.rate} downloads={card.downloads}/>
   )})

  return (
    <SectionWrapper>
        <SectionHeader>Other Related Games</SectionHeader>
        <div className='other-related-games-cards'>
            {OtherRelatedGamesCards}
        </div>




    </SectionWrapper>
      
  )
}

export default OtherRelatedGames
