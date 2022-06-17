import Toolbar from '@mui/material/Toolbar'
import { Container } from './styles'
import Button from '@mui/material/Button'
import { DashboardContext } from '../../Providers/Dashboard'
import { useContext } from 'react'

const NavigationBar = () => {
  const { chooseTab } = useContext(DashboardContext)

  const handleClick = (event) => {
    chooseTab(event.target.id)
  }

  return (
    <Container>
      <Toolbar className='toolbar'>
        <Button
          color='inherit'
          className='button'
          id='Dashboard'
          onClick={handleClick}
        >
          Recent Activity
        </Button>
        <Button
          color='inherit'
          className='button'
          id='My Bets'
          onClick={handleClick}
        >
          My Bets
        </Button>
        <Button
          color='inherit'
          className='button'
          id='Deposit / Withdraw'
          onClick={handleClick}
        >
          Deposit / Withdraw
        </Button>
        <Button
          color='inherit'
          className='button'
          id='Affiliate'
          onClick={handleClick}
        >
          Affiliate
        </Button>
        <Button
          color='inherit'
          className='button'
          id='Transactions'
          onClick={handleClick}
        >
          Transactions
        </Button>
        <Button
          color='inherit'
          className='button'
          id='Settings'
          onClick={handleClick}
        >
          Settings
        </Button>
      </Toolbar>
    </Container>
  )
}

export default NavigationBar
