import { Container, ContainerText } from './styles'
import imgCoin1 from '../../Assets/bannerAnimations/coin-1.png'
import imgCoin2 from '../../Assets/bannerAnimations/coin-2.png'
import imgCoin3 from '../../Assets/bannerAnimations/coin-3.png'
import imgCoin4 from '../../Assets/bannerAnimations/coin-4.png'
import imgWinnerCup from '../../Assets/bannerAnimations/winner-cup.png'
import HomeStatistics from '../HomeStatistics'

const BannerHome = () => {
  return (
    <Container>
      <img src={imgCoin1} className='coin1' alt='coin1' />
      <img src={imgCoin2} className='coin2' alt='coin2' />
      <img src={imgCoin3} className='coin3-1' alt='coin3-1' />
      <img src={imgCoin3} className='coin3-2' alt='coin3-2' />
      <img src={imgCoin4} className='coin4' alt='coin4' />
      <img src={imgWinnerCup} className='trophy' alt='trophy' />
      <ContainerText>
        <h2>Bet & Win Today!</h2>
        <h1>Sports Escrow Bets Peer 2 Peer</h1>
        <h3>
          The fastest and easiest way to bet on your favorite Soccer team,
          Choose on which team to bet and win!
        </h3>
        <span>
          <button>Get Start Now</button>
        </span>
      </ContainerText>

      <HomeStatistics />
    </Container>
  )
}

export default BannerHome
