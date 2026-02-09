'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Button from '@/components/Common/Button/Button';
import styles from './ContactUsPage.module.css';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    companyName: '',
    role: '',
    requirements: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className={styles.contactPage}>
      {/* Centered Header Section */}
      <div className={styles.headerSection}>

        <div className={styles.headerContent}>
          <div className={styles.logoWrapper}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/Logo.png"
                alt="QAonCloud"
                width={150}
                height={150}
                priority
              />
            </Link>
          </div>

        <div className={styles.titleWrapper}>
  <span className={styles.figmaEllipse} aria-hidden />
  <h1 className={styles.headerTitl}>Contact Us</h1>
</div>




        </div>


      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          {/* Left Section - Find Us */}
          <div className={styles.leftSection}>
            <div className={styles.contactCard}>
              <h2 className={styles.cardTitle}>Find Us</h2>

              <div className={styles.contactItem}>

                <div className={styles.contactText}><FiMapPin className={styles.icon} />

                  <p className={styles.contactValue}>
                    39159 Paseo Padre Pkwy ste 207, Fremont, California 94538, USA
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>

                <div className={styles.contactText}>
                  <FiPhone className={styles.icon} />
                  <p className={styles.contactValue}>+1 (415) 573-3307</p>
                </div>
              </div>

              <div className={styles.contactItem}>

                <div className={styles.contactText}>
                  <FiMail className={styles.icon} />
                  <p className={styles.contactValue}>contactus@qaoncloud.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className={styles.rightSection}>
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Here"
                    className={styles.formInput}
                    required
                  />
                  <label className={styles.formLabel}>Name</label>
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Here"
                    className={styles.formInput}
                    required
                  />
                  <label className={styles.formLabel}>Email</label>
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Enter Here"
                    className={styles.formInput}
                    required
                  />
                  <label className={styles.formLabel}>Mobile Number</label>
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter Here"
                    className={styles.formInput}
                    required
                  />
                  <label className={styles.formLabel}>Company Name</label>
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    placeholder="Enter Here"
                    className={styles.formInput}
                    required
                  />
                  <label className={styles.formLabel}>Role</label>
                </div>

                <div className={styles.formGroup}>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    placeholder="Enter Here"
                    className={styles.formTextarea}
                    rows={4}
                    required
                  />
                  <label className={styles.formLabel}>Requirements</label>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;