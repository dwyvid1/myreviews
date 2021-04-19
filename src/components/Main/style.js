import styled from 'styled-components'

export const Container = styled.main`
    align-items: center;
    justify-content: center;

    font-family: 'Markazi Text', serif;

    h1 {
        font-size: 3.5rem;
        font-weight: 400;

        color: #000;
    }

    @media (max-width: 900px) {
        padding: 3.5rem 3.5rem;
    }

    @media (max-width: 650px) {
        padding: 2.5rem 2.5rem;
    }

    @media (max-width: 550px) {
        padding: 1rem 1rem;
        h1 {
            font-size: 2.5rem;
        }
    }
`

export const Reviews = styled.div`
    font-family: 'Markazi Text', serif;

   h2 {
    display: flex;
    justify-content: center;

    color: #000;
    font-weight: 400;
    font-size: 3.5rem;
   }

   h3 {
    color: #fff;
    font-weight: 400;
    font-size: 2.5rem;  
   }

   @media (max-width: 550px) {
        margin-top: 2.5rem;

        h2 {
            font-size: 2.5rem;
        }
    }
`