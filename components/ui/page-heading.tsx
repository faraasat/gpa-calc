import { FC } from "react";

import { calcGpa } from "@/data/index";
import Link from "next/link";

const PageHeading: FC<{
  title: string;
  desc: string;
  steps?: typeof calcGpa.steps;
}> = ({ title, desc, steps }) => {
  return (
    <>
      <h1 className="page__title">{title}</h1>
      <h2 className="page__desc">{desc}</h2>
      {steps && steps.length > 0 && (
        <div className="page__steps">
          <h3>Steps to Calculate:</h3>
          <ol className="page_ol_1">
            {steps.map((x, i) => {
              return (
                <li key={i}>
                  <div>{x.main}</div>
                  {x?.subLists && x?.subLists?.length > 0 && (
                    <ul className="page_ul_1">
                      {x.subLists.map((sl, j) => {
                        return (
                          <li key={`ol_${j}`}>
                            <div>{sl.title}</div>
                            <ul className="page_ul_2">
                              {sl?.links &&
                                sl?.links?.length > 0 &&
                                sl.links.map((link, k) => {
                                  return (
                                    <li key={`l_${k}`}>
                                      {link.text}{" "}
                                      <Link href={link.link}>Click Here!</Link>
                                    </li>
                                  );
                                })}
                            </ul>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </>
  );
};

export default PageHeading;
