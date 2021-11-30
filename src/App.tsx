import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainView } from './features/MainView/main-view';
import { createTheme, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
  },
  status: {
    danger: orange[500],
  },
});

theme.typography.h1= {
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '6rem',
  },
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
       <MainView />
      </ThemeProvider>
    </div>
  );
}

export default App;
