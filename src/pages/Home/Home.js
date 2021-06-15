import React from 'react'
import { Container, FormDiv, Logo } from './Home.style'
import LogoStone from '../../images/stone.png'
import GlobalStyle from '../../styles/globalStyle'
import useFetch from '../../hooks/useFetch'
import Input from '../../components/Input/Input'

const Home = () => {
    const coins = useFetch();

    return (
        <>
        <Container>
            <GlobalStyle />
            <Logo src={LogoStone}/>
            <p>Cotação do dia: R$ {coins.low}</p>
        </Container>
        <Input />
        </>
    )
}

export default Home

