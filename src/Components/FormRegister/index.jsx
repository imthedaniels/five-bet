import Input from '../Input'
import {
  Container,
  SelectContainer,
  BtnRegister,
  ContainerBtn,
  ContainerHaveLogin,
  ContainerLogoMedias,
  ContainerBetsAndTotal,
  Bets,
  BtnClosed,
} from './styles'
import {
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
  CaretDown,
  CaretUp,
} from 'phosphor-react'
import signupcounter1 from '../../Assets/signupcountericon1.png'
import signupcounter2 from '../../Assets/signupcountericon2.png'

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { generate } from 'referral-codes'
import { api } from '../../Services/api'
import { useUsers } from '../../Providers/Users'
import Afilliate from '../Affiliate'
import { useUserBets } from '../../Providers/UserBets'
import formatCurrency from '../../Utils/formatCurrency'

const FormRegister = ({ closeModalRegister, openModalLogin }) => {
  const [referral, setReferral] = useState(false)
  const [referralCode, setReferralCode] = useState(true)
  const { registerUser, userId } = useUsers()
  const { userBetsList } = useUserBets()

  const formRegisterSchema = yup.object().shape({
    name: yup
      .string()
      .required('Required field *')
      .min(3, 'Minimum 3 characters *'),
    email: yup.string().required('Required field *').email('Invalid e-mail. *'),
    password: yup
      .string()
      .required('Required field *')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Password must contain at least one capital letter, one number and one special character!'
      ),
    confirmPassword: yup
      .string()
      .required('Required field *')
      .oneOf([yup.ref('password')], 'Password does not match!'),
    referral: yup.string(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formRegisterSchema),
  })

  const onSubmitFunction = (data) => {
    delete data.confirmPassword
    data.myAffiliateCode = generate({
      length: 8,
      count: 1,
    }).toString()

    if (referral) {
      data.balance = 20
    } else {
      data.balance = 0
    }
    registerUser(
      data,
      referral,
      closeModalRegister,
      openModalLogin,
      setReferralCode
    )

    reset()
  }

  return (
    <Container>
      <BtnClosed>
        <button onClick={closeModalRegister}>X</button>
      </BtnClosed>
      <ContainerLogoMedias>
        <span>Register On Bitbetio</span>
        <div>
          <a href='a' alt='Facebook'>
            <FacebookLogo size={32} />
          </a>
          <a href='a' alt='Twitter'>
            <TwitterLogo size={32} />
          </a>
          <a href='a' alt='Linkedin'>
            <LinkedinLogo size={32} />
          </a>
          <a href='a' alt='Instagram'>
            <InstagramLogo size={32} />
          </a>
        </div>
      </ContainerLogoMedias>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          register={register}
          value='name'
          type='text'
          placeholder='Name'
          error={errors.name?.message}
          name='Name'
        />
        <Input
          register={register}
          value='email'
          type='text'
          placeholder='Email'
          error={errors.email?.message}
          name='Email'
        />
        <Input
          register={register}
          value='password'
          type='password'
          placeholder='Password'
          error={errors.password?.message}
          name='Password'
        />
        <Input
          register={register}
          value='confirmPassword'
          type='password'
          placeholder='Confirm Password'
          error={errors.confirmPassword?.message}
          name='Confirm Password'
        />

        <div className='referral'>
          <span
            className='referral'
            onClick={() => (referral ? setReferral(false) : setReferral(true))}
          >
            Have a referral code?{' '}
            {referral ? <CaretUp size={15} /> : <CaretDown size={15} />}
          </span>
          {referral && (
            <Input
              register={register}
              value='referredByCode'
              type='text'
              placeholder='Enter the referral code'
              error={errors.referral?.message}
            />
          )}
          {!referralCode && referral ? (
            <span className='error'>Invalid referral is invalid!</span>
          ) : null}
        </div>
        <ContainerBtn>
          <BtnRegister type='submit'>SIGN UP</BtnRegister>
        </ContainerBtn>
      </form>
      <ContainerHaveLogin>
        <span>
          Already have an member?ㅤ
          <label
            htmlFor='Login'
            onClick={() => {
              closeModalRegister()
              openModalLogin()
            }}
          >
            Login
          </label>
        </span>
      </ContainerHaveLogin>
      <ContainerBetsAndTotal>
        <Bets>
          <figure>
            <img src={signupcounter1} alt='logoBets' />
          </figure>
          <div>
            <span>{userBetsList.length}</span>
            <label htmlFor=''>Bets</label>
          </div>
        </Bets>
        <Bets>
          <figure>
            <img src={signupcounter2} alt='logoBets' />
          </figure>
          <div>
            <span>
              {formatCurrency(
                userBetsList.reduce(
                  (acc, bet) => bet.result === 'win' && bet.bet.amount + acc,
                  0
                )
              )}
            </span>
            <label htmlFor=''>Total Won</label>
          </div>
        </Bets>
      </ContainerBetsAndTotal>
    </Container>
  )
}

export default FormRegister
