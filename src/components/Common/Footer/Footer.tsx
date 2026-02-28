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
      <div className={styles.container}>
        {/* Brand Section */}
        <div className={styles.brandSection}>
          <div className={styles.logo}> <img src="QAoncloud_logo.png" alt="QAoncloud" className={styles.qaoncloudLogo} /></div>
          <div className={styles.subtitle}>
            Strategic QA Unit of <img src="/logos/desicrew-logo.png" alt="desicrew" className={styles.desicrewLogo} /> 
          </div>
          <p className={styles.description}>
            Elevating software quality through next-gen testing solutions and
            AI-driven automation.
          </p>
          
          {/* Social Media Icons */}
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

        {/* Navigation Columns */}
        <div className={styles.columns}>
          <div className={styles.column}>
            <h4>Company</h4>
            <Link href="/About-us">About Us</Link>
            <Link href="/Contact-us">Contact Us</Link>
          </div>

          <div className={styles.column}>
            <h4>Industries</h4>
            <Link href="Fintech">FinTech</Link>
            <Link href="HealthCare">HealthTech</Link>
            <Link href="Saas">SaaS</Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <span> © 2026 QAonCloud. All rights reserved.</span>
        <div className={styles.legal}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}