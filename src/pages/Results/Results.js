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

    const pFloat = (i) => {
        return parseFloat(i).toFixed(2).replace(".", ",");
      };

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
            <h1>{context.result}</h1>
            <p>Cotação do dólar: $1,00 = R$ {pFloat(context.coins.bid)} </p>
            <p>Total em dólar sem imposto $ {pFloat(context.dolar)} </p>
            <p>Total em dólar com imposto {pFloat(context.result / context.coins.bid)}</p>
            <p>Total em real sem imposto R$ {pFloat(context.dolar * context.coins.bid)}</p>
            <p>Taxa dinheiro é de 1,1%</p>
            <p>Taxa cartão é de 6,4%</p>
            </DivResults>
            </Container>
        </Div>
    )
}

export default Results
