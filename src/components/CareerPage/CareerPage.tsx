'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import styles from './CareerPage.module.css';

export default function CareerPage() {
  const [privacyChecked, setPrivacy] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [career, setCareer] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleFile = (file: File | null) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { alert('File exceeds 5 MB'); return; }
    const allowed = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(file.type)) { alert('Only PDF or DOCX files accepted'); return; }
    setFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyChecked) { alert('Please agree to privacy policy'); return; }
    if (!uploadedFile) { alert('Please upload your resume'); return; }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'career',
          formData: career,
          file: { name: uploadedFile.name, size: uploadedFile.size },
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setCareer({ firstName: '', lastName: '', email: '', phone: '' });
        setFile(null);
        setPrivacy(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        setSubmitStatus('error');
        alert(data.error || 'Failed to send application. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactPage}>

      {/* ── HEADER ── */}
      <header className={styles.headerSection}>
        <div className={styles.ellipse2017} />
        <div className={styles.ellipse2018} />
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image src="/logos/qaoncloud3dlogo.png" alt="QAonCloud" width={220} height={220} priority />
          </Link>
        </div>
        <h1 className={styles.headerTitle}>Join Us</h1>
      </header>

      {/* ── MAIN ── */}
      <main className={styles.mainContent}>
        <div className={styles.contentContainer}>

          {/* ── LEFT: Find Us (same as ContactUsPage) ── */}
          <aside className={styles.leftSection}>
            <div className={styles.contactCard}>
              <h2 className={styles.cardTitle}>Find Us</h2>
              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <FiMapPin className={styles.icon} />
                  <p className={styles.contactValue}>
                    39159 Paseo Padre Pkwy ste 207, Fremont, California 94538, USA.
                  </p>
                </div>
                <div className={styles.divider} />
                <div className={styles.contactItem}>
                  <FiPhone className={styles.icon} />
                  <p className={styles.contactValue}>+1 (415) 573-3307</p>
                </div>
                <div className={styles.divider} />
                <div className={styles.contactItem}>
                  <FiMail className={styles.icon} />
                  <p className={styles.contactValue}>contactus@qaoncloud.com</p>
                </div>
              </div>
            </div>
          </aside>

          {/* ── RIGHT: Career Form ── */}
          <section className={styles.rightSection}>
            <form onSubmit={handleSubmit} className={styles.form}>

              {/* Row 1: First Name + Last Name */}
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>First Name <span className={styles.req}>*</span></label>
                  <input
                    className={styles.formInput}
                    placeholder="Enter Here"
                    value={career.firstName}
                    onChange={e => setCareer(p => ({ ...p, firstName: e.target.value }))}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Last Name <span className={styles.req}>*</span></label>
                  <input
                    className={styles.formInput}
                    placeholder="Enter Here"
                    value={career.lastName}
                    onChange={e => setCareer(p => ({ ...p, lastName: e.target.value }))}
                    required
                  />
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email <span className={styles.req}>*</span></label>
                  <input
                    className={styles.formInput}
                    type="email"
                    placeholder="Enter Here"
                    value={career.email}
                    onChange={e => setCareer(p => ({ ...p, email: e.target.value }))}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Phone <span className={styles.req}>*</span></label>
                  <input
                    className={styles.formInput}
                    type="tel"
                    placeholder="Enter Here"
                    value={career.phone}
                    onChange={e => setCareer(p => ({ ...p, phone: e.target.value }))}
                    required
                  />
                </div>
              </div>

              {/* Upload Resume */}
              <div className={styles.uploadSection}>
                <label className={styles.uploadLabel}>
                  Upload Resume — PDF or DOCX only (max 5MB) <span className={styles.req}>*</span>
                </label>
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
                        onClick={() => {
                          setFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = '';
                        }}
                      >✕</button>
                    </div>
                  ) : (
                    <>
                      <p className={styles.dropText}>Drag and drop file here</p>
                      <p className={styles.dropOr}>Or</p>
                      <button
                        type="button"
                        className={styles.browseBtn}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        Browse File
                      </button>
                    </>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    hidden
                    onChange={e => handleFile(e.target.files?.[0] ?? null)}
                  />
                </div>
              </div>

              {/* Privacy */}
              <div className={styles.privacyRow}>
                <input
                  type="checkbox"
                  id="priv-c"
                  className={styles.checkbox}
                  checked={privacyChecked}
                  onChange={e => setPrivacy(e.target.checked)}
                />
                <label htmlFor="priv-c" className={styles.privacyLabel}>
                  Your privacy is important to us. By filling this form you agree to our{' '}
                  <Link href="/Privacy-policy" className={styles.privacyLink}>privacy policy</Link> *
                </label>
              </div>

              {/* Submit */}
              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>

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
          </section>

        </div>
      </main>
    </div>
  );
}