import React from 'react'
import { createContext, useCallback, useContext, useState } from "react";
import { useHistory } from 'react-router';

const FetchContext = createContext({});

export const FetchProvider = ({children}) => {
    const [coins, setCoins] = useState(0)
    const [current, setCurrent] = useState({});

    const [dolar, setDolar] = useState(0)
    const [tax, setTax] = useState(0)
    const [result, setResult] = useState(0)

    const [value, setValue] = useState(0)

    const history = useHistory();

    const bidDolar = parseFloat(coins.bid)

    //Cálculo do valor final da compra em real(R$)
    //Cálculo em dinheiro
    const taxState = ((dolar * tax) / 100)
    const taxIOF = (parseFloat(bidDolar * value) / 100)
    const calcCash = (parseFloat(dolar) + parseFloat(taxState))
    const calcCash2 = (parseFloat(bidDolar) + parseFloat(taxIOF))
    const calcCashResult = (parseFloat(calcCash) * parseFloat(calcCash2)).toFixed(2)

    //Cálculo em cartão
    const calcCard = ((parseFloat(dolar) + parseFloat(taxState)) * parseFloat(bidDolar))
    const calcCard2 = parseFloat(taxIOF)
    const calcCardResult = (parseFloat(calcCard) + parseFloat(calcCard2)).toFixed(2)

    //Chamada para a API
    const getCoins = useCallback(async () => {
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
        const data = await response.json()
        setCoins(data.USDBRL)
    },[])

    
    const onSubmit = (e) =>{

        e.preventDefault();

        if( value === '1.1') {
           setResult(calcCashResult)
        } else if( value === '6.4') {
           setResult(calcCardResult)
        }
        history.push("/results")
    }

    //Levar os dados de uma página para a outra
    const setCurrentResults = useCallback((current) => {
        setCurrent(current);
      }, []);



    return (
        <FetchContext.Provider
            value={{
                coins,
                current,
                setDolar,
                setTax,
                result,
                onSubmit,
                setCurrentResults,
                getCoins,
                dolar,
                tax,
                setResult,
                value,
                setValue,
                bidDolar,
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
