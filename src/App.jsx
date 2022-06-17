import { ThemeProvider, CssBaseline } from '@mui/material'
import { DarkTheme } from './Themes'
import GlobalStyle from './Styles/global'
import Routes from './Routes'
import { DashboardProvider } from './Providers/Dashboard'
import Providers from './Providers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Providers>
        <CssBaseline />
        <GlobalStyle />
        <ThemeProvider theme={DarkTheme}>
          <Routes />
        </ThemeProvider>
      </Providers>
    </>
  )
}

export default App
