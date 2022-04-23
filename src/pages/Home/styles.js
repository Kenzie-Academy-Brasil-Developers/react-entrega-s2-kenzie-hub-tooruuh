import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-top: 32px;
  padding: 0 180px;

  @media(max-width: 1100px){
    padding: 0px 100px;
  }

  @media(max-width: 700px){
    padding: 0px 30px;
  }

  @media(max-width: 370px){
    padding: 0px 30px;
  }

  button {  
    max-width: 100px;
    height: 50px;
    margin: 0;
    background: var(--gray3);
  }
  button:hover{
      background: var(--gray1);
      border-color: var(--gray1);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  flex: 1;
  margin: 32px 0 32px 0;
  padding: 0 180px;

  @media(max-width: 1100px){
    padding: 0px 100px;
  }

  @media(max-width: 700px){
    padding: 0px 30px;
  }

  @media(max-width: 450px){
    padding: 0px 30px;
    width: 46%;

    h4{
      margin-top: 16px;
    }
  }

  @media(max-width: 370px){
    padding: 0px 30px;
    width: 50%;

    h4{
      margin-top: 16px;
    }
  }

  h1 {
    color: var(--gray0);
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
  }

  h4 {
    color: var(--gray1);
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Linha = styled.span`
 width: 100%;
 border-bottom: 1px solid var(--gray3);
 margin: 16px 0 16px 0;
`

export const TecnologiasContainer = styled.div`
 display: flex;
 margin-top: 20px;

 button {  
    max-width: 100px;
    height: 50px;
    margin: 0;
    background: var(--gray3);
  }
  button:hover{
      background: var(--gray1);
      border-color: var(--gray1);
  }
`

export const Topo = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 180px;
 margin-bottom: 20px;
 display: flex;
 width: 100%;

 @media(max-width: 1100px){
    padding: 0px 100px;
  }

 @media(max-width: 700px){
    padding: 0px 30px;
  }

  @media(max-width: 450px){
    padding: 0px 20px;
  }

 > button {
    width: 40px;
    height: 40px;
 }
`

export const Main = styled.div`
 width: 81%;
 display: flex;
 flex-wrap: wrap;
 flex-direction: column;
 background: var(--gray3);
 border-radius: 4px;
 margin: auto;
 margin-top: 20px;
 padding: 16px;

 @media(max-width: 700px){
    width: 91%
  }
`

export const NoCard = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  svg {
    margin-right: 16px;
  }
`