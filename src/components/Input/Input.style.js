import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    
        p {
                font-weight: bold;

            }

    form{
        
        margin: 20px 50px;
            p {
                margin: 10px 0;
                font-size: 20px;
            }

            div{
                display: flex;
        
                @media screen and (max-width: 768px){
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

            }
        }
    }
`

export const Label = styled.label`
    margin: 20px;
`

export const InputStyle = styled.input`
    padding: 20px 15px;
    border: 1px solid #D7E0EB;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 5px 5px 5px #D7E0EB;
`

export const RadioBtnDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;

        input{
            margin-top: 16px;
            
            }

        label{
            margin: 15px; 
            
        }

`;