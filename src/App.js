import React from 'react'
import useFetch from './hooks/useFetch'

const App = () => {
  const coins = useFetch();

  return (
    <div>
      <h1>R$ {coins.low} </h1>
    </div>
  )
}

export default App

