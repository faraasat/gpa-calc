import dynamic from "next/dynamic";

import LinkButton from "@/components/ui/link-button";
import AdBanner from "@/components/ui/ads";

const ParticlesComponent = dynamic(
  () => import("@/components/ui/particles/particles")
);
const StudySvg = dynamic(() => import("@/assets/study"));

import classes from "@/styles/index.module.css";

const HomeHero = () => {
  return (
    <section className="flex w-full relative min-h-screen flex-col mt-[70px] items-center justify-center">
      <ParticlesComponent />
      <div
        className={`container flex text-center items-center justify-between`}
      >
        <StudySvg className="flex items-center justify-center w-[10%] h-auto z-50" />
        <div className="flex flex-col items-center justify-center w-full z-50 bg-orange-c text-white rounded-2xl p-5 shadow-[1px_1px_3px_3px_var(--orange)]">
          <h1 className="text-2xl leading-[1] font-lobster mb-3">
            Get to Experience the Easiest Calculator and Calculate GPA, CGPA,
            ECTS & German Grade with Ease
          </h1>
          <p className="text-md leading-[1] mb-6">
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
