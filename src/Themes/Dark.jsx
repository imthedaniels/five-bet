import { createTheme } from '@mui/material/styles'

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#491bb0',
      light: '#41199d',
      dark: '#261b58',
    },
    grey: {
      4: '#121214',
      3: '#212529',
      2: '#343B41',
      1: '#868E96',
      0: '#e3e1de',
    },
    blues: {
      0: '#b4ccf9',
    },
    background: {
      default: '#141246',
      paper: '#261b58',
    },
    success: {
      main: '#3FE864',
    },
    error: {
      main: '#E83F5B',
    },
  },
  typography: {
    fontFamily: 'Nunito Sans',

    fontSize: 12,
    h1: {
      fontSize: 18,
      fontWeight: 700,
    },
    h2: {
      fontSize: 16,
      fontWeight: 600,
    },
    h3: {
      fontSize: 14,
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 300,
    margin: 100,
  },
  resize: {
    fontSize: 50,
  },
})
