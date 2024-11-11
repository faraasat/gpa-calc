import Heading from "@/components/ui/heading";
import LinkButton from "@/components/ui/link-button";

import classes from "@/styles/index.module.css";

const HomeInteractive = () => {
  return (
    <section className={`${classes.wrapper} ${classes.about_yellow}`}>
      <div className={`${classes.section} container`}>
        <Heading title="Try It!" subTitle="Interact with Our Calculator..." />
        <div className={classes.interactive}></div>
        <p className={classes.interactive_para}>
          Our interactive GPA & CGPA demo lets you experience the ease of
          calculating your academic performance in real-time. Input your grades,
          course credits, and see your GPA instantly adjust. With a
          user-friendly interface and dynamic calculations, you can quickly
          experiment with different academic scenarios to plan your future
          performance. This feature empowers students to understand the impact
          of their grades and credit hours on their overall GPA and CGPA, giving
          a clear picture of where they stand academically.
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
    </section>
  );
};

export default HomeInteractive;
