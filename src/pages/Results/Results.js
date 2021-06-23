import React from 'react'
import useFetch, { FetchProvider } from '../../hooks/useFetch'
import { Div, Logo } from '../Home/Home.style'
import { Container, DivResults } from './Results.style'
import LogoStone from '../../images/stone.png'
import { BsArrowLeft } from "react-icons/bs";


const Results = () => {

    const context = useFetch(FetchProvider);


    return (
        <Div>
            <Logo src={LogoStone}/>
            <Container>
            <DivResults>
            <button><BsArrowLeft /><p>Voltar</p></button>
            <h3>O resultado do cálculo é: </h3>
            <h1>R${context.result}</h1>
            <p>Cotação do dólar: $1,00 = R$ {context.coins.bid} </p>
            {/* <p>Compra no {context.input.value} e taxa de </p> */}
            <p>Total em dólar sem imposto $ {parseFloat(context.dolar).toFixed(2)} </p>
            <p>Total em dólar com imposto $ {parseFloat(context.result / context.coins.bid).toFixed(2)}</p>
            <p>Total em real sem imposto R$ {parseFloat(context.dolar * context.coins.bid).toFixed(2)}</p>
            </DivResults>
            </Container>
        </Div>
    )
}

export default Results
