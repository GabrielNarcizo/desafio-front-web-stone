import { useEffect, useState } from 'react'

const useFetch = () => {
    const [coins, setCoins] = useState([])

    useEffect(() =>{
        const getCoins = async () => {
            const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
            const data = await response.json()
            setCoins(data.USDBRL)
        }
        getCoins()
    },[])

    return coins
}

export default useFetch
