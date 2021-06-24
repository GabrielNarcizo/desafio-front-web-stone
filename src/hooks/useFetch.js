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

    const [value, setValue] = useState()

    const history = useHistory();

    const taxCash = parseFloat(1.1);
    const taxCard = parseFloat(6.4);

    //Chamada para a API
    const getCoins = useCallback(async () => {
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
        const data = await response.json()
        setCoins(data.USDBRL)
    },[])

    //Cálculo do valor final da compra em real(R$)
    const onSubmit = (e) =>{
        e.preventDefault();

        if(value === "dinheiro") {
            setResult((((parseFloat(dolar) + parseFloat(dolar *  parseFloat(tax / 100)))) * (parseFloat(coins.bid) + parseFloat(coins.bid * (taxCash / 100)))).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
        } else if( value === "cartão") {
            setResult((((parseFloat(dolar) + parseFloat(dolar *  parseFloat(tax / 100))) * parseFloat(coins.bid))  + parseFloat(coins.bid * (taxCard / 100))).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
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
                taxCash,
                taxCard,
                setResult,
                value,
                setValue,
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
