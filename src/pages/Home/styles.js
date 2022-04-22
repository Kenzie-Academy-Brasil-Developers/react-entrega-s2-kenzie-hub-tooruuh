import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 38px;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-top: 32px;
  padding: 0 120px;

  button {  
    max-width: 100px;
    height: 50px;
    margin: 0;
    background: var(--gray3);
  }
  button:hover{
      background: var(--gray1);
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
  padding: 0 120px;

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
 padding: 0 38px;
 margin-top: 32px;
 display: flex;
 flex-wrap: wrap;

 button {  
    max-width: 100px;
    height: 50px;
    margin: 0;
    background: var(--gray3);
  }
  button:hover{
      background: var(--gray1);
  }
`

export const Topo = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 75px;
 margin-bottom: 20px;
 display: flex;
 flex-wrap: wrap;
 width: 100%;

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
`