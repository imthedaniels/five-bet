import { Card2, Container, Content, SectionBottom } from './styles'
import { Main, SectionTop } from './styles'
import { Card } from './styles'
import Timestamp from 'react-timestamp'
import Stopwatch from '../Stopwatch'
import formatCurrency from '../../Utils/formatCurrency.js'

const MyBets = ({ match }) => {
  return (
    <Container>
      {/* <Content> */}
      <SectionTop>
        <button>{match.league.name}</button>
        <span>
          <Timestamp date={match.fixture.timestamp} />
        </span>
      </SectionTop>

      <Main>
        <Card>
          <h2>{match.teams.home.name}</h2>
          <p className='description'>Home</p>
          <img src={match.teams.home.logo} alt={match.teams.home.name} />
        </Card>

        <Card2>
          <p className='time'>
            {match.special ? (
              match.special
            ) : (
              <Stopwatch ms={match.fixture.status.elapsed * 60000} />
            )}
          </p>
          <p className='teams'>
            {match.goals.home} x {match.goals.away}
          </p>
        </Card2>

        <Card>
          <h2>{match.teams.away.name}</h2>
          <p className='description'>Away</p>
          <img src={match.teams.away.logo} alt={match.teams.away.name} />
        </Card>
      </Main>

      <SectionBottom>
        <button>{match.shot.toUpperCase()}</button>
        <button>{formatCurrency(match.amount)}</button>
        <button>{match.odd}</button>
      </SectionBottom>
      {/* </Content> */}
    </Container>
  )
}

export default MyBets
