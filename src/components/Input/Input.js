import React, { useEffect } from 'react'
import { Div, RadioBtnDiv, InputStyle, Label} from './Input.style'
import useFetch from '../../hooks/useFetch'
import { Btn } from '../Button/Button.style';

const Input = () => {
    
    const {setDolar, getCoins, setCash, onSubmit, setTax, setCreditCard, result} = useFetch()

    useEffect(() => {
        getCoins();
      }, [getCoins]);

    return (
        <>
            <Div>
            <form onSubmit={onSubmit}>
                <div>
                <Label htmlFor="dolar">
                    <p>Dólar</p>
                    <InputStyle type="number" name="dolar" id="dolar" placeholder="$ 1.00" onChange={ e => setDolar(e.target.value)}/>
                </Label>
                <Label htmlFor="tax">
                    <p>Taxa do Estado</p>
                    <InputStyle type="number" name="tax" id="tax" placeholder="0%" step="0.01" min="0" onChange={e => setTax(e.target.value.replace(",", "."))}/>
                </Label>
                </div>
                
                <RadioBtnDiv>
                    <p>Tipo de compra</p>
                    <div>
                    <input 
                    type="radio" 
                    onChange={ e => setCash(e.target.value)}
                    name="option" 
                    id="cash"/> 
                    <label htmlFor="cash">
                    Dinheiro
                    </label>
                    <input 
                    type="radio" 
                    onChange={ e => setCreditCard(e.target.value)}
                    name="option" 
                    id="credit-card"/>
                    <label htmlFor="credit-card"> 
                    Cartão
                    </label>
                    </div>
                </RadioBtnDiv>
                <Btn>Converter</Btn>
            </form>
            <p>{result}</p>
            </Div>
        </>
    )
}

export default Input
