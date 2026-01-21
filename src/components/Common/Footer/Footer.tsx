import styles from "./Footer.module.css";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.brand}>
          <div className={styles.logo}>QAonCloud</div>
          <p className={styles.description}>
            Elevating software quality through next-gen testing solutions and
            AI-driven automation.
          </p>

          <div className={styles.socials}>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Columns */}
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
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <span>© 2025 QAonCloud. All rights reserved.</span>
        <div className={styles.legal}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
