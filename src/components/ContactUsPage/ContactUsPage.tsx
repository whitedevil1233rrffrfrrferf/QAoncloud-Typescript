'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import styles from './ContactUsPage.module.css'; 
import FooterAll from '../Common/FooterAll/FooterAll';

type Tab = 'business' | 'career';

export default function ContactUsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('business');
  const [privacyChecked, setPrivacy] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /* ── Business state ── */
  const [biz, setBiz] = useState({
    firstName: '', lastName: '', company: '', workEmail: '',
    phone: '', country: '', service: '', howHeard: '', budgetRange: '', message: '',
  });

  /* ── Career state ── */
  const [career, setCareer] = useState({
    firstName: '', lastName: '', email: '', phone: '', jobRole: '', location: '',
  });

  const handleFile = (file: File | null) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { alert('File exceeds 5 MB'); return; }
    if (activeTab === 'career' && file.type !== 'application/pdf') { alert('Only PDF files accepted'); return; }
    setFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const switchTab = (tab: Tab) => {
    setActiveTab(tab); setFile(null); setPrivacy(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleBizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyChecked) { alert('Please agree to the privacy policy'); return; }
    console.log('Business submit', biz, uploadedFile);
  };

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyChecked) { alert('Please agree to the privacy policy'); return; }
    console.log('Career submit', career, uploadedFile);
  };

  /* ── Shared upload zone ── */
  const UploadZone = ({ accept }: { accept?: string }) => (
    <div
      className={`${styles.dropZone} ${dragOver ? styles.dropZoneActive : ''}`}
      onDragOver={e => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
    >
      {uploadedFile ? (
        <div className={styles.uploadedFile}>
          <span>{uploadedFile.name}</span>
          <button
            type="button"
            className={styles.removeFile}
            onClick={() => { setFile(null); if (fileInputRef.current) fileInputRef.current.value = ''; }}
          >✕</button>
        </div>
      ) : (
        <>
          <p className={styles.dropText}>Drag and drop file here</p>
          <p className={styles.dropOr}>Or</p>
          <button type="button" className={styles.browseBtn} onClick={() => fileInputRef.current?.click()}>
            Browse File
          </button>
        </>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        hidden
        onChange={e => handleFile(e.target.files?.[0] ?? null)}
      />
    </div>
  );

  return (
    <div className={styles.contactPage}>

      {/*  HEADER  */}
      <header className={styles.headerSection}>
        {/* Shadow ellipses */}
        <div className={styles.ellipse2017} />
        <div className={styles.ellipse2018} />

        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image src="/logos/qaoncloud3dlogo.png" alt="QAonCloud" width={220} height={220} priority />
          </Link>
        </div>
        <h1 className={styles.headerTitle}>Contact Us</h1>
      </header>

      {/* MAIN  Frame */}
      <main className={styles.mainContent}>
        <div className={styles.contentContainer}>

          {/* LEFT: Find Us  */}
          <aside className={styles.leftSection}>
            <div className={styles.contactCard}>
              <h2 className={styles.cardTitle}>Find Us</h2>

              <div className={styles.contactItems}>
                {/* Address */}
                <div className={styles.contactItem}>
                  <FiMapPin className={styles.icon} />
                  <p className={styles.contactValue}>
                    39159 Paseo Padre Pkwy ste 207, Fremont, California 94538, USA.
                  </p>
                </div>

                <div className={styles.divider} />

                {/* Phone */}
                <div className={styles.contactItem}>
                  <FiPhone className={styles.icon} />
                  <p className={styles.contactValue}>+1 (415) 573-3307</p>
                </div>

                <div className={styles.divider} />

                {/* Email */}
                <div className={styles.contactItem}>
                  <FiMail className={styles.icon} />
                  <p className={styles.contactValue}>contactus@qaoncloud.com</p>
                </div>
              </div>
            </div>
          </aside>

          {/* ── RIGHT: Tabbed forms ── */}
          <section className={styles.rightSection}>

            {/* Tabs   */}
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activeTab === 'business' ? styles.tabActive : ''}`}
                onClick={() => switchTab('business')}
              >
                Business
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'career' ? styles.tabActive : ''}`}
                onClick={() => switchTab('career')}
              >
                Career
              </button>
            </div>

            {/*  BUSINESS FORM  */}
            {activeTab === 'business' && (
              <form onSubmit={handleBizSubmit} className={styles.form}>

                {/* Upload (Frame 459) */}
                <div className={styles.uploadSection}>
                  <label className={styles.uploadLabel}>Upload Document (max 5MB)</label>
                  <UploadZone />
                </div>

                {/* Row 1: First Name + Last Name */}
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>First Name <span className={styles.req}>*</span></label>
                    <input className={styles.formInput} placeholder="Enter Here" value={biz.firstName}
                      onChange={e => setBiz(p => ({ ...p, firstName: e.target.value }))} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Last Name <span className={styles.req}>*</span></label>
                    <input className={styles.formInput} placeholder="Enter Here" value={biz.lastName}
                      onChange={e => setBiz(p => ({ ...p, lastName: e.target.value }))} required />
                  </div>
                </div>

                {/* Row 2: Company + Work Email */}
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Company <span className={styles.req}>*</span></label>
                    <input className={styles.formInput} placeholder="Enter Here" value={biz.company}
                      onChange={e => setBiz(p => ({ ...p, company: e.target.value }))} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Work Email <span className={styles.req}>*</span></label>
                    <input className={styles.formInput} type="email" placeholder="Enter Here" value={biz.workEmail}
                      onChange={e => setBiz(p => ({ ...p, workEmail: e.target.value }))} required />
                  </div>
                </div>

                {/* Row 3: Phone + Country */}
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Phone <span className={styles.req}>*</span></label>
                    <input className={styles.formInput} type="tel" placeholder="Enter Here" value={biz.phone}
                      onChange={e => setBiz(p => ({ ...p, phone: e.target.value }))} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Country <span className={styles.req}>*</span></label>
                    <select className={styles.formSelect} value={biz.country}
                      onChange={e => setBiz(p => ({ ...p, country: e.target.value }))} required>
                      <option value="">Select</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>India</option>
                      <option>Australia</option>
                      <option>Canada</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Service + How heard */}
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Service I am interested in <span className={styles.req}>*</span></label>
                    <select className={styles.formSelect} value={biz.service}
                      onChange={e => setBiz(p => ({ ...p, service: e.target.value }))} required>
                      <option value="">Select</option>
                      <option>Functional Testing</option>
                      <option>Performance Testing</option>
                      <option>Security Testing</option>
                      <option>Automation Testing</option>
                      <option>Compliance Testing</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>How did you hear about us? <span className={styles.req}>*</span></label>
                    <select className={styles.formSelect} value={biz.howHeard}
                      onChange={e => setBiz(p => ({ ...p, howHeard: e.target.value }))} required>
                      <option value="">Select</option>
                      <option>Google Search</option>
                      <option>LinkedIn</option>
                      <option>Referral</option>
                      <option>Social Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Budget range */}
                <div className={styles.formGroupFull}>
                  <label className={styles.formLabel}>My budget range <span className={styles.req}>*</span></label>
                  <select className={styles.formSelect} value={biz.budgetRange}
                    onChange={e => setBiz(p => ({ ...p, budgetRange: e.target.value }))} required>
                    <option value="">Select</option>
                    <option>Under $5,000</option>
                    <option>$5,000 – $15,000</option>
                    <option>$15,000 – $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>

                {/* How can we help   */}
                <div className={styles.formGroupFull}>
                  <label className={styles.formLabel}>How can we help? <span className={styles.req}>*</span></label>
                  <textarea className={styles.formTextarea} placeholder="Enter Here"
                    value={biz.message} onChange={e => setBiz(p => ({ ...p, message: e.target.value }))} required />
                </div>

                {/* Privacy  */}
                <div className={styles.privacyRow}>
                  <input type="checkbox" id="priv-b" className={styles.checkbox}
                    checked={privacyChecked} onChange={e => setPrivacy(e.target.checked)} />
                  <label htmlFor="priv-b" className={styles.privacyLabel}>
                    Your privacy is important to us. By filling this form you agree to our{' '}
                    <Link href="/privacy-policy" className={styles.privacyLink}>privacy policy</Link> *
                  </label>
                </div>

                {/* Send Request button */}
                <button type="submit" className={styles.submitButton}>Send Request</button>
              </form>
            )}

            {/*  CAREER FORM  */}
            {activeTab === 'career' && (
              <form onSubmit={handleCareerSubmit} className={styles.form}>

                {/* Upload PDF  */}
                <div className={styles.uploadSection}>
                  <label className={styles.uploadLabel}>
                    Upload Resume PDF only (max 5MB) <span className={styles.req}>*</span>
                  </label>
                  <UploadZone accept=".pdf" />
                </div>

                {/* Row 1: First Name + Last Name */}
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>First Name <span className={styles.req}>*</span></label>
                    <input className={styles.formInput} placeholder="Enter Here" value={career.firstName}
                      onChange={e => setCareer(p => ({ ...p, firstName: e.target.value }))} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Last Name <span className={styles.req}>*</span></label>
                    <input className={styles.formInput} placeholder="Enter Here" value={career.lastName}
                      onChange={e => setCareer(p => ({ ...p, lastName: e.target.value }))} required />
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email <span className={styles.req}>*</span></label>
                    <input className={styles.formInput} type="email" placeholder="Enter Here" value={career.email}
                      onChange={e => setCareer(p => ({ ...p, email: e.target.value }))} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Phone <span className={styles.req}>*</span></label>
                    <input className={styles.formInput} type="tel" placeholder="Enter Here" value={career.phone}
                      onChange={e => setCareer(p => ({ ...p, phone: e.target.value }))} required />
                  </div>
                </div>

                {/* Row 3: Job Role + Location */}
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Job Role <span className={styles.req}>*</span></label>
                    <input className={styles.formInput} placeholder="Enter Here" value={career.jobRole}
                      onChange={e => setCareer(p => ({ ...p, jobRole: e.target.value }))} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Location</label>
                    <input className={styles.formInput} placeholder="Enter Here" value={career.location}
                      onChange={e => setCareer(p => ({ ...p, location: e.target.value }))} />
                  </div>
                </div>

                {/* Privacy */}
                <div className={styles.privacyRow}>
                  <input type="checkbox" id="priv-c" className={styles.checkbox}
                    checked={privacyChecked} onChange={e => setPrivacy(e.target.checked)} />
                  <label htmlFor="priv-c" className={styles.privacyLabel}>
                    Your privacy is important to us. By filling this form you agree to our{' '}
                    <Link href="/privacy-policy" className={styles.privacyLink}>privacy policy</Link> *
                  </label>
                </div>

                {/* Submit button */}
                <button type="submit" className={styles.submitButton}>Submit</button>
              </form>
            )}

          </section>
        </div>
      </main>
      <FooterAll />
    </div>
  );
}