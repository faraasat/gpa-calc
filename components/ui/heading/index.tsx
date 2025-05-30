import { FC } from "react";

interface IHeading {
  title: string;
  subTitle: string;
  wrapperClass?: string;
  titleClass?: string;
  subTitleClass?: string;
}

const Heading: FC<IHeading> = ({
  title,
  subTitle,
  wrapperClass,
  titleClass,
  subTitleClass,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center gap-1.5 ${
        wrapperClass ? wrapperClass : ""
      }`}
    >
      <h3
        className={`text-5xl font-potta text-(--secondary-c) max-md:text-3xl ${
          titleClass ? titleClass : ""
        }`}
      >
        {title}
      </h3>
      <h4 className={`text-2xl leading-6 max-w-[700px] max-md:text-xl ${subTitleClass ? subTitleClass : ""}`}>
        {subTitle}
      </h4>
    </div>
  );
};

export default Heading;
