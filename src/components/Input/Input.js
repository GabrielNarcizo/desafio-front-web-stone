import React, { useEffect } from 'react'
import { Div, RadioBtnDiv, InputStyle, Label} from './Input.style'
import useFetch from '../../hooks/useFetch'
import { Btn } from '../Button/Button.style';
import { BsArrowLeftRight } from "react-icons/bs";


const Input = () => {
    
    const {setDolar, getCoins, onSubmit, setTax, setValue, setId} = useFetch()
    

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
                    value={1.1}
                    onChange={ e => setValue(e.target.value)}
                    name="option"
                    id={setId("dinheiro")}/> 
                    <label htmlFor="dinheiro">
                    Dinheiro
                    </label>
                    <input 
                    type="radio"
                    value= {6.4} 
                    onClick={ e => setValue(e.target.value)}
                    name="option" 
                    id={setId("cartão")}/>
                    <label htmlFor="cartão"> 
                    Cartão
                    </label>
                    </div>
                </RadioBtnDiv>
                <Btn><BsArrowLeftRight /><p>Converter</p> </Btn>
            </form>
            </Div>
        </>
    )
}

export default Input
