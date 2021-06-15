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
            </form>
        </div>
    )
}

export default Input
