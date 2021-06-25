import React from 'react'
import useFetch, { FetchProvider } from '../../hooks/useFetch'
import { Div, Logo } from '../Home/Home.style'
import { Container, DivLogo, DivResults } from './Results.style'
import LogoStone from '../../images/stone.png'
import { BsArrowLeft } from "react-icons/bs";
import { useHistory } from 'react-router'
import moment from 'moment'
import "moment/locale/pt-br";


const Results = () => {

    const context = useFetch(FetchProvider);

    const history = useHistory();
    const navigateTo = (path) => history.push(path);

    return (
        <Div>
            <DivLogo>
            <Logo src={LogoStone}/>
            <p>{moment().format('LL [|] HH:mm [UTC] [|]')} Cotação do dia: R$ {context.coins.bid}</p>
            </DivLogo>
            <Container>
            <DivResults>
            <button onClick={() => {
                    navigateTo("/")
                  }}><BsArrowLeft /><p>Voltar</p></button>
            <h3>O resultado do cálculo é: </h3>
            <h1>R$ {parseFloat(context.result)}</h1>
            <p>Cotação do dólar: $1,00 = R$ {parseFloat(context.coins.bid)} </p>
            <p>Taxa de {context.value}%</p>
            <p>Total em dólar sem imposto $ {parseFloat(context.dolar)} </p>
            <p>Total em dólar com imposto $ {(context.result / context.coins.bid).toFixed(2)} </p>
            <p>Total em real sem imposto R$ {parseFloat(context.dolar * context.coins.bid).toFixed(2).replace(".",",")}</p>
            </DivResults>
            </Container>
        </Div>
    )
}

export default Results
