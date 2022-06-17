import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { api, apiSports } from '../../Services/api'
import { toast } from 'react-toastify'
import { DashboardContext } from '../Dashboard'

export const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
  const [afiliatesList, setAfiliatesList] = useState([])
  const [usersList, setUsersList] = useState([])
  const userToken = JSON.parse(localStorage.getItem('@GambleAPI:token'))
  const userId = JSON.parse(localStorage.getItem('@GambleAPI:userId'))
  const [userInfo, setUserInfo] = useState({})
  const { chooseTab } = React.useContext(DashboardContext)
  const [imagem, setImagem] = useState(
    api
      .get(`/users/${userId}`)
      .then((res) => setImagem(res.data.profilePic))
      .catch((err) => console.log(err))
  )

  const getProfilePic = () => {
    if (userToken) {
      api
        .get(`/users/${userId}`)
        .then((res) => setImagem(res.data.profilePic))
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    getProfilePic()
  }, [])

  const history = useHistory()

  const loadUsersList = () => {
    api
      .get('/users')
      .then((res) => setUsersList(res.data))
      .catch((err) => console.log(err))
  }

  const loadUserInfo = () => {
    if (userToken) {
      api
        .get(`/users/${userId}`)
        .then((res) => setUserInfo(res.data))
        .catch((err) => console.log(err))
    }
  }

  const addBalance = (userId, balance) => {
    const newBalance = userInfo.balance + balance
    const data = { balance: newBalance }

    api
      .patch(`/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((_) => {
        setUserInfo({ ...userInfo, balance: newBalance })
        toast.success(`${balance}$ added to your account!`, {
          theme: 'colored',
        })
      })
      .catch((err) => console.log(err))
  }

  const subBalance = (userId, balance) => {
    const newBalance = userInfo.balance - balance
    const data = { balance: newBalance }

    if (userInfo.balance < balance) {
      toast.error('Insufficient balance!', {
        theme: 'colored',
      })
    } else if (userInfo.balance >= balance) {
      api
        .patch(`/users/${userId}`, data, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((_) => {
          setUserInfo({ ...userInfo, balance: newBalance })
          toast.error(`${balance} removed from your account.`, {
            theme: 'colored',
          })
        })
        .catch((err) => console.log(err))
    }
  }

  const registerUser = (
    data,
    referral,
    closeModalRegister,
    openModalLogin,
    setReferralCode
  ) => {
    const users = usersList

    const findReferredbyCode = users.find(
      ({ myAffiliateCode }) => myAffiliateCode === data.referredByCode
    )

    const register = () => {
      api
        .post('/register', data)
        .then((response) => {
          console.log(response.data)
          toast.success('Register successfully done!', {
            theme: 'colored',
          })
          closeModalRegister()
          openModalLogin()
        })
        .catch((error) => {
          console.log(error)
          toast.error('Registration failed. try again!', {
            theme: 'colored',
          })
        })
    }

    referral
      ? findReferredbyCode === undefined
        ? setReferralCode(false)
        : api
            .post('/register', data)
            .then((response) => {
              console.log(response.data)
              toast.success('Register successfully done!', {
                theme: 'colored',
              })
              closeModalRegister()
              openModalLogin()
              afiliateUser(response.data)
            })
            .catch((error) => {
              console.log(error)
              toast.error('Registration failed. try again!', {
                theme: 'colored',
              })
            })
      : register()
  }

  const loginUser = (data, handleChange, closeModalLogin) => {
    api
      .post('/login', data)
      .then((response) => {
        setUserInfo(response.data.user)
        localStorage.setItem(
          '@GambleAPI:token',
          JSON.stringify(response.data.accessToken)
        )
        localStorage.setItem(
          '@GambleAPI:userId',
          JSON.stringify(response.data.user.id)
        )
        history.push('/dashboard')

        handleChange(true)
        closeModalLogin()
        chooseTab('RecentActivity')

        toast.success('Login successfully done!', {
          theme: 'colored',
        })
        console.log(userInfo)
      })

      .catch((error) => {
        console.log(error)
        toast.success('Login successfully done!', {
          theme: 'colored',
        })
      })
  }

  const afiliateUser = (data) => {
    const users = usersList
    const findReferredbyCode = users.find(
      ({ myAffiliateCode }) => myAffiliateCode === data.user.referredByCode
    )

    console.log(data)

    const userAfiliate = {
      timestamp: new Date().getTime(),
      level: 1,
      username: data.user.name,
      email: data.user.email,
      userId: data.user.id,
      affiliateUserId: findReferredbyCode.id,
    }

    console.log(new Date())

    api
      .post(`/affiliates`, userAfiliate, {
        headers: {
          Authorization: `Bearer ${data.accessToken}`,
        },
      })
      .then((_) => console.log('Payment success'))
      .catch((err) => console.log(err))
  }

  const listAfiliates = () => {
    api
      .get('/affiliates')
      .then((res) => setAfiliatesList(res.data))
      .catch((err) => console.log(err))
  }

  const affiliateBalance = () => {
    const qtyAffiliates = afiliatesList.filter(
      (item) => item.affiliateUserId === userId
    )
    const value = qtyAffiliates.length * 30
    console.log(qtyAffiliates)
    return value
  }

  const affiliateTotal = () => {
    const qtyAffiliates = afiliatesList.filter(
      (item) => item.affiliateUserId === userId
    )

    return qtyAffiliates.length
  }

  useEffect(() => {
    loadUsersList()
  }, [])

  useEffect(() => {
    loadUserInfo()
  }, [])

  useEffect(() => {
    listAfiliates()
  }, [])

  useEffect(() => {}, [usersList])
  useEffect(() => {}, [userInfo])

  return (
    <UsersContext.Provider
      value={{
        usersList,
        addBalance,
        userToken,
        registerUser,
        loginUser,
        afiliatesList,
        affiliateBalance,
        userInfo,
        userId,
        subBalance,
        affiliateTotal,
        imagem,
        setImagem,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export const useUsers = () => useContext(UsersContext)
