import Filter from '../../Components/Filter'
import MainGames from '../../Components/MainGames'
import { useFootballMatches } from '../../Providers/FootballMatches'
import  Banner  from '../../Components/Banner'
import Header from "../../Components/Header";
import { Container } from "./styles";
import Background from "../../Assets/index-bg.png"

const Sports = () => {
  const { matches } = useFootballMatches()

  return (
    <Container>
      <Header />
      <Banner className="teste" text={'Soccer Bet'} imgUrl={Background}/>
      <Filter />
      <ul>
        {matches.length > 0 &&
          matches.map((match) => (
            <li key={match.fixture.id}>
              <MainGames match={match} />
            </li>
          ))}
      </ul>
    </Container>
  )
}

export default Sports
