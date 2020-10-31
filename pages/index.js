import Head from 'next/head';
import Link from 'next/link';
import Container from '../components/Container';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/pou0knh.css"></link>
      </Head>
    <Container>
      <Nav />

      <div className={styles.cta_box}>
        <div className={styles.cta_box_content}>
          <h1 className={styles.main_cta}>Get Help, <br/>Get Results, <br/>Get Paid</h1>
          <h4 className={styles.sub_cta}>It starts with the right firm, the right attorney and the right strategy</h4>
          <Link href="/contact" replace>
            <a className={styles.cta_btn}>Get in Touch</a>
          </Link>
        </div>
        <div className={styles.cta_box_imgBox} style={{backgroundImage: 'url(/yancy-chair.gif)'}}>
          {/* <img src="/yancy-chair.gif" alt="Yancy Carter - Lawyer"/> */}
        </div>
      </div>

    </Container>
      
     {/* <h1>Get Help, Get Results, Get Paid</h1> */}
    </div>
  )
}
