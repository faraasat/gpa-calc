import { FC } from "react";
import { LuLoader } from "react-icons/lu";

import Heading from "@/components/ui/heading";
import LinkButton from "@/components/ui/link-button";

import classes from "@/styles/index.module.css";

const HomeInteractive: FC<{
  title: string;
  subTitle: string;
  videoUrl: string;
  para: string;
  linkText: string;
  link: string;
  headingType: "default" | "primary";
  bgType: "default" | "primary";
}> = ({
  title,
  subTitle,
  videoUrl,
  para,
  linkText,
  link,
  headingType,
  bgType,
}) => {
  return (
    <section
      className={`${classes.wrapper} ${
        bgType === "default" ? classes.about_yellow : ""
      } ${bgType === "primary" ? classes.about_primary : ""}`}
      style={{ padding: "30px 0" }}
    >
      <div className={`${classes.section} container`}>
        <Heading title={title} subTitle={subTitle} styleType={headingType} />
        <div className={classes.interactive}>
          <LuLoader className={classes.interactive_loader} />
          <video
            className={classes.interactive_video}
            autoPlay={true}
            loop={true}
            controls={false}
            muted={true}
          >
            <source src={videoUrl} type="video/webm" />
          </video>
        </div>
        <p className={classes.interactive_para}>{para}</p>
        <div className={classes.about_para__btn}>
          <LinkButton
            href={link}
            btnStyle="rounded"
            type={bgType === "primary" ? "orange" : "default"}
          >
            {linkText}
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default HomeInteractive;
