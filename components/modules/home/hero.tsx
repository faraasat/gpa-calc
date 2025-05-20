import ParticlesComponent from "@/components/ui/particles/particles";

import classes from "@/styles/index.module.css";
import LinkButton from "@/components/ui/link-button";
import StudySvg from "@/assets/study";
import AdBanner from "@/components/ui/ads";

const HomeHero = () => {
  return (
    <section className={classes.hero}>
      <ParticlesComponent />
      <div className={`${classes.hero_items} container`}>
        <div className={classes.hero_item_image}>
          <StudySvg />
        </div>
        <div className={classes.hero_item_text}>
          <h1>TRY OUR GPA CALCULATOR!</h1>
          <p>
            This App provides you with an interface to calculate your GPA and
            CGPA with great flexibility...
          </p>
          <div className={classes.hero_item_btn}>
            <LinkButton href={"/calc-gpa"}>Calculate GPA</LinkButton>
            <LinkButton href={"/calc-cgpa"} type="white">
              Calculate CGPA
            </LinkButton>
            <LinkButton href={"/gpa-to-ects"} type="white">
              GPA to ECTS
            </LinkButton>
            <LinkButton href={"/german-grade-calculator"}>
              German Grade Calculator
            </LinkButton>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          marginBottom: 80,
          zIndex: 30,
        }}
      >
        <AdBanner slot="6835946019" />
      </div>
    </section>
  );
};

export default HomeHero;
