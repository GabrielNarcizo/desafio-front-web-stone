import React, { useState } from 'react'
import { Div, RadioBtnDiv, InputStyle, Label, InputBtn} from './Input.style'
import useFetch from '../../hooks/useFetch';

const Input = () => {
    
    const coins = useFetch();

    const [dolar, setDolar] = useState(0)
    const [tax, setTax] = useState(0)
    const [result, setResult] = useState(0)

    const [cash, setCash] = useState()
    const [creditCard, setCreditCard] = useState()

    const onSubmit = (e) =>{
            e.preventDefault();

            if(cash) {
                setResult(((parseFloat(dolar) + parseFloat(tax)) * (parseFloat(coins.low) + parseFloat(1.1))).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
            } else if(creditCard) {
                setResult((((parseFloat(dolar) + parseFloat(tax)) + parseFloat(6.4)) * parseFloat(coins.low)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
            } 
    }

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
                <InputBtn type="submit" />
            </form>
            <p>{result}</p>
            </Div>
        </>
    )
}

export default Input
