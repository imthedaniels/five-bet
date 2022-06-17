import { createContext, useContext, useEffect, useState } from 'react'
import { api, apiSports } from '../../Services/api'
import { useTransactions } from '../Transactions'
import { useUsers } from '../Users'

export const UserBetsContext = createContext()

export const UserBetsProvider = ({ children }) => {
  const [userBetsList, setUserBetsList] = useState([])
  const { addBalance, userToken } = useUsers()
  const [odds, setOdds] = useState({})
  const { addBetTransactions } = useTransactions()

  const loadUserBetsList = () => {
    api
      .get('/user_bets')
      .then((res) => {
        setUserBetsList(res.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    loadUserBetsList()
  }, [])

  useEffect(() => {}, [userBetsList])

  const addUserBet = (data) => {
    api
      .post('/user_bets', data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((_) => {
        console.log('Bet added in database!')
        loadUserBetsList()
      })
      .catch((err) => console.log(err))
  }

  const verifyResult = async (fixture) => {
    // try {
    //   const res = await apiSports.get(`/fixtures?id=${fixture}`, {
    //     headers: {
    //       'x-rapidapi-key': 'b3ec3a430dc5869b037dd6de6da241c6',
    //     },
    //   })

    //   if (res.data.response[0].goals.home === res.data.response[0].goals.away) {
    //     console.log('HOME', res.data.response[0].goals.home)
    //     console.log('HOME', res.data.response[0].goals.away)
    //     return 'draw'
    //   } else if (
    //     res.data.response[0].goals.home > res.data.response[0].goals.away
    //   ) {
    //     console.log(res)
    //     console.log('HOME', res.data.response[0].goals.home)
    //     console.log('HOME', res.data.response[0].goals.away)
    //     return 'home'
    //   } else if (
    //     res.data.response[0].goals.home < res.data.response[0].goals.away
    //   ) {
    //     console.log(res)
    //     console.log('HOME', res.data.response[0].goals.home)
    //     console.log('HOME', res.data.response[0].goals.away)
    //     return 'away'
    //   }
    // } catch (error) {
    //   console.log(error)
    // }

    return 'home'
  }

  const updateStatus = async (id, status) => {
    const data = { status: status }

    try {
      const res = await api.patch(`/user_bets/${id}`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })

      loadUserBetsList()
      console.log('Status Atualizado')
    } catch (error) {
      console.log(error)
    }
  }

  const updateResult = async (id, result) => {
    const data = { result: result }

    try {
      const res = await api.patch(`/user_bets/${id}`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })

      loadUserBetsList()
      console.log('Resultado Atualizado')
    } catch (error) {
      console.log(error)
    }
  }

  const checkOdd = async (fixture) => {
    // try {
    //   const res = await apiSports.get(`/odds?fixture=${fixture}`, {
    //     headers: {
    //       'x-rapidapi-key': 'b3ec3a430dc5869b037dd6de6da241c6',
    //     },
    //   })
    //   setOdds(res.data.response[0].bookmakers[0].bets[0].values)
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const payBet = async (userId, fixtureId) => {
    const fixtureResult = await verifyResult(fixtureId)

    const selectedBets = userBetsList.filter((userBet) => {
      return (
        userBet.userId === userId &&
        userBet.status === 'open' &&
        userBet.fixture === fixtureId
      )
    })

    let totalAcumulado = 0
    if (selectedBets.length > 0) {
      selectedBets.forEach((e) => {
        if (e.shot === fixtureResult) {
          console.log(
            `O usuário de ID: ${e.userId} ganhou ${e.bet.amount}$ na partida ID ${e.fixture}`
          )
          updateStatus(e.id, 'finished')
          updateResult(e.id, 'win')
          addBetTransactions(e.bet.amount)
          totalAcumulado += e.bet.amount
          console.log('TOTAL ACUMULADO', totalAcumulado)
        } else if (e.shot !== fixtureResult) {
          console.log(
            `Não houveram vencedores ou apostas na partida com ID: ${e.fixture}`
          )
          updateStatus(e.id, 'finished')
          updateResult(e.id, 'loss')
        }
      })
      addBalance(userId, totalAcumulado)
    }
  }

  return (
    <UserBetsContext.Provider
      value={{ userBetsList, addUserBet, payBet, checkOdd, odds }}
    >
      {children}
    </UserBetsContext.Provider>
  )
}

export const useUserBets = () => useContext(UserBetsContext)
