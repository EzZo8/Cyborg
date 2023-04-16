import './TopDownloaded.css'
import { TopDownloadedCard, SectionHeader } from '../../components'
import TopDownloadedData from '../../Data/TopDownloadedData'


const TopDownloaded = () => {
  const TopDownloadedCards = TopDownloadedData.map(card => { return(
    <TopDownloadedCard key= {card.id} image = {card.image}  title={card.title}   category={card.category}     rate={card.rate} hours_played={card.hours_played} downloads= {card.downloads}/>
    )
  })
  return (
    <div className='top-downloaded'>
    <div className='wrapper'>
      <SectionHeader className='top-downloaded-header'>Top Downloaded</SectionHeader>
      <div className='top-downloaded-cards'>
      {TopDownloadedCards}
      </div>
      <h5>View All Games</h5>
      </div>
    </div>
  )
}

export default TopDownloaded
