import styled from 'styled-components'

export const Container = styled.button`
 background: ${props => props.whiteSchema ? '#868E96' : '#FF577F'};
 color:  ${props => props.whiteSchema ? '#F8F9FA' : '#f5f5f5'};
 height: 45px;
 border-radius: 8px;
 border: 2px solid var(--gray3);
 font-family: "Roboto Mono", monospace;
 margin-top: 16px;
 width: 100%;
 transition: 0.5s;

 :hover {
    background: #59323F;
 }
`