import { useFootballMatches } from '../../Providers/FootballMatches'
import { Container, Content } from './styles'

const Filter = () => {
  const { loadMatches } = useFootballMatches()

  return (
    <Container>
      <h1>All Soccer Bets</h1>
      <Content>
        <input placeholder='Search by Team Name' />
        <input placeholder='Search by League Name' />
        <input type='date' />
      </Content>
    </Container>
  )
}

export default Filter
