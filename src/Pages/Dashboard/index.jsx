import * as React from 'react'
import Afilliate from '../../Components/Affiliate'
import Deposit from '../../Components/Deposit'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import MyBetsList from '../../Components/MyBetsList'
import NavigationBar from '../../Components/NavigationBar'
import RecentActivity from '../../Components/RecentActivity'
import Settings from '../../Components/Settings'
import SideBar from '../../Components/SideBar'
import Transactions from '../../Components/Transactions'
import Withdraw from '../../Components/Withdraw'
import { DashboardContext } from '../../Providers/Dashboard'
import { Container, DashboardContainer, Div } from './styles'

const Dashboard = () => {
  const { tab } = React.useContext(DashboardContext)

  const renderTab = () => {
    switch (tab) {
      case 'My Bets':
        return <MyBetsList />
      case 'Deposit / Withdraw':
        return (
          <Div>
            <Deposit />
            <Withdraw />
          </Div>
        )
      case 'Affiliate':
        return <Afilliate />
      case 'Transactions':
        return <Transactions />
      case 'Settings':
        return <Settings />
      default:
        return <RecentActivity />
    }
  }

  return (
    <Container>
      <Header />
      <NavigationBar />
      <DashboardContainer>
        <SideBar />
        <div>{renderTab()}</div>
      </DashboardContainer>
      <Footer />
    </Container>
  )
}

export default Dashboard
