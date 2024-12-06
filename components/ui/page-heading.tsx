import { FC } from "react";

const PageHeading: FC<{ title: string; desc: string }> = ({ title, desc }) => {
  return (
    <>
      <h1 className="page__title">{title}</h1>
      <h2 className="page__desc">{desc}</h2>
    </>
  );
};

export default PageHeading;
