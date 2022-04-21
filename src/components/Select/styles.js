import styled, {css} from 'styled-components'

export const Container = styled.div`
    text-align: start;
    div {
        span {
            color: var(--red);
        }
    }
`

export const SelectContainer = styled.select`
    background: var(--gray2);
    border-radius: 10px;
    border: 2px solid var(--gray);
    padding: 1rem;
    width: 100%;
    display: flex;
    transition: 0.4s;
    color: var(--gray1);

    ${props => props.isErrored && css`
        border-color: var(--red);
        svg {
            color: var(--red);
        }
    `}

    option {
        background: var(--gray2);
        align-items: center;
        flex: 1;
        border: 0;
        color: var(--gray1);
        border-radius: 8px;
    }
`