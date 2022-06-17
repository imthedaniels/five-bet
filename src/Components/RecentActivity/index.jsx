import Hot from '../../Assets/hot.png'
import Achievement from '../../Assets/achievements.png'
import Trofeu from '../../Assets/winRatio.png'
import Bitcoin from '../../Assets/bitcoin.png'
import Tether from '../../Assets/tether.png'
import {
  SectionRates,
  Card,
  Statistic,
  Date,
  Type,
  Currency,
  Amount,
  Container,
} from './styles'
import { useTransactions } from '../../Providers/Transactions'
import Timestamp from 'react-timestamp'
import { useUserBets } from '../../Providers/UserBets'
import { useUsers } from '../../Providers/Users'
import formatCurrency from '../../Utils/formatCurrency.js'

const RecentActivity = () => {
  const { historyTransactions } = useTransactions()
  const { userBetsList } = useUserBets()
  const { userId, affiliateTotal } = useUsers()

  console.log(historyTransactions)

  const bets = userBetsList.filter((item) => item.userId === userId)

  const betsWon = bets.filter((item) => item.result === 'win')

  const betsWonPercentage = (betsWon.length / bets.length) * 100

  return (
    <Container>
      <SectionRates>
        <Card>
          <img src={Hot} alt='Hot' />
          <Statistic>
            {bets.length}
            <br />
            <span>Total Bets</span>
          </Statistic>
        </Card>
        <Card>
          <img src={Trofeu} alt='Hot' />
          <Statistic>
            {bets.length > 0 ? betsWonPercentage.toFixed(2) : 0}
            %
            <br />
            <span>Win Ratio</span>
          </Statistic>
        </Card>
        <Card>
          <img src={Achievement} alt='Hot' />
          <Statistic>
            {affiliateTotal()}
            <br />
            <span>Referrals</span>
          </Statistic>
        </Card>
      </SectionRates>

      <section>
        <ul>
          <li className='header'>
            <h2>Recent Activity</h2>
          </li>
          <li>
            <Date>Date/Time</Date>
            <Type className='title'>Type</Type>
            <Currency className='title'>Currency</Currency>
            <Amount className='title'>Amount</Amount>
          </li>

          {historyTransactions
            .map((trans) => {
              return (
                <li>
                  <Date>
                    <Timestamp date={trans.timestamp} />
                  </Date>
                  <Type>{trans.type.toUpperCase()}</Type>
                  <Currency>{trans.currency}</Currency>
                  <Amount>{trans.amount.toFixed(2)}</Amount>
                </li>
              )
            })
            .reverse()}
        </ul>
      </section>
    </Container>
  )
}

export default RecentActivity
