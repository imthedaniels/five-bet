import { DashboardProvider } from './Dashboard'
import { FootballMatchesProvider } from './FootballMatches'
import { BuyCryptoProvider } from './BuyCrypto'
import { UserBetsProvider } from './UserBets'
import { UsersProvider } from './Users'
import { TransactionsProvider } from './Transactions'
import { PasswordProvider } from './Password'

const Providers = ({ children }) => {
  return (
    <UsersProvider>
      <FootballMatchesProvider>
        <TransactionsProvider>
          <UserBetsProvider>
            <BuyCryptoProvider>
              <PasswordProvider>
                <DashboardProvider>{children}</DashboardProvider>
              </PasswordProvider>
            </BuyCryptoProvider>
          </UserBetsProvider>
        </TransactionsProvider>
      </FootballMatchesProvider>
    </UsersProvider>
  )
}

export default Providers
