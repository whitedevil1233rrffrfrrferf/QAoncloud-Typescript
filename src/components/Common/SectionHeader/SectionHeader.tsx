import classes from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  subDescription?: string; // 👈 new optional para
  marginBottom?: number;
}

export default function SectionHeader({
  title,
  highlight,
  description,
  subDescription,
  marginBottom,
}: SectionHeaderProps) {
  const marginStyle = marginBottom ? { marginBottom: `${marginBottom}rem` } : undefined;

  return (
    <div className={classes.container}
    //   style={{
    //     textAlign: center ? "center" : "left",
    //     maxWidth: "720px",
    //     margin: center ? "0 auto" : "0",
    //   }}
    >
      <h2 className={classes.sectionTitle} style={marginStyle}>
        {title}{" "}
        {highlight && <span className={classes.highlight}>{highlight}</span>}
      </h2>{
        description && <p className={classes.sectionDescription} style={marginStyle}>{description}</p>
      }
      
       {subDescription && (
        <p className={classes.sectionDescription} style={marginStyle}>
          {subDescription}
        </p>
      )}
    </div>
  );
}
