import React, { useState } from 'react'
import { useFootballMatches } from '../../Providers/FootballMatches'
import { useUserBets } from '../../Providers/UserBets'
import { useUsers } from '../../Providers/Users'
import MyBets from '../MyBets'
import NavMyBets from '../NavMyBets'
import { Ul } from './styles'

const MyBetsList = () => {
  const { matches } = useFootballMatches()
  const { userBetsList } = useUserBets()

  const [filteredList, setFilteredList] = useState([])
  const { userId } = useUsers()

  setTimeout(() => {
    handleBets('open')
  }, '100')

  const handleBets = (status) => {
    setFilteredList([])
    const selectedBets = userBetsList.filter(
      (item) => item.status === status && item.userId === userId
    )

    const tempArray = []

    selectedBets.forEach((bet) => {
      const match = matches.find((match) => match.fixture.id === bet.fixture)
      match.shot = bet.shot
      match.odd = bet.bet.odd
      match.amount = bet.bet.amount
      console.log(bet)
      tempArray.push(match)
    })

    setFilteredList(tempArray)
  }

  const handleFinishedBets = (status) => {
    setFilteredList([])

    const selectedBets = userBetsList.filter(
      (item) => item.status === status && item.userId === userId
    )

    const tempArray = []

    selectedBets.forEach((bet) => {
      const match = matches.find((match) => match.fixture.id === bet.fixture)
      match.shot = bet.shot
      match.odd = bet.bet.odd
      match.amount = bet.bet.amount
      match.special = 'Finished'
      console.log(bet)
      tempArray.push(match)
    })

    setFilteredList(tempArray)
  }

  return (
    <>
      <NavMyBets
        handleBets={handleBets}
        handleFinishedBets={handleFinishedBets}
      />

      <Ul>
        {filteredList.map((match) => (
          <li key={match.fixture.id}>
            <MyBets match={match} />
          </li>
        ))}
      </Ul>
    </>
  )
}

export default MyBetsList
