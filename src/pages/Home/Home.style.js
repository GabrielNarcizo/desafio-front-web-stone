import styled from "styled-components";
import Image from '../../images/ellipse.png'

export const Div = styled.div`
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    
    @media screen and (max-width: 768px){
        background-image: none;
        display: grid;
        grid-template-columns: 1fr;
    }
    
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    p{
        color: #45505E;
        font-weight: 500;
        font-style: normal;
        font-size: 18px;

        @media screen and (max-width: 768px){
            margin: 50px;
        }
    }

    @media screen and (max-width: 768px){
        display: grid;
        grid-template-columns: 1fr;
    }
`;

export const Logo = styled.img``;
 
