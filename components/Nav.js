import Link from 'next/link';
import {useState} from 'react';
import styles from '../styles/Nav.module.css';


export default function Nav(){
    const [isOpen, setMenuState] = useState(false);
   
    function toggleMenu(){
        setMenuState(!isOpen);
    }

    return(
    <header className={styles.Header}>
        <h3>Yancy Carter</h3>
        <nav className={`${styles.LinksContainer} ${isOpen ? styles.Open : null}`}>
            <ul>
                <li onClick={toggleMenu}>
                    <Link href="/">
                        home
                    </Link>
                </li>
                <li onClick={toggleMenu}>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
        <div className={styles.Burger} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
    )
}