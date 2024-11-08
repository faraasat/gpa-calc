import { FC } from "react";

import classes from "./style.module.css";

interface IHeading {
  title: string;
  subTitle: string;
  wrapperClass?: string;
  titleClass?: string;
  subTitleClass?: string;
  styleType?: "default" | "primary";
}

const Heading: FC<IHeading> = ({
  title,
  subTitle,
  wrapperClass,
  titleClass,
  styleType = "default",
  subTitleClass,
}) => {
  return (
    <div
      className={`${classes.heading} ${
        styleType === "primary" ? classes.heading_style_primary : ""
      } ${wrapperClass}`}
    >
      <h3 className={`${titleClass}`}>{title}</h3>
      <h4 className={`${subTitleClass}`}>{subTitle}</h4>
    </div>
  );
};

export default Heading;
