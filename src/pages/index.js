import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Banner } from '../components/Banner'
import { GlobalStyle } from '../styles/globals'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <GlobalStyle />
    </>
  )
}