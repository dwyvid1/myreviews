import styled from 'styled-components'

export const Container = styled.div` 
    display: block;

    padding: 10rem 10rem 7.5rem 10rem;
    text-align: center;
    font-family: 'Markazi Text', serif;

    h2 {
        color: #000;

        font-size: 7.5rem;
        font-weight: 400;
    }

    @media (max-width: 1180px) {
        padding: 8rem 8rem 6rem 8rem;

        h2 {
            font-size: 6.5rem;
        }
    }

    @media (max-width: 1080px) {
        padding: 7rem 7rem 5rem 7rem;

        h2 {
            font-size: 5.5rem;
        }
    }

    @media (max-width: 900px) {
        padding: 6rem 6rem 2.5rem 6rem;
    }

    @media (max-width: 696px) {
        padding: 6rem 1rem 6rem;
    }

    @media (max-width: 600px) {
        padding: 6rem 2rem 6rem;

        h2 {
            font-size: 4.5rem;
        }
    }

    @media (max-width: 550px) {
        padding: 6rem 6rem 3.5rem 6rem;
    }

    @media (max-width: 510px) {
        padding: 6rem 1rem 1rem 1rem;
    }

    @media (max-width: 480px) {
        padding: 5.5rem 1rem 1rem 1rem;
        
        h2 {
            font-size: 3.5rem;
        }

    @media (max-width: 350px) {
        padding-top: 3.3rem ;
        padding-left: 0.5rem; 
        padding-right: 0.5rem;
        padding-bottom: 1rem;

        h2 {
            font-size: 3rem;
        }

    }
    
    }
`