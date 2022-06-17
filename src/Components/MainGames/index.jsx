import {
  Card,
  Card2,
  Container,
  Content,
  Main,
  SectionBottom,
  SectionTop,
} from './styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { ButtonGroup, Grid, InputAdornment, TextField } from '@mui/material'
import { useUserBets } from '../../Providers/UserBets'
import Timestamp from 'react-timestamp'
import Stopwatch from '../Stopwatch'
import { useUsers } from '../../Providers/Users'
import { toast } from 'react-toastify'
import { useMediaQuery } from '@mui/material'
import formatCurrency from '../../Utils/formatCurrency'

const style = {
  position: 'relative',
  top: '45%',
  left: '50%',
  width: '90%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '854px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '0.3rem',
  p: 4,
  backgroundColor: '#4832b1',
  overflowX: 'overlay',
}

const btnStyled = {
  borderRadius: '50px',

  color: 'var(--bs-light)',
  fontSize: '16px',
  fontFamily: 'var(--body-font)',
  fontWeight: 'bold',
  margin: '5px 15px',

  '&:hover': {
    backgroundColor: '#cab4ff;',
    color: '#291b6b;',
  },
  '&:focus': {
    color: '#291B6B;',
    backgroundColor: '#CAB4FF;',
  },
}

const btnQuickAmountStyle = {
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: '#5b41d1',
  borderRadius: '10px',
  backgroundColor: '#382590',
  color: 'var(--bs-white)',
  padding: '10px',
  margin: '0px 5px 0px 0px',

  '&:hover': {
    border: '1px solid #25ad5f',
    backgroundColor: '#cab4ff',
    transition: '0.3s',
  },
}

const MainGames = ({ match }) => {
  const { addUserBet, payBet, checkOdd } = useUserBets()
  const { userInfo, subBalance, userId } = useUsers()
  const [amount, setAmount] = useState(0)
  const [shot, setShot] = useState('')
  const [cardOdd, setCardOdd] = useState('?')
  const [odd, setOdd] = useState(2)
  const [open, setOpen] = useState(false)
  const handleOpen = (e) => {
    setOpen(true)
    checkOdd(match.fixture.id)
  }
  const handleClose = () => setOpen(false)

  const bet = {
    fixture: match.fixture.id,
    userId: userId,
    shot: shot,
    status: 'open',
    bet: {
      amount: Number(amount) * odd - (Number(amount) * odd * 5) / 100,
      odd: odd,
    },
    match: {
      league: match.league.name,
      timestamp: match.fixture.timestamp,
      teamHome: {
        name: match.teams.home.name,
        score: match.goals.home,
        logo: match.teams.home.logo,
      },
      teamAway: {
        name: match.teams.away.name,
        score: match.goals.away,
        logo: match.teams.away.logo,
      },
    },
  }

  const validBet = () => {
    if (bet.shot !== null && bet.amount !== null) {
      if (userInfo.balance >= amount) {
        addUserBet(bet)
        subBalance(userInfo.id, amount)
        handleClose()
        toast.success(`Bet successfully placed!`, {
          theme: 'colored',
        })
        console.log('USERINFO', userInfo)
      } else if (amount > userInfo.balance) {
        toast.error(`Insufficient funds!`, {
          theme: 'colored',
        })
      }
    } else {
      toast.error(`Fill in all the fields to bet!`, {
        theme: 'colored',
      })
    }
    console.log(userInfo)
  }

  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Stack
              sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                mb: 3,
                paddingBottom: '30px',
                borderBottom: '1px solid #8e78c0',
                flexWrap: 'wrap',
              }}
            >
              <Button
                sx={btnStyled}
                variant='contained'
                size='large'
                onClick={() => {
                  setShot('home')
                  setCardOdd(2.73)
                  setOdd(Number(2.73))
                }}
              >
                {match.teams.home.name} will win
              </Button>
              <Button
                sx={btnStyled}
                variant='contained'
                size='large'
                onClick={() => {
                  setShot('draw')
                  setCardOdd(3.14)
                  setOdd(Number(3.14))
                }}
              >
                Draw
              </Button>
              <Button
                sx={btnStyled}
                variant='contained'
                size='large'
                onClick={() => {
                  setShot('away')
                  setCardOdd(1.33)
                  setOdd(Number(1.33))
                }}
              >
                {match.teams.away.name} will win
              </Button>
            </Stack>

            <Grid
              container
              spacing={2}
              sx={{ display: 'flex', flexWrap: 'wrap' }}
            >
              <Grid
                item
                xs={4}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                }}
              >
                <TextField
                  label='Bet Value'
                  sx={{
                    m: 1,
                    width: '20ch',
                    border: '1px solid #5b41d1',
                    borderRadius: '10px',
                    backgroundColor: '#382590',

                    position: 'relative',
                  }}
                  value={amount}
                  type='number'
                  onChange={(e) => setAmount(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>USD</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <Typography
                  sx={{ color: 'white', mb: 0.4 }}
                  variant='h3'
                  component='span'
                >
                  Quick Amounts
                </Typography>
                <Grid container spacing={2} sx={{ display: 'flex' }}>
                  <Grid
                    item
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: 'none',
                    }}
                  >
                    <ButtonGroup
                      size='large'
                      sx={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                      <Button
                        style={btnQuickAmountStyle}
                        onClick={() => setAmount(Number(amount) + 5)}
                      >
                        5
                      </Button>
                      <Button
                        style={btnQuickAmountStyle}
                        onClick={() => setAmount(Number(amount) + 10)}
                      >
                        10
                      </Button>
                      <Button
                        style={btnQuickAmountStyle}
                        onClick={() => setAmount(Number(amount) + 25)}
                      >
                        25
                      </Button>
                      <Button
                        style={btnQuickAmountStyle}
                        onClick={() => setAmount(Number(amount) + 50)}
                      >
                        50
                      </Button>
                      <Button
                        style={btnQuickAmountStyle}
                        onClick={() => setAmount(Number(amount) + 100)}
                      >
                        100
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <Typography
                  sx={{ color: 'white' }}
                  variant='h6'
                  component='span'
                >
                  Odd based on Draw:
                </Typography>
                <Stack sx={{ flexDirection: 'row' }}>
                  <Typography
                    sx={{
                      fontSize: '1.9rem',
                      color: '#ffe1e5',
                    }}
                    variant='h1'
                    component='span'
                  >
                    {cardOdd}
                  </Typography>
                </Stack>
              </Grid>
              <Grid
                container
                spacing={2}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mt: 1,
                  borderTop: '1px solid #8e78c0',
                  marginLeft: '16px',
                  marginTop: '20px',
                }}
              >
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '20px',
                  }}
                >
                  <span
                    style={{
                      color: 'white',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                      fontFamily: 'Nunito Sans',
                    }}
                  >
                    Winner will get:
                    <span style={{ color: '#8bffbd' }}>
                      {' '}
                      {formatCurrency(amount * odd - (amount * odd * 5) / 100)}
                    </span>{' '}
                  </span>
                  <Typography
                    sx={{ color: 'white' }}
                    variant='h6'
                    component='span'
                  >
                    Escrow Fee: 5%
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: '#571ce0',
                      boxShadow: '4px 6.928px 24px 0px rgb(0 0 0 / 18%)',
                      padding: '20px 25px',
                    }}
                    variant='contained'
                    size='large'
                    onClick={validBet}
                  >
                    Make ({formatCurrency(amount)} ) Bet
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      color: 'white',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                      fontFamily: 'Nunito Sans',
                    }}
                  >
                    Game Closes:
                  </span>
                  <Typography
                    sx={{ color: 'white' }}
                    variant='h6'
                    component='span'
                  >
                    Mar <span style={{ color: '#ffe1e5' }}>21, 2022</span> |{' '}
                    <span style={{ color: '#ffe1e5' }}>1:00</span> AM
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>

      <Container>
        <SectionTop>
          <button>{match.league.name}</button>
          <span>
            <Timestamp date={match.fixture.timestamp} />
          </span>
        </SectionTop>

        <Main>
          <Card>
            <h2>{match.teams.home.name}</h2>
            <p className='description'>Home</p>
            <img src={match.teams.home.logo} alt={match.teams.home.name} />
          </Card>

          <Card2>
            <p className='time'>
              {' '}
              <Stopwatch
                ms={match.fixture.status.elapsed * 60000}
                fixtureId={match.fixture.id}
              />
            </p>

            <p className='teams'>
              {match.goals.home} x {match.goals.away}
            </p>
          </Card2>

          <Card>
            <h2>{match.teams.away.name}</h2>
            <p className='description'>Away</p>
            <img src={match.teams.away.logo} alt={match.teams.away.name} />
          </Card>
        </Main>

        <SectionBottom>
          <Button variant='text' onClick={handleOpen}>
            Make my Bet
          </Button>
          <button onClick={() => payBet(userId, match.fixture.id)}>
            Pay {match.fixture.id}
          </button>
        </SectionBottom>
      </Container>
    </div>
  )
}

export default MainGames
