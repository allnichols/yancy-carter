import Link from 'next/link';
import {useState} from 'react';
import styles from '../styles/Nav.module.css';


export default function Nav(){
    const [isOpen, setMenuState] = useState(false);
    const [isDropDownOpen, setDropDown] = useState(false);
   
    function toggleMenu(){
        setMenuState(!isOpen);
    }

    function toggleDropdown() {
        setDropDown(!isDropDownOpen);
    }

    return(
    <header className={styles.Header}>
        <h3><Link href="/">Yancy Carter</Link></h3>
        <nav className={`${styles.LinksContainer} ${isOpen ? styles.Open : null}`}>
            <ul>
                <li onClick={toggleMenu}>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li onClick={toggleMenu}>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li> 
                <li className={styles.SubList} onClick={toggleDropdown}>
                    Practice Areas
                    <ul className={`${styles.SubMenu} ${isDropDownOpen ? styles.OpenSubMenu_Mobile : null}`}>
                        {/* Presonal Injury, Criminal Law */}
                        <li>Personal Injury</li>
                        <li>Criminal Law</li>
                    </ul>
                </li>  
            </ul>

            <div className={styles.Contact_Box_Mobile}>
                <a href="#">Email</a>
                <a href="#">Phone</a>
             </div>
        </nav>

        {/* Desktop / Tablet / Laptop Contacts */}
        <div className={styles.Contact_Box}>
            <a href="#">Email</a>
            <a href="#">Phone</a>
        </div>
      

        <div className={`${styles.Burger} ${isOpen ? styles.Burger_Close : null}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
    )
}