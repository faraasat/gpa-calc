import Heading from "@/components/ui/heading";
import classes from "@/styles/index.module.css";

const HomeFeatures = () => {
  return (
    <section className={classes.wrapper}>
      <div className={`${classes.section} container`}>
        <Heading
          title="The Features"
          subTitle="What Makes Us Special!"
          styleType="primary"
        />
      </div>
    </section>
  );
};

export default HomeFeatures;
