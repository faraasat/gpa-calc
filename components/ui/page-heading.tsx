import { FC } from "react";
import Link from "next/link";

import { calcGpa, pageHeadingSideAds, pageHeadingStripAds } from "@/data/index";
import AdBanner from "./ads";

const PageHeading: FC<{
  title: string;
  desc: string;
  steps?: typeof calcGpa.steps;
}> = ({ title, desc, steps }) => {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-4xl font-potta text-primary-c">{title}</h1>
        <h2 className="text-lg">{desc}</h2>
        {pageHeadingStripAds?.[0] && <AdBanner slot={pageHeadingStripAds[0]} />}
        {steps && steps.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl text-secondary-c mt-2">
              Steps to Calculate:
            </h3>
            <ol className="flex flex-col text-md gap-0 pl-4">
              {steps.map((x, i) => {
                return (
                  <li key={i} className="list-decimal">
                    <div className="mt-2">{x.main}</div>
                    {x?.subLists && x?.subLists?.length > 0 && (
                      <ul className="flex flex-col mt-3 pl-5">
                        {x.subLists.map((sl, j) => {
                          return (
                            <li key={`ol_${j}`} className="list-disc">
                              <div>{sl.title}</div>
                              <ul className="flex flex-col mt-2 pl-6">
                                {sl?.links &&
                                  sl?.links?.length > 0 &&
                                  sl.links.map((link, k) => {
                                    return (
                                      <li
                                        key={`l_${k}`}
                                        className="list-[circle]"
                                      >
                                        {link.text}{" "}
                                        <Link
                                          href={link.link}
                                          className="font-bold text-primary-c"
                                        >
                                          Click Here!
                                        </Link>
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

            {pageHeadingStripAds?.[1] && (
              <AdBanner slot={pageHeadingStripAds[1]} />
            )}
          </div>
        )}
      </div>
      {pageHeadingSideAds && pageHeadingSideAds?.length > 0 && (
        <aside className="min-w-[300px] h-full flex flex-col item-center justify-start z-80 relative w-[40%] max-w-[300px] max-md:hidden">
          {pageHeadingSideAds.map((sa, i) => (
            <AdBanner slot={sa} key={i} className="w-full" />
          ))}
        </aside>
      )}
    </div>
  );
};

export default PageHeading;
