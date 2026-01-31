import { ReactNode } from "react";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import ServiceCard from "@/components/Common/ServiceCard/ServiceCard";
import styles from "./QualityTestingServices.module.css";

/* ---------------- TYPES ---------------- */

type IconKey = "code" | "bolt" | "arrow" | "robot" | "shield" | "mobile";

interface ServiceItem {
  title: string;
  description: string;
  learnMoreHref: string;
  icon: IconKey;
}

interface QualityTestingServicesProps {
  title: string;
  highlight: string;
  services: ServiceItem[];
}

/* ---------------- ICONS ---------------- */

const CodeIcon = () => <span style={{ color: "#3b82f6" }}>&lt;/&gt;</span>;
const BoltIcon = () => <span style={{ color: "#3b82f6" }}>⚡</span>;
const ArrowIcon = () => <span style={{ color: "#3b82f6" }}>↗</span>;
const RobotIcon = () => <span style={{ color: "#3b82f6" }}>🤖</span>;
const ShieldIcon = () => <span style={{ color: "#3b82f6" }}>🛡</span>;
const MobileIcon = () => <span style={{ color: "#3b82f6" }}>📱</span>;

/* ---------------- ICON MAP ---------------- */

const iconMap: Record<IconKey, ReactNode> = {
  code: <CodeIcon />,
  bolt: <BoltIcon />,
  arrow: <ArrowIcon />,
  robot: <RobotIcon />,
  shield: <ShieldIcon />,
  mobile: <MobileIcon />,
};

/* ---------------- COMPONENT ---------------- */

function QualityTestingServices({
  title,
  highlight,
  services,
}: QualityTestingServicesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <SectionHeader title={title} highlight={highlight} />

        <div className={styles.cardsGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={iconMap[service.icon]}
              title={service.title}
              description={service.description}
              learnMoreHref={service.learnMoreHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default QualityTestingServices;
