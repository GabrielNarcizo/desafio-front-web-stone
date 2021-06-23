import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import RootProvider from './hooks';
import Routes from './routes/Routes';
import GlobalStyle from './styles/globalStyle';

const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <RootProvider>
        <Routes />
      </RootProvider>
    </BrowserRouter>
  )
}

export default App

