import { Card, CardImg, CardTxt, Container } from './styles'
import imgCoins from '../../Assets/coins.png'
import imgUsers from '../../Assets/users.png'
import imgTrophy from '../../Assets/trofeu-1.png'

const HomeStatistics = () => {
  return (
    <Container>
      <Card>
        <CardImg src={imgCoins} alt='Coins' />
        <CardTxt>
          <h1>1,304,94 $</h1>
          <p>Paid Out Total</p>
        </CardTxt>
      </Card>
      <Card>
        <CardImg src={imgTrophy} alt='Trophy' />
        <CardTxt>
          <h1>2,283</h1>
          <p>Winners</p>
        </CardTxt>
      </Card>
      <Card>
        <CardImg src={imgUsers} alt='Users' />
        <CardTxt>
          <h1>129</h1>
          <p>Players online</p>
        </CardTxt>
      </Card>
    </Container>
  )
}

export default HomeStatistics
