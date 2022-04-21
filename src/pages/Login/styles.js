import styled from 'styled-components'
import { keyframes } from 'styled-components';

export const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`

const appearFromLeft = keyframes`
 from {
     opacity: 0;
     transform: translate(-50px);
 }

 to {
     opacity: 1;
     transform: translate(0px);
 }
`

export const AnimationContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 animation: ${appearFromLeft} 1s;

 form {
     margin: 40px 0;
     width: 400px;
     text-align: center;
     background-color: var(--gray3);
     padding: 20px;
     box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
     border-radius: 8px;


     h1 {
         margin-bottom: 32px;
         color: var(--gray0);
         font-size: 18px;
         line-height: 28px;
         margin: 22px 0px;
         font-weight: 700;
     }

     > div {
         margin-top: 16px;

         > div {
             margin-bottom: 16px;
         }
     }

     p {
         margin: 25px 0 15px 0;
         color: var(--gray1);
     }
 }
`

export const HeaderLogin = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;

 img {
    width: 122.06px;
    height: 20px;
 }
`

