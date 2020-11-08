import React from 'react';
import Container from './Container';
import styles from './footer.module.css';

export default function Footer(params) {
    return (
        <section className={styles.footer_section}>
        <footer className={styles.footer}>
          <Container>
              <div className={styles.footer_contact}>
                  <a href="tel:2813334444">281-333-4444</a>
                  <a href="mailto:yancycarter@yahoo.com">yancycarter@yahoo.com</a>
              </div>
          </Container>
            
          
            </footer>
      </section>
    )
}