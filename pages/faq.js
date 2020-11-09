import Main from '../components/Container';
import Nav from '../components/Nav';
import Footer from '../components/footer';
import Head from 'next/head';
import styles from '../styles/accordion.module.css';
import { useState } from 'react';


const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = useState(false);
    return (
      <div className="accordion-wrapper">
        
        <div
          className={`${styles.accordion_title} ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
        </div>
        <div className={`${styles.accordion_item} ${!isOpen ? styles.collapsed : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };

export default function faq() {

    return(
        <>
         <Head>
          <title>Yancy Carter - Practice Areas</title>
          <link rel="stylesheet" href="https://use.typekit.net/pou0knh.css"></link>
         </Head>
        <Main>
            <Nav/>

        <div style={{marginTop:45}} >
            <h4 className="small-header-dark">FAQ</h4>
            <h1>Some Common Questions.</h1>
        </div>

        <div>
            <Accordion title="Hey">
                    Some Text and stuff    
             </Accordion>    

        </div>
            
        </Main>
        <Footer/>
        </>
    )
}