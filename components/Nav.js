import Link from 'next/link';
import {useRouter} from 'next/router';
import {useState} from 'react';
import styles from '../styles/Nav.module.css';


export default function Nav({slugs}){
    const [isOpen, setMenuState] = useState(false);
    const [isDropDownOpen, setDropDown] = useState(false);

    const router = useRouter();
    const { id } = router.query;
    console.log(slugs)

    function toggleMenu(){
        setMenuState(!isOpen);
    }

    function toggleDropdown() {
        setDropDown(!isDropDownOpen);
    }

    return(
    <header className={styles.Header}>
        <Link href="/">Yancy Carter</Link>
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
                <li>
                    <Link href="/practice-areas">
                        Practice Areas
                    </Link>
                </li>
               
            </ul>

            <div className={styles.Contact_Box_Mobile}>
                <a href="#">Email</a>
                <a href="#">Phone: 504-319-3625</a>
             </div>
        </nav>

        {/* Desktop / Tablet / Laptop Contacts */}
        <div className={styles.Contact_Box}>
            <a href="#">Email: yancycarter@yahoo.com</a>
            <a href="#">Phone: 504-319-3625</a>
        </div>
      

        <div className={`${styles.Burger} ${isOpen ? styles.Burger_Close : null}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
    )
}