import * as React from 'react'
import { Avatar } from '@mui/material'
import {
  Authentication,
  Buttons,
  Container,
  Footer,
  TagEmail,
  TagEnable,
  TagPassowrd,
  TagProfile,
  TagSettings,
} from './styles'
import { Button, Switch } from '@mui/material'
import { PlusCircle, EnvelopeSimple, Keyhole } from 'phosphor-react'
import { Modal, Box, Typography } from '@mui/material'
import axios from 'axios'
import { api } from '../../Services/api'
import { PasswordContext } from '../../Providers/Password'
import { usePassword } from '../../Providers/Password'
//import { useSnackbar, SnackbarProvider } from "notistack";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { set, useForm } from 'react-hook-form'
import Input from '../Input'
import { Uploader } from 'uploader'
import { UploadButton } from 'react-uploader'
import { useUsers } from '../../Providers/Users'
import { useEffect } from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
}

const Settings = () => {
  const { changePassword } = usePassword()
  //const { enqueueSnackbar } = useSnackbar();
  const [enable, setEnable] = React.useState(false)
  const [openModal, setOpenModal] = React.useState(false)
  const { userId, userToken, imagem, setImagem } = useUsers()
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)
  const [email, setEmail] = React.useState('')

  //Mensagem de erro e sucesso
  /* const handleMessage = (message, variant) => {
    enqueueSnackbar(message, { variant: variant });
  }; */

  //pegando email
  useEffect(() => getEmail(), [])

  const getEmail = () => {
    api
      .get(`/users/${userId}`)
      .then((res) => setEmail(res.data.email))
      .catch((err) => console.log(err))
  }

  //Usando Id para carregar imagens

  //yup para alterar senha

  const formLoginSchema = yup.object().shape({
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
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formLoginSchema),
  })

  /* const [sen,setsen]=React.useState('')
  const senha=()=>{
    api
      .get(`/users/${userId}`)
      .then((res) => setsen(res.data.password))
      .catch((err) => console.log(err))
  }

    console.log(sen) */

  const onSubmitFunction = (data) => {
    /* senha() */
    console.log(data)
    console.log(data.password)
    console.log(data.currentPassword)
    console.log(data.confirmPassword)

    //passar a função com o id e o valor da nova senha
    changePassword(userId, data.password)
  }

  //Trabalhando com imagem

  const uploader = new Uploader({
    // Get production API keys from Upload.io
    apiKey: 'free',
  })

  const upProfilePic = (profilePic) => {
    setImagem(profilePic)
    const data = { profilePic: profilePic }
    api
      .patch(`/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((_) => console.log('Profile Picture Att.'))
      .catch((err) => console.log(err))
  }

  //Retorno

  return (
    <Container>
      <TagSettings>
        <h5>Settings</h5>
      </TagSettings>
      <TagProfile>
        <div className='avatar'>
          <Avatar src={imagem}></Avatar>
        </div>
        <div className='text'>
          <h4>Upload profile photo via</h4>

          <UploadButton
            uploader={uploader}
            options={{ multi: true }}
            onComplete={(files) => upProfilePic(files[0].fileUrl)}
          >
            {({ onClick }) => (
              <button
                className='upload'
                style={{
                  color: 'var(--bs-light)',
                  background: 'var(--darkreader-bg--hover-color)',
                  width: '80%',
                  paddingLeft: '15px',
                }}
                onClick={onClick}
              >
                Upload a file...
              </button>
            )}
          </UploadButton>
          <span>Choose a photo from your personal computer. 3MB max.</span>
        </div>
      </TagProfile>
      <section>
        <TagEmail>
          <EnvelopeSimple size={32} />
          <div className='content'>
            {email}
            <span className='unverified'>Unverified Account</span>
          </div>
        </TagEmail>
        <TagPassowrd>
          <Keyhole size={40} />
          <button onClick={handleOpen}>Change Password</button>
          <Modal keepMounted open={openModal} onClose={handleClose}>
            <Box sx={style}>
              <Typography
                id='keep-mounted-modal-title'
                variant='h6'
                component='h2'
                sx={{ color: 'white' }}
              >
                <p>New password</p>
              </Typography>

              <form onSubmit={handleSubmit(onSubmitFunction)}>
                {/* <Input
                  register={register}
                  type='password'
                  placeholder='Current password'
                  name='Current password'
                  value='currentPassword'
                  error={errors.password?.message}
                /> */}
                <Input
                  register={register}
                  type='password'
                  placeholder='New password'
                  name='New password'
                  value='password'
                  error={errors.password?.message}
                />
                <Input
                  register={register}
                  type='password'
                  placeholder='Confirm new password'
                  name='Confirm new password'
                  value='confirmPassword'
                  error={errors.confirmPassword?.message}
                />

                <Button
                  sx={{
                    background: 'var(--hover-color)',
                    color: 'var(--bs-white)',
                    font: 'var(--body-font)',
                  }}
                  type='submit'
                >
                  Confirmar
                </Button>
              </form>
            </Box>
          </Modal>
        </TagPassowrd>
      </section>

      {enable === true && (
        <Authentication>
          <h4>Enable Google Authentication</h4>
          <Buttons>
            <a href='https://clash-of-clans.br.uptodown.com/android'>
              <button>DownloadApp</button>
            </a>
            <a href='https://br.qr-code-generator.com/a1/'>
              <button>ScanQrCode</button>
            </a>
            <a href='https://cloud.google.com/products/storage?gclsrc=ds&gclsrc=ds&gclid=CLT0vqqy6vcCFU_rDQodHPQGpA'>
              <button>BackupKey</button>
            </a>
            <a href='https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai?hl=pt'>
              <button>EnableGoogleAuthentication</button>
            </a>
          </Buttons>
          <Footer>
            <p>
              Step 1: Download and install the Google Authentication app into
              your mobile phone.
            </p>
            <footer>
              I have installed the app<button>Next Step</button>
            </footer>
          </Footer>
        </Authentication>
      )}
    </Container>
  )
}

export default Settings
