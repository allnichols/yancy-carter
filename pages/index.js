import Head from 'next/head';
import Link from 'next/link';
import Container from '../components/Container';
import HomeForm from '../components/HomeForm';
import Footer from '../components/footer';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="stylesheet" href="https://use.typekit.net/pou0knh.css"></link>
      </Head>

      <Container>
        <Nav />
      </Container>
    <section className={styles.above_the_fold}>
      <Container>
        <div className={styles.cta_box}>
          <div className={styles.cta_box_content}>
            <h1 className={styles.main_cta}>Get Help, <br/>Get Results, <br/>Get Paid</h1>
            <h4 className={styles.sub_cta}>It starts with the right firm, the right attorney and the right strategy</h4>
            <Link href="/contact" replace>
              <a className={styles.cta_btn}>Get in Touch</a>
            </Link>
          </div>
          <div className={styles.cta_box_imgBox} style={{backgroundImage: 'url(/yancy-chair.gif)'}}>
            
          </div>
        </div>

      </Container>
    </section>
      
    
    <section className={styles.section_about}> 
      <Container>
       <div className={styles.about_box}>
        <div className={styles.about_text} id="animate-text">
              <h4 className="small-header-light">About</h4>
              <h1>Yancy Carter</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Nihil quisquam dicta cum quaerat iste vero fuga asperiores 
                  in culpa fugiat blanditiis, suscipit ducimus magnam? 
                  Inventore quas nesciunt explicabo fuga magni?</p>
              <a className="btn-main" href="/about">Learn More</a>
          </div>
        {/* stats container */}
          <div className={styles.stats_container}> 
          <div className={styles.stats_box}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-certificate" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
                <circle cx="6" cy="14" r="3" />
                <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
            </svg>
                
                <hr />
              <p>Trusted with over 30 years of Experience.</p>
              
          </div>

          <div className={styles.stats_box}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon-briefcase" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                <line x1="12" y1="12" x2="12" y2="12.01" />
                <path d="M3 13a20 20 0 0 0 18 0" />
             </svg>
                
                  <hr/>
                <p>Over 300 Legal cases.</p>
          </div>

          <div className={styles.stats_box}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon-coin" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                  <path d="M12 6v2m0 8v2" />
                </svg>
                <hr/>
              <p>$1 Million in recovered assets.</p>
          </div>
          
        </div>
       </div>
       

      </Container>
    </section>

    <section className={styles.section_practiceAreas}>
      <Container>
        <div className={styles.practice_areas}>
          <div className={styles.practice_areas_imgBox} style={{backgroundImage: 'url(/Practice.png)'}}>
            
        </div>
          <div className={styles.practice_areas_links}>
               <h4 className="small-header-dark">Practice Areas</h4>
                <h1 className={styles.practice_tag}>Let's Seek Justice Together</h1>
              <ul>
                    <li><a href="#">Sexual Harrasment</a></li>
                    <li><a href="#">Workplace Discrimination</a></li>
                    <li><a href="#">Hostile Work Environment</a></li>
                    <li><a href="#">Wages and Compensation</a></li>
              </ul>
              <ul>
              <li><a href="#">Wrongful Termination</a></li>
                    <li><a href="#">Personal Injury</a></li>
                    <li><a href="#">Criminal Law</a></li>
              </ul>
          </div>
        </div>
      </Container>
    </section>

    <section className="faq">
       <Container>
         <div className="faq-box">
           <div className="faq_imgBox"></div>

            <div className="one-half column faq_content">
              <h4 className="small-header-dark"> FAQ </h4>
                  <h1>
                      Got a Question?
                  </h1>
                  <p>
                  Most people filing suit against an employer are navigating the legal system for the first time. 
                  The system is complicated and often leaves people with many questions. 
                  Thankfully, I have an answer.
                  </p>
                  <a href="#" className="btn-main_black">Learn More</a>
            </div>
         </div>      
       </Container>
        
    </section>
    <section className={styles.testimonials}>
      <Container>
        <div className={styles.testimonials_box}>
          <h1>Testimonials</h1>
          <div className={styles.testimonial}>
              <p>
                  "Words cannot express my gratitude for the work you have done for me. 
                  Thank you and your firm for doing such an excellent job representing me in my discrimination case.  
                  The battle was long and hard but your diligence was just what I needed to go up against such a vicious giant.  
                  Your straightforward and focused approached coupled with your knowledge of the law was exactly what I needed. 
                  You eulogized injustice as you spoke for all Americans who have endured pain or inequality of any kind whether it be race, color, religion, gender, national origin or age.  
                  The next day when the unanimous verdict by all 7 jurors was rendered in favor of the plaintiff, I was filled with joy." 
                  </p>
                  <hr/>
                  <p>Edwina/ Unanimous Verdict /Discrimination Case</p>
          </div>
        </div>
        
        </Container>
      </section>

      <HomeForm />

      <Footer />
      
      {/* <section className="footer-section">
        <footer className="container footer">
          <Container>

            <div className=" footer-nav">
            
              </div>

              <div className="one-half column footer-contact">
                  <a href="tel:2813334444">281-333-4444</a>
                  <a href="mailto:yancycarter@yahoo.com">yancycarter@yahoo.com</a>
              </div>
          </Container>
            
          
            </footer>
      </section> */}

    </div>
  )
}
