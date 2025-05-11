import LinkButton from "@/components/ui/link-button";
import Heading from "@/components/ui/heading";
import AboutMan from "@/assets/about-man";

import classes from "@/styles/index.module.css";

const HomeAbout = () => {
  return (
    <section className={`${classes.wrapper} ${classes.about_yellow}`}>
      <div className={`${classes.section} container`}>
        <Heading title="A Little Detail..." subTitle="What this is About!" />
        <div className={classes.about}>
          <div className={classes.about_paras}>
            <p>
              Welcome to the Calculator, your ultimate tool for streamlining GPA
              & CGPA Calculations, GPA to ECTS conversions & German Grade
              Calculations! Whether you are a student aiming to monitor your
              academic progress or someone looking to understand various grading
              systems, our app provides a seamless, intuitive experience. Now,
              in addition to GPA and CGPA calculators, you can calculate German
              grades and convert GPA to ECTS credits for a comprehensive
              academic assessment.
            </p>
            <p>
              Our mission is to empower students by providing reliable tools for
              better decision-making and future planning. We have designed an
              accessible platform that simplifies complex grade calculations,
              making academic management easier than ever. With GPA Calculate,
              you can confidently track your progress, convert grades, and set
              yourself up for success.
            </p>
            <p>
              Experience the convenience of managing GPA, CGPA, and
              international grade conversions with the Calculator, and take
              charge of your academic journey with a tool dedicated to your
              success!
            </p>
            <div className={classes.para_sep} />
            <div className={classes.about_para__btn}>
              <LinkButton href={"/calc-gpa"} btnStyle="rounded">
                Checkout GPA Calculator
              </LinkButton>
              <LinkButton href={"/calc-cgpa"} btnStyle="rounded" type="white">
                Checkout CGPA Calculator
              </LinkButton>
            </div>
            <div className={classes.about_para__btn}>
              <LinkButton href={"/calc-gpa"} btnStyle="rounded" type="white">
                Check GPA to ECTS Converter
              </LinkButton>
              <LinkButton href={"/calc-cgpa"} btnStyle="rounded">
                Check German Grade Calculator
              </LinkButton>
            </div>
          </div>
          <div className={classes.about_img}>
            <AboutMan />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
