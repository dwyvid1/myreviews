import styled from  'styled-components'

export const Container = styled.footer`
    height: 7rem;
    width: 100%;
    margin-top: 10rem;
    justify-content: space-between;

    background: #000;

    @media (max-width: 900px) {
        margin-top: 6rem;
    }

    @media (max-width: 480px) {
        margin-top: 5.5rem;
    }

    @media (max-width: 354px) {
        height: 7.5rem;
        margin-top: 3.3rem;
    }
`

export const Content = styled.div`
    padding: 3.5rem 2rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;

    font-family: 'Markazi Text', serif;

    @media (max-width: 345px) {
        padding: 3rem 1.5rem 2rem;
    }
`