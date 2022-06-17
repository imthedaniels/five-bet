import Input from '../../Components/Input'
import {
  FormInputs,
  ContainerDeposit,
  Container,
  LinksForm,
  SelectContainer,
  ContainerAmount,
  BtnWith,
  ContainerBtn,
} from './styles'
import { CurrencyDollar } from 'phosphor-react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTransactions } from '../../Providers/Transactions'
import { useUsers } from '../../Providers/Users'

const Deposit = () => {
  const token = JSON.parse(localStorage.getItem('@GambleAPI:token'))
  const { userId, addBalance } = useUsers()

  const { addTransactions } = useTransactions()

  const formDepositSchema = yup.object().shape({
    amount: yup.number().required().positive(),
    paymentType: yup.string(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formDepositSchema),
  })

  const onSubmitFunction = (data) => {
    data.type = 'deposit'
    data.currency = 'USD'
    data.userId = userId
    data.timestamp = new Date()

    addTransactions(data, token, addBalance)

    reset()
  }

  return (
    <Container>
      <ContainerDeposit>
        <h3>Deposit</h3>
        <p>Choose your payment method and deposit amount below.</p>
        <FormInputs onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            value='amount'
            type='text'
            placeholder='Enter Amount'
            register={register}
          />
          <SelectContainer {...register('paymentType')}>
            <option value='PayPal'>PayPal</option>
            <option value='Pix'>Pix</option>
            <option value='Visa'>Visa</option>
            <option value='Mastercard'>Mastercard</option>
            <option value='Pagseguro'>Pagseguro</option>
            <option value='Hipercard'>Hipercard</option>
          </SelectContainer>
          <LinksForm>
            <ContainerBtn>
              <BtnWith type='submit'>Send Deposit</BtnWith>
            </ContainerBtn>
          </LinksForm>
        </FormInputs>
        <h3>Notice:</h3>
        <p>
          Deposits will take up to 2 business days to clear your account, the
          process is done automatically.
        </p>
      </ContainerDeposit>
    </Container>
  )
}

export default Deposit
