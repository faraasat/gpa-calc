import ParticlesComponent from "@/components/ui/particles/particles";

import classes from "@/styles/index.module.css";
import LinkButton from "@/components/ui/link-button";

const HomeHero = () => {
  return (
    <section className={classes.hero}>
      <ParticlesComponent />
      <div className={classes.hero_items}>
        <embed className={classes.hero_item_image} src={"/img/study.svg"} />
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
            <LinkButton href={"/cgpa-to-ects"} type="white">
              CGPA to ECTS
            </LinkButton>
            <LinkButton href={"/german-grade-calculator"}>
              German Grade Calculator
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
