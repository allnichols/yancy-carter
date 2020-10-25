import Head from 'next/head'
import Main from '../components/Container';
import Nav from '../components/Nav';
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        {/* SEO goes inside the head */}
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Main>
      <Nav />
    </Main>
      
     {/* <h1>Get Help, Get Results, Get Paid</h1> */}
    </div>
  )
}
