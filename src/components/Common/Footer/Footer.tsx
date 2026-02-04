import styles from "./Footer.module.css";
import Link from "next/link";


import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Left */}
      <div className={styles.brand}>
        
        <div className={styles.logo}>QAonCloud</div>
        <p className={styles.description}>
          Elevating software quality through next-gen testing solutions and
          AI-driven automation.
        </p>
 
 {/* Bottom Bar */}
        <div className={styles.bottom}>
        {/* 
         /* Columns  
        <div className={styles.columns}>
          <div className={styles.column}>
            <h4>Company</h4>
            <Link href="#">About Us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Partners</Link>
            <Link href="#">News</Link>
          </div>

          <div className={styles.column}>
            <h4>Services</h4>
            <Link href="#">Automation</Link>
            <Link href="#">Performance</Link>
            <Link href="#">Security</Link>
            <Link href="#">Mobile QA</Link>
          </div>

          <div className={styles.column}>
            <h4>Resources</h4>
            <Link href="#">Case Studies</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Whitepapers</Link>
            <Link href="#">Documentation</Link>
          </div>
        </div>
      
      */}


       
          <span>© 2026 QAonCloud. All rights reserved.</span>
          <div className={styles.legal}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div> 

            <div className={styles.socialContainer}>
              <a
                href="https://twitter.com/QAonCloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className={styles.btnSocial}
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/QAonCloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.btnSocial}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/qaoncloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.btnSocial}
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/qaoncloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.btnSocial}
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/9884292684"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
                className={styles.btnSocial}
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.youtube.com/channel/UChWm_C88uOBgL5WzKy1zVxw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className={styles.btnSocial}
              >
                <FaYoutube />
              </a>
            </div>
          
         
        </div>
      </div>

    </footer>
  );
}
