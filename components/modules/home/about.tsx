import LinkButton from "@/components/ui/link-button";
import Heading from "@/components/ui/heading";
import AboutMan from "@/assets/about-man";

import classes from "@/styles/index.module.css";

const HomeAbout = () => {
  return (
    <section className={classes.about_section__wrapper}>
      <div className={`${classes.about_section} container`}>
        <Heading title="A Little Detail..." subTitle="What this is About!" />
        <div className={classes.about}>
          <div className={classes.about_paras}>
            <p>
              Welcome to GPA Calculate, your ultimate tool for streamlining GPA
              and CGPA calculations! Whether you are a student striving to
              monitor your academic progress or someone eager to grasp the
              intricacies of grading systems, our app offers a seamless and
              intuitive experience. Designed with precision and efficiency in
              mind, GPA Calculate allows you to effortlessly input your grades
              and credits to receive instant and accurate GPA results, giving
              you a clear, actionable view of your academic performance.
            </p>
            <p>
              Our mission is to empower students by providing reliable tools
              that facilitate better decision-making and future planning. We
              understand that managing academic performance can be challenging,
              which is why we havve created a user-friendly platform that
              simplifies grade calculations and makes them accessible to
              everyone. With GPA Calculate, you can confidently track your
              progress and set yourself up for success.
            </p>
            <p>
              Experience the ease and clarity of managing your GPA and CGPA
              today with GPA Calculate, and take control of your academic
              journey with a tool that is as dedicated to your success as you
              are.
            </p>
            <div className={classes.about_para__btn}>
              <LinkButton href={"/calc-gpa"} btnStyle="rounded">
                Checkout GPA Calculator
              </LinkButton>
              <LinkButton href={"/calc-cgpa"} btnStyle="rounded" type="white">
                Checkout CGPA Calculator
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
