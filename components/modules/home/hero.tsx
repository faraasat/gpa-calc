import dynamic from "next/dynamic";
// import Image from "next/image";

import LinkButton from "@/components/ui/link-button";
// import { StudentImg } from "@/assets/index";
import AdBanner from "@/components/ui/ads";

const ParticlesComponent = dynamic(
  () => import("@/components/ui/particles/particles")
);
const StudySvg = dynamic(() => import("@/assets/study"));

import classes from "@/styles/index.module.css";

const HomeHero = () => {
  return (
    <section className={classes.hero}>
      <ParticlesComponent />
      <div className={`${classes.hero_items} container`}>
        <div className={classes.hero_item_image}>
          <StudySvg />
          {/* <Image
            src={StudentImg}
            alt="Student working to get gpa"
            fill
            draggable={false}
            className="rounded-md"
          /> */}
        </div>
        <div className={classes.hero_item_text}>
          <h1>TRY OUR GPA CALCULATOR With Ease!</h1>
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
        className="container ad-banner-div"
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
