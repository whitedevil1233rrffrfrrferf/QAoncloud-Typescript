import classes from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  description: string;
  subDescription?: string; // 👈 new optional para
}

export default function SectionHeader({
  title,
  highlight,
  description,
  subDescription,
  
}: SectionHeaderProps) {
  return (
    <div className={classes.container}
    //   style={{
    //     textAlign: center ? "center" : "left",
    //     maxWidth: "720px",
    //     margin: center ? "0 auto" : "0",
    //   }}
    >
      <h2 className={classes.sectionTitle}>
        {title}{" "}
        {highlight && <span className={classes.highlight}>{highlight}</span>}
      </h2>
      <p className={classes.sectionDescription}>{description}</p>
       {subDescription && (
        <p className={classes.sectionDescription}>
          {subDescription}
        </p>
      )}
    </div>
  );
}
