import styled from "styled-components";

export const Container = styled.button`
 background: var(--black);
 border-radius: 8px;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 width: 99%;
 height: 70px;
 padding: 5px 10px;
 border: 1px solid var(--black);
 margin: 10px;
 color: var(--gray0);
 cursor: pointer;

    h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    }

    h4 {
        color: var(--gray1);
    }

 &:hover{
     background-color: var(--gray1);

     h4 {
         color: var(--gray0);
     }
 }
`