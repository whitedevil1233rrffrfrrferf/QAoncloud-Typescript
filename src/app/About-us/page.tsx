import { Banner } from '@/components/Common/Banner/Banner'
import { ContentWrapper } from '@/components/Common/ContentWrapper/ContentWraper'
import React from 'react'
import classes from "./page.module.css"
import Image from 'next/image'
import styles from '@/components/ContactUsPage/ContactUsPage.module.css';

const boardMembers = [
  {
    name: 'Rajiv Kuchhal',
    role: 'Chairman of DesiCrew',
    bio: 'Founding member of Infosys BPO, Ex-COO of OnMobile, Investor in Social Enterprises',
    photo: '/Images/AboutUs/Rajiv Kuchhal.png',
    linkedin:'#',
  },
  {
    name: 'Saloni Malhotra',
    role: 'Founder, DesiCrew',
    bio: 'Aspen Fellow. Ex-PayTM',
    photo: '/Images/AboutUs/Saloni Malhotra.png',
    linkedin: 'https://in.linkedin.com/in/salonimalhotra',
  },
  {
    name: 'Manivannan',
    role: 'CEO, DesiCrew',
    bio: 'IIM Bangalore and Anna Univ. Emerging Leaders Fellow - City University (New York)',
    photo: '/Images/AboutUs/Manivannan.png',
    linkedin: 'https://in.linkedin.com/in/manijk',
  },
  {
    name: 'Sarath Naru',
    role: 'Board Member',
    bio: 'Managing Partner, Ventureast',
    photo: '/Images/AboutUs/Sarath Naru.png',
    linkedin: '#',
  },
  {
    name: 'Sandip Sen',
    role: 'Board Member',
    bio: 'Ex-Global CEO, Aegis Ltd',
    photo: '/Images/AboutUs/Sandip Sen.png',
    linkedin: '#',
  },
]

export default function AboutPage() {
  return (
    <div className={classes.pageWrapper}>

      {/* HEADER */}
      <header className={styles.headerSection}>
        <div className={styles.ellipse2017} />
        <div className={styles.ellipse2018} />
        <div className={styles.logoWrapper}>
          <Image src="/logos/qaoncloud3dlogo.png" alt="QAonCloud" width={220} height={220} priority />
        </div>
        <h1 className={classes.heroTitle}>We are QAonCloud</h1>
        <p className={classes.heroSubtitle}>
          QAonCloud is an AI-accelerated QA partner for teams looking to ship faster, without cutting corners.
        </p>
      </header>

      {/* BUILT BY DESICREW */}
      <section className={classes.contentSection}>
        <div className={classes.sectionInner}>
          <div className={classes.sectionText}>
            <h2 className={classes.sectionTitle}>
              Built by <span className={classes.sectionHighlight}>Desicrew in 2016</span>
            </h2>
            <p className={classes.sectionDescription}>
              QAonCloud was formed to solve an issue teams constantly face - frequent delays and buggy releases.
              We're a trusted software testing company, and we've worked with startups and global businesses
              across industries, combining fast, precise automation with reliable, skilled engineers with deep
              domain expertise.
            </p>
          </div>
          <div className={classes.sectionImageWrapper}>
            <Image
              src="/Images/AboutUs/Saloni MalhotraTeam.png"
              alt="Built by Desicrew in 2016"
              width={520}
              height={320}
              className={classes.sectionImage}
            />
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className={`${classes.contentSection} ${classes.altBg}`}>
        <div className={`${classes.sectionInner} ${classes.reversed}`}>
          <div className={classes.sectionText}>
            <h2 className={classes.sectionTitle}>
              Our approach <span className={classes.sectionHighlight}>is simple</span>
            </h2>
            <p className={classes.sectionDescription}>
              Our AI handles the repetitive, high-volume work, while our engineers make the strategic calls.
              The result? 40% faster QA. We build strong partnerships, and our clients trust us to deliver,
              again and again.
            </p>
            <p className={classes.sectionDescription}>
              We don't look in from the outside. We embed into your workflow, sit in your standups, and take
              ownership, alongside your team. When something's wrong, we'll be the first to tell you, and
              we'll stick with you until it's resolved.
            </p>
            <p className={classes.sectionDescription}>
              We're here to help you ship confidently, with every release.
            </p>
          </div>
          <div className={classes.sectionImageWrapper}>
            <Image
              src="/Images/AboutUs/Our approach is simple.png"
              alt="QAonCloud team"
              width={520}
              height={320}
              className={classes.sectionImage}
            />
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className={classes.visionMissionSection}>
        <div className={classes.cardsWrapper}>

          {/* Vision card */}
          <div className={classes.vmCard}>
            <div className={classes.vmCardText}>
              <div className={classes.vmCardLabel}>Our Vision</div>
              <p className={classes.vmCardDescription}>
                To help you deliver the best customer experience for your applications and empower business
                for every entrepreneur.
              </p>
            </div>
            <Image
              src="/Images/AboutUs/Vision-icon.png"
              alt="Vision"
              width={220}
              height={220}
              className={classes.vmCardIcon}
            />
          </div>

          {/* Mission card */}
          <div className={classes.vmCard}>
            <div className={classes.vmCardText}>
              <div className={classes.vmCardLabel}>Our Mission</div>
              <p className={classes.vmCardDescription}>
                At QAonCloud, we endeavor to bring high tech jobs to rural India, to create job opportunities
                for the rural youth, and also to create a positive impact on their economic status by working
                from their hometown.
              </p>
            </div>
            <Image
              src="/Images/AboutUs/Mission-icon.png"
              alt="Mission"
              width={220}
              height={220}
              className={classes.vmCardIcon}
            />
          </div>

        </div>
      </section>

      {/* BOARD MEMBERS */}
      <section className={classes.boardSection}>
        <div className={classes.boardInner}>
          <h2 className={classes.boardTitle}>
            Our <span className={classes.boardTitleHighlight}>Board Members</span>
          </h2>
          <div className={classes.boardGrid}>
            {boardMembers.map((member) => (
              <div key={member.name} className={classes.memberCard}>
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={400}
                  height={440}
                  className={classes.memberPhoto}
                />
                <div className={classes.memberInfo}>
                  <div className={classes.memberRole}>{member.role}</div>
                  <div className={classes.memberNameRow}>
                    <div className={classes.memberName}>{member.name}</div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.memberLinkedIn}
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <hr className={classes.memberDivider} />
                  <p className={classes.memberBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> 
    </div>
  )
}