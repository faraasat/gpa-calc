import { FC } from "react";

import Heading from "./heading";
import { homeCountries } from "@/data/index";
import Wave1 from "@/assets/wave1";

import { FlattenT } from "types";
import AdBanner from "./ads";

const SupportedCountries: FC<{
  title: string;
  subTitle: string;
  headingType: "default" | "primary";
  bgType: "default" | "primary";
  countryList: Array<FlattenT<typeof homeCountries.countryList>>;
  sideAds?: Array<string>;
  stripAds?: Array<string>;
}> = ({ title, subTitle, bgType, countryList, sideAds, stripAds }) => {
  return (
    <section className="relative z-50 w-full">
      {bgType === "default" && <Wave1 className="relative -mb-0.5" />}

      <div
        className={`flex w-full pb-7 pt-18 ${
          bgType === "default" ? "bg-primary-c text-white" : ""
        }`}
      >
        <div className={`flex flex-col gap-12 container`}>
          <Heading title={title} subTitle={subTitle} />

          <div className="flex w-full gap-5">
            <div className="flex flex-col items-center gap-14">
              {countryList.map((country, index) => {
                return (
                  <div key={index} className="flex flex-col gap-4 w-full">
                    <h5 className="text-6xl underline font-potta">
                      {country.continent}
                    </h5>
                    <p className="text-lg leading-5">{country.desc}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      {country.countries.map((c, index) => {
                        return (
                          <div
                            key={`cc${index}`}
                            className="flex items-center gap-1.5 w-36"
                          >
                            <span className="text-4xl">{c.emoji}</span>
                            <h6>{c.name}</h6>
                          </div>
                        );
                      })}
                    </div>

                    {stripAds?.[index] && <AdBanner slot={stripAds[index]} />}
                  </div>
                );
              })}
            </div>
            {sideAds && sideAds?.length > 0 && (
              <aside className="min-w-[300px] h-full flex flex-col item-center justify-start z-80 relative w-[40%] max-w-[300px] max-md:hidden">
                {sideAds.map((sa, i) => (
                  <AdBanner slot={sa} key={i} className="w-full" />
                ))}
              </aside>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedCountries;
