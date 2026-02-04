import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import styles from "./UnmatchedExpertise.module.css";
import Image from "next/image";

export default function UnmatchedExpertise() {
  return (
    <section className={styles.section}>
      <SectionHeader
        title="Unmatched expertise,"
        highlight="efficiency & excellence"
        description=""
      />

      <div className={styles.content}>
        {/* Left side - Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/team-meeting.png" // Replace with your actual image path
            alt="Team collaboration"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>

        {/* Right side - Feature cards */}
        <div className={styles.features}>
          <FeatureItem
            icon={<PeopleIcon />}
            title="People"
            description="Real people with sharp instincts, curious eyes, and a knack for catching what's missed. Our experts think like users and test like critics, taking ownership of every release and making sure they're seamless and error-free."
          />

          <div className={styles.twoColumn}>
            <FeatureItem
              icon={<PrecisionIcon />}
              title="Precision"
              description="Rigorous, laser-focused testing that leaves no feature, flow, or touchpoint unchecked. We'll make your product production-ready, ensuring it looks, feels, and performs just right."
            />

            <FeatureItem
              icon={<ProcessIcon />}
              title="Process"
              description="They're structured enough to stay reliable, and flexible enough to scale with your product, keeping quality predictably high."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Feature Item Component
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className={styles.featureItem}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

// SVG Icons
const PeopleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const PrecisionIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ProcessIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2" />
  </svg>
);