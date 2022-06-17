import { Button } from '@mui/material'
import { Container } from './styles'
import { Content } from './styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'

const Form = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required('Mandatory name')
      .matches(
        /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/,
        'Name can not have numbers'
      ),
    number: yup.string().required('Mandatory cellphone'),
    email: yup.string().required('Mandatory email').email('Invalid email'),
    subject: yup.string().required('Mandatory subject'),
    message: yup.string().required('Mandatory message'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  })

  const url = 'https://capstone-group2-alex-api.herokuapp.com/contact'

  const onSubmitFunction = (data) => {
    axios
      .post(url, data)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <Container>
      <Content>
        <h1>Get in touch with us</h1>
        <h5>
          Fill up the form and our team will get back to you within 24 hours
        </h5>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label>
            Name
            <input
              className='input'
              placeholder='John McLovin'
              {...register('name')}
            />
          </label>

          <label>
            Your email address
            <input
              className='input'
              placeholder='johnmclovin@msn.com'
              {...register('email')}
            />
          </label>

          <label>
            Number
            <input
              className='input'
              placeholder='+55 (17) 99278-2316'
              {...register('number')}
            />
          </label>

          <label>
            Subject
            <input
              className='input'
              placeholder='Help with bets'
              {...register('subject')}
            />
          </label>

          <label>
            Message
            <textarea
              placeholder='I would like to get help with my bets'
              {...register('message')}
            ></textarea>
          </label>
          <div className='botao'>
            <Button type='submit'>Send Message</Button>
          </div>
        </form>
      </Content>
    </Container>
  )
}

export default Form
