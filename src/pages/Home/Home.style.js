import styled from "styled-components";
import Image from '../../images/money.png'

export const Div = styled.div`
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    
    
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    h1{
        color: #45505E;
        font-weight: 500;
        font-style: normal;
        font-size: 18px;
    }
`;

export const Logo = styled.img`
    
`;

export const FormDiv = styled.div`
    display: flex;
`
