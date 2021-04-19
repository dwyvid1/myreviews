import styled from 'styled-components'

export const Container = styled.div` 
    display: block;
    
    padding: 10rem 10rem 10rem;
    text-align: center;
    font-family: 'Markazi Text', serif;

    h2 {
        color: #000;

        font-size: 7.5rem;
        font-weight: 400;
    }

    h3 {
        margin-top: 2rem;
        margin-bottom: 2rem;

        font-size: 2.5rem;
        font-weight: 400;
    }

    a {
        color: #000;

        font-size: 2.5rem;
        font-weight: 400;
        cursor: pointer;
    }

    @media (max-width: 1180px) {
        padding: 8rem 8rem 8rem;

        h2 {
            font-size: 6.5rem;
        }
    }

    @media (max-width: 1080px) {
        padding: 7rem 7rem 7rem;

        h2 {
            font-size: 5.5rem;
        }
    }

    @media (max-width: 900px) {
        padding: 6rem 1rem 6rem;

        h3, a {
            font-size: 2rem;
        }
    }

    @media (max-width: 600px) {
        padding: 6rem 1rem 6rem;

        h2 {
            font-size: 4.5rem;
        }

        h3, a {
            font-size: 2rem;
        }
    }

    @media (max-width: 480px) {
        padding: 5.5rem 1rem 5.5rem;
        
        h2 {
            font-size: 3.5rem;
        }

        h3, a {
            font-size: 1.7rem;
        }

    @media (max-width: 350px) {
        padding: 3rem 0.5rem 3rem;

        h2 {
            font-size: 3rem;
        }

        h3, a {
            font-size: 1.5rem;
        }
    }
    
    }
`