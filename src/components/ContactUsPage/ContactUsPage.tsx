'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import styles from './ContactUsPage.module.css'; 
import FooterAll from '../Common/FooterAll/FooterAll';
import emailjs from '@emailjs/browser';
type Tab = 'business' | 'career';

export default function ContactUsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('business');
  const [privacyChecked, setPrivacy] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  /* ── Business state ── */
  const [biz, setBiz] = useState({
    firstName: '', lastName: '', company: '', workEmail: '',
    phone: '', country: '', services: [] as string[], howHeard: '', budgetRange: '', message: '',
  });

  /* ── Career state ── */
  const [career, setCareer] = useState({
    firstName: '', lastName: '', email: '', phone: '', jobRole: '', location: '',
  });

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

 const handleBizSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!privacyChecked) { alert('Please agree to privacy policy'); return; }
  if (!biz.firstName || !biz.lastName || !biz.workEmail || !biz.phone) {
    alert('Please fill in all required fields'); return;
  }

  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_pe85kpk',    // ← paste your Service ID here
      'template_lr226wc',   // ← paste your Template ID here
      {
        name: biz.firstName,           // for {{name}} in subject
        from_name: `${biz.firstName} ${biz.lastName}`,
        from_email: biz.workEmail,
        company: biz.company || 'Not provided',
        phone: biz.phone,
        country: biz.country || 'Not provided',
        services: biz.services.join(', ') || 'Not provided',
        how_heard: biz.howHeard || 'Not provided',
        budget: biz.budgetRange || 'Not provided',
        message: biz.message || 'No message',
      },
      'ud7uHNDNt2PuqT5zM'     // ← paste your Public Key here
    );
    await emailjs.send('service_pe85kpk', 'template_2s7nubr', {
      user_name: biz.firstName,
      user_email: biz.workEmail,
    }, 'ud7uHNDNt2PuqT5zM');
    setSubmitStatus('success');
    setBiz({
      firstName: '', lastName: '', company: '', workEmail: '',
      phone: '', country: '', services: [], howHeard: '', budgetRange: '', message: '',
    });
    setFile(null);
    setPrivacy(false);

  } catch (error) {
    console.error('EmailJS error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleCareerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyChecked) { alert('Please agree to privacy policy'); return; }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'career',
          formData: career,
          file: uploadedFile ? {
            name: uploadedFile.name,
            size: uploadedFile.size
          } : null
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setCareer({
          firstName: '', lastName: '', email: '', phone: '', jobRole: '', location: '',
        });
        setFile(null);
        setPrivacy(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        setSubmitStatus('error');
        alert(data.error || 'Failed to send application. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              {/* <button
                className={`${styles.tab} ${activeTab === 'career' ? styles.tabActive : ''}`}
                onClick={() => switchTab('career')}
              >
                Career
              </button> */}
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
                    <label className={styles.formLabel}>Company</label>
                    <input className={styles.formInput} placeholder="Enter Here" value={biz.company}
                      onChange={e => setBiz(p => ({ ...p, company: e.target.value }))} />
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
                    <label className={styles.formLabel}>Country</label>
                    <select className={styles.formSelect} value={biz.country}
                      onChange={e => setBiz(p => ({ ...p, country: e.target.value }))}>
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
                    <label className={styles.formLabel}>Service I am interested in</label>
                    <div className={styles.multiSelectDropdown} ref={dropdownRef}>
                      <div 
                        className={styles.dropdownHeader}
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      >
                        <span>
                          {biz.services.length > 0 
                            ? `${biz.services.length} service${biz.services.length > 1 ? 's' : ''} selected`
                            : 'Select services'
                          }
                        </span>
                        <span className={styles.dropdownArrow}>{servicesDropdownOpen ? '▲' : '▼'}</span>
                      </div>
                      {servicesDropdownOpen && (
                        <div className={styles.dropdownContent}>
                          {['Functional Testing', 'Performance Testing', 'Security Testing', 'Automation Testing', 'Compliance Testing'].map(service => (
                            <label key={service} className={styles.dropdownItem}>
                              <input
                                type="checkbox"
                                className={styles.checkbox}
                                value={service}
                                checked={biz.services.includes(service)}
                                onChange={e => {
                                  const checked = e.target.checked
                                  setBiz(p => ({
                                    ...p,
                                    services: checked
                                      ? [...p.services, service]
                                      : p.services.filter(s => s !== service)
                                  }))
                                }}
                              />
                              {service}
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>How did you hear about us?</label>
                    <select className={styles.formSelect} value={biz.howHeard}
                      onChange={e => setBiz(p => ({ ...p, howHeard: e.target.value }))}>
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
                  <label className={styles.formLabel}>My budget range</label>
                  <select className={styles.formSelect} value={biz.budgetRange}
                    onChange={e => setBiz(p => ({ ...p, budgetRange: e.target.value }))}>
                    <option value="">Select</option>
                    <option>Under $5,000</option>
                    <option>$5,000 – $15,000</option>
                    <option>$15,000 – $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>

                {/* How can we help   */}
                <div className={styles.formGroupFull}>
                  <label className={styles.formLabel}>How can we help?</label>
                  <textarea className={styles.formTextarea} placeholder="Enter Here"
                    value={biz.message} onChange={e => setBiz(p => ({ ...p, message: e.target.value }))} />
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
                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    ✅ Your message has been sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    ❌ Failed to send message. Please try again.
                  </div>
                )}
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
                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    ✅ Your application has been sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    ❌ Failed to send application. Please try again.
                  </div>
                )}
              </form>
            )}

          </section>
        </div>
      </main> 
    </div>
  );
}