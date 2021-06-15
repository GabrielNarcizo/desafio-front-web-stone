import React from 'react'

const Input = () => {
    return (
        <div>
            <form>
                <label>
                    Dólar
                    <input type="number" name="dolar" placeholder="$ 1.00" />
                </label>
                <label>
                    Taxa do Estado
                    <input type="number" name="taxa" placeholder="0%"/>
                </label>
                <div>
                    Tipo de compra
                    <input type="radio" value="Cash" name="cash" /> Dinheiro
                    <input type="radio" value="Credit-card" name="credit-card" /> Cartão de crédito
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Input
