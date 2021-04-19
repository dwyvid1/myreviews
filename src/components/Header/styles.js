import styled from  'styled-components'

export const Container = styled.header`
    background-color: #000;
`

export const Content = styled.div`
    padding: 1rem  10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;

    font-family: 'Markazi Text', serif;

    h1, span {
        font-weight: 500;
    }

    @media (max-width: 900px) {
        padding: 1rem 1rem;
    }

    @media (max-width: 350px) {
        h1 {
            position: absolute;
        }

        h2 {
            color: #000;
        }

        align-items: center;
        justify-content: center;
    }
`