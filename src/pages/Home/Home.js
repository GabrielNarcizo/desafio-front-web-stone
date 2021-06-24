import React from 'react'
import { Container, Div, Logo } from './Home.style'
import LogoStone from '../../images/stone.png'
import Input from '../../components/Input/Input'
import moment from 'moment'
import "moment/locale/pt-br";
import useFetch from '../../hooks/useFetch'

const Home = () => {

    const {coins} = useFetch()

    return (
        <Div>
        <Container>
            <Logo src={LogoStone}/>
            <p>{moment().format('LL [|] HH:mm [UTC] [|]')} Cotação do dia: R$ {coins.bid}</p>
        </Container>
        <Input />
        </Div>
    )
}

export default Home

