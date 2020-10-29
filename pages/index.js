import Head from 'next/head';
import Link from 'next/link';
import Main from '../components/Container';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        {/* SEO goes inside the head */}
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/pou0knh.css"></link>
      </Head>
    <Main>
      <Nav />

      <div className={styles.call_out}>
        <div className={styles.call_out_text}>
          <h1>Get Help, <br/>Get Results, <br/>Get Paid</h1>
          <h4 className={styles.sub_cta}>It starts with the right firm, the right attorney and the right strategy</h4>
          <Link href="/contact" replace>
            <a className={styles.call_out_btn}>Get in Touch</a>
          </Link>
        </div>
        <div className={styles.call_out_imgBox}>
          <img src="/yancy-chair.gif" alt="Yancy Carter - Lawyer"/>
        </div>
      </div>

    </Main>
      
     {/* <h1>Get Help, Get Results, Get Paid</h1> */}
    </div>
  )
}
