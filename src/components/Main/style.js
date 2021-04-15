import styled from 'styled-components'

export const Container = styled.main` 
    padding: 15rem;

    align-items: center;
    justify-content: center;
    font-family: 'Markazi Text', serif;

    background-size: cover;
    background-position: right;
    background-image: url('https://cdn.mos.cms.futurecdn.net/YohygrXxwsroDctye3q3ij.jpg');

    h2 {
        color: #fff;

        font-size: 7.5rem;
        font-weight: 400;
    }

    @media (max-width: 1140px) {
        h2 {
            font-size: 6.5rem;
        }
    }

    @media (max-width: 1080px) {
        padding: 15rem 5rem 15rem;
    }

    @media (max-width: 900px) {
        padding: 10rem 5rem 10rem;
    }

    @media (max-width: 600px) {
        h2 {
            font-size: 5.5rem;
        }
        padding: 7.5rem 2rem 7.5rem;
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 3.5rem;
        }

        padding: 5.5rem 1rem 5.5rem;
    }
`