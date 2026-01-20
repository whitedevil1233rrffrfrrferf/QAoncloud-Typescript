'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/QAoncloud_logo.png" 
            alt="QAonCloud" 
            width={150} 
            height={40}
            priority
          />
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="/services" className={styles.navLink}>
            Services
          </Link>
          <Link href="/industries" className={styles.navLink}>
            Industries
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/resources" className={styles.navLink}>
            Resources
          </Link>
        </div>
        
        <button className={styles.ctaButton}>
          Talk to an expert
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
