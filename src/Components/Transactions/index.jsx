import {
  Amount,
  Container,
  Currency,
  TransactionsDates,
  Div,
  Type,
  TransactionSection,
} from './styles'
import * as React from 'react'
import { useTransactions } from '../../Providers/Transactions'
import { useState } from 'react'
import SimpleDateTime from 'react-simple-timestamp-to-date'
import { useUsers } from '../../Providers/Users'
import USD from '../../Assets/cifrao.png'
import Timestamp from 'react-timestamp'

const Transactions = () => {
  const { historyTransactions } = useTransactions()

  const { userId, usersList } = useUsers()
  const [produtosFiltrados, setProdutosFiltrados] = useState([])
  const [depWit, setDepWit] = useState('deposit')
  const [mes, setMes] = useState('262980000')

  const hoje = Number(new Date()) / 1000

  console.log(historyTransactions)

  const pesquisa = () => {
    const result = historyTransactions.filter(
      (transaction) =>
        transaction.type === depWit && transaction.userId === userId
    )

    setProdutosFiltrados(result)
  }

  return (
    <Container>
      <section>
        <Div>
          <label>Month</label>
          <select onChange={(evento) => setMes(evento.target.value)}>
            <option value='260000000'>Last 30 days</option>
            <option value='520000000'>Last 60 days</option>
            <option value='104000000'>Last 90 days</option>
          </select>
        </Div>

        <Div>
          <label>Type</label>
          <select onChange={(evento) => setDepWit(evento.target.value)}>
            <option value='deposit'>Deposit</option>
            <option value='withdraw'>Withdraw</option>
          </select>
        </Div>

        <Div>
          <label>Currency</label>
          <select>
            <option value='USD'>USD</option>
          </select>
        </Div>

        <button onClick={pesquisa}>Filter</button>
      </section>

      <TransactionSection>
        <ul>
          <li>
            <TransactionsDates>Date/Time</TransactionsDates>
            <Type className='title'>Type</Type>
            <Currency className='title'>Currency</Currency>
            <Amount className='title'>Amount</Amount>
          </li>
          {produtosFiltrados.length > 0
            ? produtosFiltrados.map((transaction, index) => (
                <li key={index}>
                  <TransactionsDates>
                    <SimpleDateTime
                      dateSeparator={'/'}
                      timeSeparator={':'}
                      dateFormat={'DMY'}
                    >
                      {transaction.timestamp}
                    </SimpleDateTime>
                  </TransactionsDates>
                  <Type className='title'>{transaction.type}</Type>
                  <Currency className='title'>{transaction.currency}</Currency>
                  <Amount className='title'>
                    {transaction.amount.toFixed(2)}
                  </Amount>
                </li>
              ))
            : historyTransactions.map(
                (transaction, index) =>
                  transaction.userId === userId && (
                    <li key={index}>
                      <TransactionsDates>
                        <Timestamp date={transaction.timestamp} />
                      </TransactionsDates>
                      <Type className='title'>
                        {transaction.type.toUpperCase()}
                      </Type>
                      <Currency className='title'>
                        {transaction.currency}
                      </Currency>
                      <Amount className='title'>
                        {transaction.amount.toFixed(2)}
                      </Amount>
                    </li>
                  )
              )}
        </ul>
      </TransactionSection>
    </Container>
  )
}

export default Transactions
