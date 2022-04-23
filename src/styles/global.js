import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: 0;
 }

 :root {
    --black:   #121214;
    --gray3:   #212529;
    --gray2:   #343B41;
    --gray1:   #868E96;
    --gray0:   #F8F9FA;
    --red:     #E83F5B;
    --Sucess:  #3FE864;
    --pink:    #FF577F;
    --backgroundModal: rgb(176 178 181 / 31%);
 }
 
 body{
    background: var(--black);
    color: var(--gray0);
 }

 body, input, button {
    font-family: 'PT Serif', serif;
    font-size: 1rem;
 }
    
 h1,h2,h3,h4,h5,h6 {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
 }
    
 button {
    cursor: pointer;
 }

 a {
    text-decoration: none;
 }
`