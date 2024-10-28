import type { NextPage } from "next";
import { useAptabase } from "@aptabase/react";
import { useEffect } from "react";

import {
  HomeAbout,
  HomeFAQs,
  HomeFeatures,
  HomeHero,
  HomeInteractive,
} from "@/components/index";
import { Wave1 } from "@/assets/index";

import classes from "@/styles/index.module.css";
import SupportedCountries from "@/components/ui/supported-countries";
import { homeCountries } from "../data";

const Home: NextPage = () => {
  const { trackEvent } = useAptabase();

  useEffect(() => {
    trackEvent("PAGE_VIEW", { page: "/", name: "Home" });
  }, []);

  return (
    <>
      <HomeHero />
      <div className={`${classes.wave}`}>
        <Wave1 />
      </div>
      <HomeAbout />
      <HomeFeatures />
      <div className={`${classes.wave} ${classes.wave_2}`}>
        <Wave1 />
      </div>
      <HomeInteractive
        title="Try It!"
        subTitle="Interact with Our GPA Calculator..."
        headingType="default"
        para="Our interactive GPA & CGPA demo lets you experience the ease of
          calculating your academic performance in real-time. Input your grades,
          course credits, and see your GPA instantly adjust. With a
          user-friendly interface and dynamic calculations, you can quickly
          experiment with different academic scenarios to plan your future
          performance. This feature empowers students to understand the impact
          of their grades and credit hours on their overall GPA and CGPA, giving
          a clear picture of where they stand academically."
        linkText="Checkout GPA Calculator"
        link="/calc-gpa"
        videoUrl="calc.webm"
        bgType="default"
      />
      <HomeInteractive
        title="Check It Out!"
        subTitle="Convert Your GPA to ECTS..."
        headingType="primary"
        para="Effortlessly translate your GPA into ECTS credits with our user-friendly converter! This tool helps you understand how your grades align with the European Credit Transfer and Accumulation System, making it ideal for students considering study abroad opportunities. Simply input your GPA, and get instant results that facilitate smoother transitions in your academic path. Take the guesswork out of grade conversions and plan your educational journey with confidence!"
        linkText="Check ECTS Converter"
        link="/gpa-to-ects"
        videoUrl="gpa-to-ects.webm"
        bgType="primary"
      />
      <div className={`${classes.wave} ${classes.wave_2}`}>
        <Wave1 />
      </div>
      <HomeInteractive
        title="Explore it now!"
        subTitle="Get Your German Grade Now..."
        headingType="default"
        para="Unlock the secrets of the German grading system with our easy-to-use calculator! Simply input your scores, and instantly receive your German grade, making it simple to understand how your performance translates across different educational frameworks. Perfect for students aiming to study in Germany or looking to compare their grades internationally, this tool provides clarity and confidence in your academic journey. Start calculating your German grade today!"
        linkText="Get Your German Grades Now"
        link="/german-grade-calculator"
        videoUrl="german-grade.webm"
        bgType="default"
      />
      <HomeFAQs />

      <div className={`${classes.wave} ${classes.wave_2}`}>
        <Wave1 />
      </div>
      <SupportedCountries
        title="Supported Countries"
        subTitle="We support the following countries"
        headingType="default"
        bgType="default"
        countryList={homeCountries}
      />
    </>
  );
};

export default Home;
