import * as React from 'react'

import {
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Button,
  useScrollTrigger,
  Container,
  useMediaQuery,
  Drawer,
  Modal,
  Backdrop,
  Fade,
} from '@mui/material'
import PropTypes from 'prop-types'
import { useState } from 'react'
import logo from '../../Assets/logo.png'
import {
  User,
  List,
  DiceFive,
  Money,
  Handshake,
  CurrencyBtc,
  ClockCounterClockwise,
  Gear,
  SignOut,
  SoccerBall,
  House,
  UserCirclePlus,
  SignIn,
} from 'phosphor-react'
import FormLogin from '../FormLogin'
import FormRegister from '../FormRegister'
import { useHistory } from 'react-router-dom'
import { DashboardContext } from '../../Providers/Dashboard'
import { Link } from 'react-router-dom'

const styleBtns = {
  fontSize: '16px',
  marginRight: '25px',
  color: 'white',
  boxShadow: 'none',

  '&:hover': {},
}

const styleBtnsProfile = {
  fontSize: '16px',
  color: 'white',
  padding: '10px 20px',
  boxShadow: 'none',

  '&:hover': {
    backgroundColor: '#261b58',
  },
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  padding: '15px 20px',
  maxWidth: '500px',
  height: '95vh;',
  overflow: 'overlay',
}

function ElevationScroll(props) {
  const { children, window } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
}

const Header = (props) => {
  const { chooseTab, tab } = React.useContext(DashboardContext)
  const history = useHistory()

  function handleClickRoute(route) {
    history.push(`${route}`)
  }

  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  const [openUser, setOpenUser] = useState(false)
  const [auth, setAuth] = useState(
    localStorage.getItem('@GambleAPI:token') || false
  )
  const [anchorEl, setAnchorEl] = useState(null)

  const handleChange = (event) => {
    setAuth(event)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const matches = useMediaQuery('(min-width:670px)')

  const [open, setOpen] = React.useState(false)
  const openModalLogin = () => setOpen(true)
  const closeModalLogin = () => setOpen(false)

  const [openRegister, setOpenRegister] = React.useState(false)
  const openModalRegister = () => setOpenRegister(true)
  const closeModalRegister = () => setOpenRegister(false)

  return (
    <>
      {matches ? (
        <Box sx={{ flexGrow: 1 }}>
          <ElevationScroll {...props}>
            <AppBar
              position='fixed'
              elevation={trigger ? 24 : 0}
              style={{
                padding: '15px 15px',
                backgroundColor: trigger ? '#2D0572' : 'transparent',
                boxShadow: trigger
                  ? '5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important'
                  : undefined,
                transition: 'background-color 0.5s ease',
                float: 'top',
              }}
            >
              <Toolbar>
                <Typography
                  variant='h6'
                  component='div'
                  sx={{
                    flexGrow: 1,
                    justifyContent: 'flex-start',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Link to='/'>
                    <img src={logo} alt='Logo' />
                  </Link>
                </Typography>

                {!auth && (
                  <div>
                    <Button
                      onClick={() => handleClickRoute('/')}
                      sx={styleBtns}
                    >
                      <Typography textAlign='center' variant='h2'>
                        Home
                      </Typography>
                    </Button>
                    <Button
                      onClick={() => handleClickRoute('/sports')}
                      sx={styleBtns}
                    >
                      <Typography textAlign='center' variant='h2'>
                        Sports
                      </Typography>
                    </Button>
                    <Button
                      onClick={() => {
                        openModalLogin()
                      }}
                      sx={{
                        fontSize: '18px',
                        marginLeft: '20px',
                        color: 'white',
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      size='large'
                      variant='contained'
                      onClick={() => {
                        openModalRegister()
                      }}
                      sx={{
                        borderRadius: '25px',
                        padding: '10px 15px',
                        fontSize: '18px',
                        marginLeft: '10px',
                      }}
                    >
                      Sign up
                    </Button>
                  </div>
                )}

                {auth && (
                  <div>
                    <Button
                      onClick={() => handleClickRoute('/')}
                      sx={styleBtns}
                    >
                      <Typography textAlign='center' variant='h2'>
                        Home
                      </Typography>
                    </Button>
                    <Button
                      onClick={() => handleClickRoute('/sports')}
                      sx={styleBtns}
                    >
                      <Typography textAlign='center' variant='h2'>
                        Sports
                      </Typography>
                    </Button>
                    <Button
                      onClick={() => handleClickRoute('/dashboard')}
                      sx={styleBtns}
                    >
                      <Typography textAlign='center' variant='h2'>
                        Dashboard
                      </Typography>
                    </Button>

                    <IconButton
                      size='large'
                      aria-label='account of current user'
                      aria-controls='menu-appbar'
                      aria-haspopup='true'
                      onClick={(event) => handleMenu(event)}
                      color='inherit'
                    >
                      <User />
                    </IconButton>
                    <Menu
                      id='menu-appbar'
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem
                        onClick={() => {
                          handleClickRoute('/dashboard')
                          chooseTab('My Bets')
                        }}
                        sx={styleBtnsProfile}
                      >
                        <DiceFive size={32} />
                        <Typography
                          textAlign='center'
                          variant='text'
                          sx={{ marginLeft: '10px' }}
                        >
                          My Bets
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleClickRoute('/dashboard')
                          chooseTab('Deposit / Withdraw')
                        }}
                        sx={styleBtnsProfile}
                      >
                        <Money size={32} />
                        <Typography
                          textAlign='center'
                          variant='text'
                          sx={{ marginLeft: '10px' }}
                        >
                          Deposit/Withdraw
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleClickRoute('/dashboard')
                          chooseTab('Affiliate')
                        }}
                        sx={styleBtnsProfile}
                      >
                        <Handshake size={32} />{' '}
                        <Typography
                          textAlign='center'
                          variant='text'
                          sx={{ marginLeft: '10px' }}
                        >
                          Afiliate
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleClickRoute('/dashboard')
                          chooseTab('BuyCrypto')
                        }}
                        sx={styleBtnsProfile}
                      >
                        <CurrencyBtc size={32} />
                        <Typography
                          textAlign='center'
                          variant='text'
                          sx={{ marginLeft: '10px' }}
                        >
                          Buy Crypto
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleClickRoute('/dashboard')
                          chooseTab('Transactions')
                        }}
                        sx={styleBtnsProfile}
                      >
                        <ClockCounterClockwise size={32} />
                        <Typography
                          textAlign='center'
                          variant='text'
                          sx={{ marginLeft: '10px' }}
                        >
                          Transactions
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleClickRoute('/dashboard')
                          chooseTab('Settings')
                        }}
                        sx={styleBtnsProfile}
                      >
                        <Gear size={32} />
                        <Typography
                          textAlign='center'
                          variant='text'
                          sx={{ marginLeft: '10px' }}
                        >
                          Settings
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        sx={styleBtnsProfile}
                        onClick={() => {
                          console.log('tchau')
                          localStorage.clear()
                          handleChange(false)
                          handleClose()
                          handleClickRoute('/')
                        }}
                      >
                        <SignOut size={32} />
                        <Typography
                          textAlign='center'
                          variant='text'
                          sx={{ marginLeft: '10px' }}
                        >
                          Logout
                        </Typography>
                      </MenuItem>
                    </Menu>
                  </div>
                )}
              </Toolbar>
            </AppBar>
          </ElevationScroll>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <ElevationScroll {...props}>
            <AppBar
              position='fixed'
              sx={{
                padding: '30px 15px',
                backgroundColor: trigger ? '#2D0572' : 'transparent',
                boxShadow: trigger
                  ? '5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important'
                  : undefined,
                transition: 'background-color 0.5s ease',
                float: 'top',
              }}
            >
              <Container>
                <Toolbar>
                  <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    <img src={logo} alt='Logo' />
                  </Typography>
                  <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                  >
                    <List onClick={() => setOpenUser(true)} />
                  </IconButton>
                  {auth && (
                    <Drawer
                      anchor='right'
                      open={openUser}
                      onClose={() => setOpenUser(false)}
                    >
                      <Container sx={{ padding: '10px 0px' }}>
                        <MenuItem
                          onClick={() => {
                            handleClose()
                            handleClickRoute('/')
                          }}
                          sx={styleBtnsProfile}
                        >
                          <House size={32} />
                          <Typography
                            textAlign='center'
                            variant='text'
                            sx={{ marginLeft: '10px' }}
                          >
                            Home
                          </Typography>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClose()
                            handleClickRoute('/sports')
                          }}
                          sx={styleBtnsProfile}
                        >
                          <SoccerBall size={32} />
                          <Typography
                            textAlign='center'
                            variant='text'
                            sx={{ marginLeft: '10px' }}
                          >
                            Sports
                          </Typography>
                        </MenuItem>

                        <MenuItem
                          onClick={() => {
                            chooseTab('My Bets')

                            handleClickRoute('/dashboard')
                          }}
                          sx={styleBtnsProfile}
                        >
                          <DiceFive size={32} />
                          <Typography
                            textAlign='center'
                            variant='text'
                            sx={{ marginLeft: '10px' }}
                          >
                            My Bets
                          </Typography>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClickRoute('/dashboard')
                            chooseTab('Deposit / Withdraw')
                            handleClose()
                          }}
                          sx={styleBtnsProfile}
                        >
                          <Money size={32} />
                          <Typography
                            textAlign='center'
                            variant='text'
                            sx={{ marginLeft: '10px' }}
                          >
                            Deposit/Withdraw
                          </Typography>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClickRoute('/dashboard')
                            chooseTab('Affiliate')
                            handleClose()
                          }}
                          sx={styleBtnsProfile}
                        >
                          <Handshake size={32} />{' '}
                          <Typography
                            textAlign='center'
                            variant='text'
                            sx={{ marginLeft: '10px' }}
                          >
                            Afiliate
                          </Typography>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClose()
                            handleClickRoute('/dashboard')
                            chooseTab('BuyCrypto')
                          }}
                          sx={styleBtnsProfile}
                        >
                          <CurrencyBtc size={32} />
                          <Typography
                            textAlign='center'
                            variant='text'
                            sx={{ marginLeft: '10px' }}
                          >
                            Buy Crypto
                          </Typography>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClickRoute('/dashboard')
                            chooseTab('Transactions')
                            handleClose()
                          }}
                          sx={styleBtnsProfile}
                        >
                          <ClockCounterClockwise size={32} />
                          <Typography
                            textAlign='center'
                            variant='text'
                            sx={{ marginLeft: '10px' }}
                          >
                            Transactions
                          </Typography>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClickRoute('/dashboard')
                            chooseTab('Settings')
                            handleClose()
                          }}
                          sx={styleBtnsProfile}
                        >
                          <Gear size={32} />
                          <Typography
                            textAlign='center'
                            variant='text'
                            sx={{ marginLeft: '10px' }}
                          >
                            Settings
                          </Typography>
                        </MenuItem>
                        <MenuItem
                          sx={styleBtnsProfile}
                          onClick={() => {
                            console.log('oi')
                            localStorage.clear()
                            handleChange(false)
                            handleClose()
                            handleClickRoute('/')
                          }}
                        >
                          <SignOut size={32} />
                          <Typography
                            textAlign='center'
                            variant='text'
                            sx={{ marginLeft: '10px' }}
                          >
                            Logout
                          </Typography>
                        </MenuItem>
                      </Container>
                    </Drawer>
                  )}

                  {!auth && (
                    <Drawer
                      anchor='right'
                      open={openUser}
                      onClose={() => setOpenUser(false)}
                    >
                      <Container sx={{ padding: '10px 20px' }}>
                        {/* <MenuItem
                          onClick={() => {
                            handleClose();
                            openModalRegister();
                          }}
                        >
                          <ListItemText>Sign Up</ListItemText>
                        </MenuItem> */}
                        <MenuItem
                          onClick={() => {
                            handleClose()
                            openModalRegister()
                          }}
                        >
                          <UserCirclePlus size={32} />
                          <Typography
                            textAlign='center'
                            variant='text'
                            sx={{ marginLeft: '10px' }}
                          >
                            Sign Up
                          </Typography>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClose()
                            openModalLogin()
                          }}
                        >
                          <SignIn size={32} />
                          <Typography
                            textAlign='center'
                            variant='text'
                            sx={{ marginLeft: '10px' }}
                          >
                            Login
                          </Typography>
                        </MenuItem>
                      </Container>
                    </Drawer>
                  )}
                </Toolbar>
              </Container>
            </AppBar>
          </ElevationScroll>
        </Box>
      )}

      <Modal
        open={open}
        onClose={closeModalLogin}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <FormLogin
              closeModalLogin={closeModalLogin}
              handleChange={handleChange}
              openModalRegister={openModalRegister}
            />
          </Box>
        </Fade>
      </Modal>

      <Modal
        open={openRegister}
        onClose={closeModalRegister}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openRegister}>
          <Box sx={style}>
            <FormRegister
              closeModalRegister={closeModalRegister}
              openModalLogin={openModalLogin}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default Header
