import styled from 'styled-components'

export const Container = styled.main`
    display: flex;

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

    @media (max-width: 695px) {
        padding-top: 0;
    }

    @media (max-width: 650px) {
        padding-top: 0;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    @media (max-width: 550px) {
        padding-top: 0;
        padding-left: 1rem;
        padding-right: 1rem;

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

    margin-bottom: 3rem;

    color: #000;
    font-weight: 400;
    font-size: 3.5rem;
   }

   .reviews-container {
        padding: 2rem;

        display: grid;
        gap: 2.5rem;
        grid-template-columns: repeat(4, 1fr);
   }

    .tlou1,
    .tlou2,
    .uncharted4,
    .lostlegacy {
        height: 500px;
        width: 300px;
   }

   a {
       text-decoration: none;
   }

   h3 {
    color: #000;
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 3rem; 
   }

   img {
        height: 350px;
        width: 300px;

        border-radius: 0.5rem;
        object-fit: cover;
   }

   @media (max-width: 1405px) {
       .reviews-container {
            grid-template-columns: repeat(3, 1fr);
       }
   }

   @media (max-width: 1085px) {
       .reviews-container {
            grid-template-columns: repeat(2, 1fr);
       }
   }

   @media (max-width: 695px) {
        .tlou1,
        .tlou2,
        .uncharted4,
        .lostlegacy {
            height: 300px;
            width: 200px;
        }

        h3 {
            font-weight: 500;
            font-size: 2rem;  
        }

        img {
                height: 250px;
                width: 200px;
        }
   }

   @media (max-width: 550px) {
        margin-top: 2.5rem;

        h2 {
            font-size: 2.5rem;
        }
    }

    @media (max-width: 495px) {
        h2 {
            margin-bottom: 0.5rem;
        }

        .reviews-container {
            grid-template-columns: repeat(1, 1fr)
        }

        .tlou1,
        .tlou2,
        .uncharted4,
        .lostlegacy {
            height: 300px;
            width: 200px;
        }

        h3 {
            font-weight: 400;
            font-size: 2rem;  
        }

        img {
                height: 250px;
                width: 200px;
        }

    }
`