import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../../Services/api'
import { useUsers } from '../Users'

export const TransactionsContext = createContext([])

export const TransactionsProvider = ({ children }) => {
  const [historyTransactions, setHistoryTransactions] = useState([])
  const { userId, userToken, addBalance, subBalance } = useUsers()

  const loadTransactions = () => {
    api
      .get(`/user_transactions?userId=${userId}`)
      .then((response) => {
        setHistoryTransactions(response.data)
        console.log('oi')
        console.log(historyTransactions)
      })
      .catch((erro) => console.log(erro))
  }

  const addBetTransactions = (amount) => {
    const data = {
      type: 'bet payment',
      currency: 'USD',
      userId: userId,
      timestamp: new Date(),
      amount: amount,
    }

    api
      .post(`/user_transactions/`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        console.log(response)
        loadTransactions()
        toast.success('Successful transaction!', {
          theme: 'colored',
        })
      })
      .catch((error) => {
        console.log(error)
        toast.error('Transaction failed, try again!', {
          theme: 'colored',
        })
      })
  }

  const addTransactions = (data) => {
    if (data.type === 'withdraw') {
      api
        .post(`/user_transactions/`, data, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          console.log(response)
          subBalance(userId, data.amount)
          toast.success('Successful transaction!', {
            theme: 'colored',
          })
          loadTransactions()
        })
        .catch((error) => {
          console.log(error)
          toast.error('Transaction failed, try again!', {
            theme: 'colored',
          })
        })
    } else if (data.type === 'deposit') {
      api
        .post(`/user_transactions/`, data, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          console.log(response)
          addBalance(userId, data.amount)
          toast.success('Successful transaction!', {
            theme: 'colored',
          })
          loadTransactions()
        })
        .catch((error) => {
          console.log(error)
          toast.error('Transaction failed, try again!', {
            theme: 'colored',
          })
        })
    }
  }

  useEffect(() => {}, [historyTransactions])

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ historyTransactions, addTransactions, addBetTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => useContext(TransactionsContext)
