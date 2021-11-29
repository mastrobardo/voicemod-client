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
  status: {
    danger: orange[500],
  },
});

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
