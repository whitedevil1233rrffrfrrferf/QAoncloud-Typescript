import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import FeatureLineCard from "../../Common/GreenCards/GreenLineCard";
import classes from "./GreenLineCard.module.css";
import Button from "@/components/Common/Button/Button";
export default function GreenCards() {
    return(
        <section className={classes.releaseSection}>
            <div className={classes.inner}></div>
             <SectionHeader
                title="Still putting out fires before"
                highlight="every release?"
                description="Product releases shouldn’t be a shot in the dark. You want quick, bug-free releases without the endless worry of what might go wrong in production."
            />
            <div className={classes.featuresGrid}>
                <FeatureLineCard
                title="No Late-night alerts"
                description="With the right software testing partner like QAonCloud, releases become predictable and controlled."
                />
                <FeatureLineCard
                title="No more break in production."
                description="You deliver the quality you promised, without surprises or last-minute panic."
                />
                <FeatureLineCard
                title="No uncertain and risky release"
                description="Just a thoroughly tested product that works the way it should."
                />
            </div>
            <div className={classes.buttonContainer}>
                <Button href="/how-we-work" variant="primary">
                    Talk to an expert
                </Button>
            </div>
            
        </section>
        
    )
}