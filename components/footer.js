import React from 'react';
import Container from './Container';
import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer(params) {
    return (
        <section className={styles.footer_section}>
        <footer className={styles.footer}>
          <Container>
            <div className={styles.footer_cont}>
              <div className={styles.footer_contact}>
                <div style={{ display: 'flex'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg> 
                    <a style={{ paddingLeft: 10 }} href="tel:5043193625">504-319-3625</a>
                </div>

                <div style={{ display: 'flex'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                  <a style={{ paddingLeft: 10 }} href="mailto:yancycarter@yahoo.com">yancycarter@yahoo.com</a>
                </div>   
              </div>
              <div className={styles.footer_links}>
                  <ul>
                        <li>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li> 
                        <li>
                            <Link href="/practice-areas">
                                Practice Areas
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq">
                                FAQ
                            </Link>
                        </li>
                  </ul>
               </div>
              </div>
          </Container>
            
          
            </footer>
      </section>
    )
}