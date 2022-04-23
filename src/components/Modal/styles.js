import styled from 'styled-components'

export const ModalContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100vh;
 position: absolute;
 top: 0;
 left: 0;
 z-index: 1000;
 background: var(--backgroundModal);
 color: var(--gray0); 
 font-family: "Roboto Mono", monospace;
 transition: 0.5s;

`
export const Content = styled.div`
    background-color: var(--gray3);
    width: 25%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;

    @media(max-width: 1700px){
        width: 40%;
    }

    @media(max-width: 1300px){
        width: 60%;
    }

    @media(max-width: 900px){
        width: 60%;
    }

    @media(max-width: 550px){
        width: 80%;
        height: 400px;
    }

    @media(max-width: 300px){
        width: 80%;
        height: 400px;
    }
`

export const Topo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    background-color: var(--gray2);
    height: 20%;
    padding: 0 20px;
    border-radius: 10px 10px 0px 0px;



    h1 {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    }

    @media(max-width: 500px){
        h1 {
            font-size: 16px;
        }
    }

    button{
        width: 10%;
        margin: 0;
        background-color: transparent;
        font-size: 20px;
        color: var(--gray1);
        border: none;
        font-weight: 900;
    }
    button:hover{
        background-color: var(--gray1);
        color: var(--gray0);
    }
`
export const FormContainer = styled.form`
    padding: 0 20px;

    > div {
        > div {
            margin-bottom: 16px;

            @media(max-width: 500px){
                margin-top: 16px;
            }
        }
    }

    button {
        margin: 26px 0 26px 0;
    }
`