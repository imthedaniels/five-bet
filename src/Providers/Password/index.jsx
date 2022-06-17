import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../../Services/api'
import { useUsers } from '../Users'

export const PasswordContext = createContext()

export const PasswordProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([])

  const token = JSON.parse(localStorage.getItem('@GambleAPI:token'))
  const loadUsersList = () => {
    api
      .get('/users')
      .then((res) => setUsersList(res.data))
      .catch((err) => console.log(err))
  }

  const changePassword = (id, password) => {
    const user = usersList.find((user) => user.id === id)

    const data = { password: password }

    api
      .patch(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => console.log('Password updated'))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    loadUsersList()
  }, [])

  useEffect(() => {}, [usersList])

  return (
    <PasswordContext.Provider value={{ usersList, changePassword }}>
      {children}
    </PasswordContext.Provider>
  )
}

export const usePassword = () => useContext(PasswordContext)
