import React from 'react'
import Input from './components/Input/Input';
import useFetch from './hooks/useFetch'

const App = () => {
  const coins = useFetch();

  return (
    <div>
      <h1>R$ {coins.low} </h1>
      <Input />
    </div>
  )
}

export default App

