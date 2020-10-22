import Head from 'next/head'
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

      <Nav />
     {/* <h1 className="text-5xl">Get Help, Get Results, Get Paid</h1> */}
    </div>
  )
}
