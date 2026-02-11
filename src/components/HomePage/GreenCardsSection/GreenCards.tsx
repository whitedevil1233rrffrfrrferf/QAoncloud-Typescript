import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import FeatureLineCard from "../../Common/GreenCards/GreenLineCard";
import classes from "./GreenCards.module.css"
import Button from "@/components/Common/Button/Button";
export default function GreenCards() {
    return(
        <section className={classes.releaseSection}>
            {/* <SectionHeader
                title="Your engineers aren’t stalling releases. " 
                highlight="Your QA is."
                description="Your QA is slowing you down more than you think."
                subDescription="Your engineers are on QA-duty when they should be building. Your tests take hours. Your “automation” needs hand-holding. And every release is a shot in the dark. Meanwhile, your competitors ship weekly.But it doesn’t have to be this way. Our AI-accelerated, expert-driven QA services ensure you ship quickly, frequently and confidently. "
            /> */}

             {/* <SectionHeader
                title="Our AI keeps it "
                highlight="fast."
                marginBottom={0}
            /> */}
            
            <SectionHeader
                title="AI keeps it lightning fast. Engineers" highlight=" keep it aligned. "
                description="Our lightning-fast, impeccably thorough AI does all the grunt work, under the watchful eye of our engineers who understand product intricacies. Speedy automation meets unmatched human expertise, to give you the best of both.The result? QA that once took 12 months, now needs just 7. Same impeccable quality. Same unmatched rigor. Just 2X faster."
                subDescription=""
                
            />
            <div className={classes.featuresGrid}>
                
                <FeatureLineCard
                title="We’re very fast"
                description="It’s 40% faster than managing QA yourself. While our AI generates test cases, handles execution, and creates test data, our engineers validate strategically."
                />
                <FeatureLineCard
                title="We take ownership"
                description="We treat your releases as our own, owning QA outcomes. It’s not just another checklist to us, we’re your partner-in-QA."
                />
                <FeatureLineCard
                title="We’ve got the expertise"
                description="Our engineers have seen it all. We’re experienced in FinTech, Healthtech, and SaaS, minimizing ramp-up time."
            />
            </div>
            <div className={classes.buttonContainer}>
                <Button href="/how-we-work" variant="primary">
                    See How We Work
                </Button>
            </div>
            
        </section>
        
    )
}