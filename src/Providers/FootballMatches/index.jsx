import { createContext, useContext, useEffect, useState } from 'react'
import { api, apiSports } from '../../Services/api'
import { useUserBets } from '../UserBets'
import { useUsers } from '../Users'

export const FootballMatchesContext = createContext()

export const FootballMatchesProvider = ({ children }) => {
  const [matches, setMatches] = useState([])
  const { userToken } = useUsers()

  const loadMatches = () => {
    console.log('Atualizando partidas...')

    // apiSports
    //   .get('/fixtures?live=all', {
    //     headers: {
    //       'x-rapidapi-key': 'b3ec3a430dc5869b037dd6de6da241c6',
    //     },
    //   })
    //   .then((res) => {
    //     setMatches(res.data.response)
    //   })
    //   .catch((err) => console.log(err))

    // console.log(matches)

    api
      .get('/matches', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => setMatches(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    loadMatches()
  }, [])

  useEffect(() => {}, [matches])

  // setInterval(loadMatches, 5 * 60 * 1000)

  return (
    <FootballMatchesContext.Provider value={{ matches, loadMatches }}>
      {children}
    </FootballMatchesContext.Provider>
  )
}

export const useFootballMatches = () => useContext(FootballMatchesContext)
