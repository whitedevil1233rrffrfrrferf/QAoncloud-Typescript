import classes from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  description: string;
  
}

export default function SectionHeader({
  title,
  highlight,
  description,
  
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
    </div>
  );
}
