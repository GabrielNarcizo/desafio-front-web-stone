import React from 'react'
import { Div, RadioBtnDiv, InputStyle, Label, InputBtn} from './Input.style'

const Input = () => {
    return (
        <>
            <Div>
            <form>
                <div>
                <Label>
                    <p>Dólar</p>
                    <InputStyle type="number" name="dolar" placeholder="$ 1.00" />
                </Label>
                <Label>
                    <p>Taxa do Estado</p>
                    <InputStyle type="number" name="taxa" placeholder="0%"/>
                </Label>
                </div>
                
                <RadioBtnDiv>
                    <p>Tipo de compra</p>
                    <div>
                    <input type="radio" value="Cash" name="cash" id="cash"/> 
                    <label for="cash">
                    Dinheiro
                    </label>
                    <input type="radio" value="Credit-card" name="credit-card" id="credit-card"/>
                    <label for="credit-card"> 
                    Cartão
                    </label>
                    </div>
                </RadioBtnDiv>
                <InputBtn type="submit" value="Converter" />
            </form>
            </Div>
        </>
    )
}

export default Input
