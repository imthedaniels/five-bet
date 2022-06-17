import React from 'react'
import { useUserBets } from '../../Providers/UserBets'
import { useUsers } from '../../Providers/Users'

const Stopwatch = ({ ms, fixtureId }) => {
  const [time, setTime] = React.useState(ms)
  const [timerOn, setTimerOn] = React.useState(true)
  const { payBet } = useUserBets()
  const { userId } = useUsers()

  if (time === 5400000) {
    payBet(userId, fixtureId)
  }

  React.useEffect(() => {
    let interval = null

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else if (!timerOn) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [timerOn])

  return (
    <>
      {time < 5400000 ? (
        <>
          <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
        </>
      ) : (
        <span>Finished</span>
      )}
    </>
  )
}

export default Stopwatch
