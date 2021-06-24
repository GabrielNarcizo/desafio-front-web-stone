import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1{
        margin: 10px 0;
        color: #00AB63;
        font-size: 60px;
    }
    p{
        margin-top: 10px;
        opacity: 0.5;
    }
`

export const DivLogo = styled.div`
    display: flex;
    align-items: center;
`

export const DivResults = styled.div`
    margin-left: 125px;
    padding: 20px 15px;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 5px 5px 5px #D7E0EB;
        margin-bottom: 20px;
        background-color: #fff;
        border: 1px solid #D7E0EB;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;

        p{
            margin: 7px;
        }
    }
`