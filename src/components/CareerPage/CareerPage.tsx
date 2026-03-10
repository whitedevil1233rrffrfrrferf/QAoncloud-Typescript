'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
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

  const [errors, setErrors] = useState({ firstName: '', lastName: '', phone: '' });

  /* ── Validation helpers ── */
  const onlyLetters = (value: string) => /^[a-zA-Z\s\-']*$/.test(value);

  const isRepeatedDigits = (digits: string) => /^(\d)\1+$/.test(digits);
  const isSequentialDigits = (digits: string) => {
    const seqs = ['0123456789', '9876543210', '1234567890'];
    return seqs.some(s => digits.includes(s.slice(0, digits.length)));
  };

  const validatePhone = (value: string): string => {
    const trimmed = value.trim();
    if (!trimmed) return '';
    const digitsOnly = trimmed.replace(/\D/g, '');
    if (!/^\+?[0-9\s\-]{8,15}$/.test(trimmed)) return 'Enter a valid phone number (e.g. +1 415 555 2671)';
    if (digitsOnly.length < 7 || digitsOnly.length > 15) return 'Phone number must be between 7 and 15 digits';
    if (isRepeatedDigits(digitsOnly)) return 'Phone number cannot be all repeated digits';
    if (digitsOnly.length >= 10 && isSequentialDigits(digitsOnly)) return 'Phone number cannot be a sequential pattern';
    return '';
  };

  const handleNameChange = (value: string, field: 'firstName' | 'lastName') => {
    if (!onlyLetters(value)) {
      setErrors(p => ({ ...p, [field]: 'Name cannot contain numbers or special characters' }));
    } else {
      setErrors(p => ({ ...p, [field]: '' }));
    }
    setCareer(p => ({ ...p, [field]: value }));
  };

  const handlePhoneChange = (value: string) => {
    const sanitised = value.replace(/[^\d+\s\-]/g, '');
    setErrors(p => ({ ...p, phone: validatePhone(sanitised) }));
    setCareer(p => ({ ...p, phone: sanitised }));
  };

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

  /* ── Convert file to base64 ── */
  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        // Strip the data:...;base64, prefix — EmailJS needs raw base64
        const result = (reader.result as string).split(',')[1];
        resolve(result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyChecked) { alert('Please agree to privacy policy'); return; }
    if (!uploadedFile) { alert('Please upload your resume'); return; }

    const phoneErr = validatePhone(career.phone);
    if (phoneErr) { setErrors(p => ({ ...p, phone: phoneErr })); return; }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const fullName    = `${career.firstName} ${career.lastName}`;
      const resumeInfo  = `${uploadedFile.name} (${(uploadedFile.size / 1024).toFixed(1)} KB)`;
      const fileBase64  = await toBase64(uploadedFile);

      // 1️⃣ Notify QAonCloud team — resume attached as base64
      await emailjs.send(
        'service_ox6diqq',
        'template_9f8xcmm',
        {
          name:           fullName,
          from_name:      fullName,
          first_name:     career.firstName,
          last_name:      career.lastName,
          email:          career.email,
          from_email:     career.email,
          reply_to:       career.email,
          phone:          career.phone,
          to_name:        'QAonCloud Team',
          resume:         resumeInfo,
          resume_name:    uploadedFile.name,
          // base64 attachment — add {{resume_attachment}} in your EmailJS template
          // and set it as an attachment with content_type auto-detected
          resume_attachment: fileBase64,
          message:        `New Career Application\n\nName: ${fullName}\nEmail: ${career.email}\nPhone: ${career.phone}\nResume: ${resumeInfo}`,
        },
        '8VzXZD4Cz9LhSvU54'
      );

      // 2️⃣ Confirmation to applicant (no attachment needed)
      await emailjs.send(
        'service_ox6diqq',
        'template_3gsbsoi',
        {
          name:        fullName,
          from_name:   fullName,
          first_name:  career.firstName,
          last_name:   career.lastName,
          email:       career.email,
          from_email:  career.email,
          to_email:    career.email,
          reply_to:    'contactus@qaoncloud.com',
          phone:       career.phone,
          to_name:     career.firstName,
          message:     `Hi ${career.firstName}, thank you for applying to QAonCloud! We've received your application and will review your resume shortly. We'll be in touch soon.`,
        },
        '8VzXZD4Cz9LhSvU54'
      );

      setSubmitStatus('success');
      setCareer({ firstName: '', lastName: '', email: '', phone: '' });
      setErrors({ firstName: '', lastName: '', phone: '' });
      setFile(null);
      setPrivacy(false);
      if (fileInputRef.current) fileInputRef.current.value = '';

    } catch (error: unknown) {
      console.error('EmailJS error:', error);
      if (error && typeof error === 'object' && 'text' in error) {
        console.error('EmailJS error detail:', (error as { text: string }).text);
      }
      setSubmitStatus('error');
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

          {/* ── LEFT: Find Us ── */}
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
                  <p className={styles.contactValue}>+1 (415) 630-2109</p>
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
                    className={`${styles.formInput}${errors.firstName ? ' ' + styles.inputError : ''}`}
                    placeholder="Enter Here"
                    value={career.firstName}
                    onChange={e => handleNameChange(e.target.value, 'firstName')}
                    required
                  />
                  {errors.firstName && <span className={styles.fieldError}>{errors.firstName}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Last Name <span className={styles.req}>*</span></label>
                  <input
                    className={`${styles.formInput}${errors.lastName ? ' ' + styles.inputError : ''}`}
                    placeholder="Enter Here"
                    value={career.lastName}
                    onChange={e => handleNameChange(e.target.value, 'lastName')}
                    required
                  />
                  {errors.lastName && <span className={styles.fieldError}>{errors.lastName}</span>}
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
                    className={`${styles.formInput}${errors.phone ? ' ' + styles.inputError : ''}`}
                    type="tel"
                    placeholder="+1 234 567 8900"
                    value={career.phone}
                    onChange={e => handlePhoneChange(e.target.value)}
                    required
                  />
                  {errors.phone && <span className={styles.fieldError}>{errors.phone}</span>}
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