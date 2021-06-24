import React from 'react'
import useFetch, { FetchProvider } from '../../hooks/useFetch'
import { Div, Logo } from '../Home/Home.style'
import { Container, DivResults } from './Results.style'
import LogoStone from '../../images/stone.png'
import { BsArrowLeft } from "react-icons/bs";
import { useHistory } from 'react-router'


const Results = () => {

    const context = useFetch(FetchProvider);

    const history = useHistory();
    const navigateTo = (path) => history.push(path);

    return (
        <Div>
            <Logo src={LogoStone}/>
            <Container>
            <DivResults>
            <button onClick={() => {
                    navigateTo("/")
                  }}><BsArrowLeft /><p>Voltar</p></button>
            <h3>O resultado do cálculo é: </h3>
            <h1>{context.result}</h1>
            <p>Cotação do dólar: $1,00 = R$ {context.coins.bid} </p>
            <p>Total em dólar sem imposto $ {parseFloat(context.dolar).toFixed(2)} </p>
            <p>Total em dólar com imposto {parseFloat(context.result / context.coins.bid)}</p>
            <p>Total em real sem imposto R$ {parseFloat(context.dolar * context.coins.bid).toFixed(2)}</p>
            <p>Taxa dinheiro é de 1,1%</p>
            <p>Taxa cartão é de 6,4%</p>
            </DivResults>
            </Container>
        </Div>
    )
}

export default Results
