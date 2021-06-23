import React from 'react'
import { Container, Div, Logo } from './Home.style'
import LogoStone from '../../images/stone.png'
import Input from '../../components/Input/Input'

const Home = () => {

    return (
        <Div>
        <Container>
            <Logo src={LogoStone}/>
            <p>Cotação do dia: R$ </p>
        </Container>
        <Input />
        </Div>
    )
}

export default Home

