import styled, {css} from 'styled-components'

export const Container = styled.div`
    text-align: start;
    div {
        span {
            color: var(--red);
        }
    }
`

export const InputContainer = styled.div`
    background: var(--gray2);
    border-radius: 10px;
    border: 2px solid var(--gray);
    padding: 1rem;
    width: 100%;
    display: flex;
    transition: 0.4s;

    ${props => props.isErrored && css`
        border-color: var(--red);
        svg {
            color: var(--red);
        }
    `}

    input {
        background: transparent;
        align-items: center;
        flex: 1;
        border: 0;
        color: var(--gray0);
        &::placeholder{
            color: var(--gray1);
        }
    }

    svg{
        margin-right: 16px;
    }
`