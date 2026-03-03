import Image from 'next/image';
import classes from './ContentSection.module.css';

interface ContentSectionProps {
  title: React.ReactNode;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  altBg?: boolean;
}

export default function ContentSection({
  title,
  children,
  imageSrc,
  imageAlt,
  reversed = false,
  altBg = false,
}: ContentSectionProps) {
  return (
    <section className={`${classes.contentSection} ${altBg ? classes.altBg : ''}`}>
      <div className={`${classes.sectionInner} ${reversed ? classes.reversed : ''}`}>
        <div className={classes.sectionText}>
          <h2 className={classes.sectionTitle}>{title}</h2>
          <div className={classes.sectionDescription}>{children}</div>
        </div>
        <div className={classes.sectionImageWrapper}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={classes.sectionImage}
          />
        </div>
      </div>
    </section>
  );
}