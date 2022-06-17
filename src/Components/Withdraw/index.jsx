import Input from '../../Components/Input'
import {
  BtnWith,
  ContainerBtn,
  FormInputs,
  ContainerWithdraw,
  Container,
  ContainerCurrentBalance,
  SelectCurrent,
  SpanValues,
} from './styles'
import { useTransactions } from '../../Providers/Transactions'
import { useUsers } from '../../Providers/Users'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const Withdraw = () => {
  const { userId, addBalance } = useUsers()
  const { addTransactions } = useTransactions()

  const token = JSON.parse(localStorage.getItem('@GambleAPI:token'))

  const formWithdrawSchema = yup.object().shape({
    amount: yup.number().required().positive(),
    paymentAddress: yup.string(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formWithdrawSchema),
  })

  const onSubmitFunction = (data) => {
    data.type = 'withdraw'
    data.currency = 'USD'
    data.userId = userId
    data.timestamp = new Date()

    addTransactions(data, token)

    reset()
  }

  return (
    <Container>
      <ContainerWithdraw>
        <h3>Withdraw</h3>
        <p>Choose your payment method and withdrawal amount below.</p>
        <FormInputs onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            value='amount'
            type='text'
            placeholder='Enter Amount'
            register={register}
          />
          <Input
            value='paymentAddress'
            type='text'
            placeholder='Enter Payment Address'
            register={register}
          />

          <ContainerBtn>
            <BtnWith type='submit'>Finalize Withdraw</BtnWith>
          </ContainerBtn>
        </FormInputs>
        <h3>Notice:</h3>
        <p>
          Withdrawals will take up to 2 business days to clear your account, the
          process is done automatically.
        </p>
      </ContainerWithdraw>
    </Container>
  )
}

export default Withdraw
