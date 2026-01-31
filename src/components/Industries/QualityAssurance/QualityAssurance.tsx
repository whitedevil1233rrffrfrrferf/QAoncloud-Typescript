
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import styles from "./QualityAssurance.module.css";


interface QualityAssuranceProps {
  title: string;
  highlight: string;
  description: string;
  subDescription: string;
  marginBottom?: number;
}

const QualityAssurance = ({
  title,
  highlight,
  description,
  subDescription,
  marginBottom = 2,
}: QualityAssuranceProps) => {
  return (
    <div className={styles.container}>
      <SectionHeader
        title={title}
        highlight={highlight}
        description={description}
        subDescription={subDescription}
        marginBottom={marginBottom}
      />
    </div>
  );
};

export default QualityAssurance;