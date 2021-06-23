import React from 'react'
import { createContext, useCallback, useContext, useState } from "react";
import { useHistory } from 'react-router';

const FetchContext = createContext({});

export const FetchProvider = ({children}) => {
    const [coins, setCoins] = useState([])
    const [current, setCurrent] = useState({});

    const [dolar, setDolar] = useState(0)
    const [tax, setTax] = useState(0)
    const [result, setResult] = useState(0)

    const [cash, setCash] = useState()
    const [creditCard, setCreditCard] = useState()

    const history = useHistory();

    const getCoins = useCallback(async () => {
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
        const data = await response.json()
        setCoins(data.USDBRL)
    },[])

    const onSubmit = (e) =>{
        e.preventDefault();

        if(cash) {
            setResult((((parseFloat(dolar) + parseFloat(dolar *  parseFloat(tax / 100)))) * (parseFloat(coins.bid) + parseFloat(coins.bid * 0.011))).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
        } else if(creditCard) {
            setResult((((parseFloat(dolar) + parseFloat(dolar *  parseFloat(tax / 100))) * parseFloat(coins.bid))  + parseFloat(coins.bid * 0.064)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
        }

        history.push("/results")
    }

    const setCurrentResults = useCallback((current) => {
        setCurrent(current);
      }, []);



    return (
        <FetchContext.Provider
            value={{
                coins,
                current,
                setCash,
                setDolar,
                setTax,
                result,
                cash,
                creditCard,
                setCreditCard,
                onSubmit,
                setCurrentResults,
                getCoins,
                dolar,
                tax
            }}
            >
            {children}
    </FetchContext.Provider>
    )
}

export const useFetch = () => {
    const fetchContext = useContext(FetchContext);
    if (!fetchContext) {
      throw new Error("FetchContext deve ser utilizado dentro de FetchProvider");
    }
    return fetchContext;
  };


export default useFetch
