import { FC } from "react";

import Heading from "./heading";
import { homeCountries } from "@/data/index";

import classes from "@/styles/index.module.css";

import { FlattenT } from "types";

const SupportedCountries: FC<{
  title: string;
  subTitle: string;
  headingType: "default" | "primary";
  bgType: "default" | "primary";
  countryList: Array<FlattenT<typeof homeCountries>>;
}> = ({ title, subTitle, headingType, bgType, countryList }) => {
  return (
    <section
      className={`${classes.wrapper} ${
        bgType === "default" ? classes.about_yellow : ""
      } ${bgType === "primary" ? classes.about_primary : ""}`}
      style={{ padding: "30px 0" }}
    >
      <div className={`${classes.section} container`}>
        <Heading title={title} subTitle={subTitle} styleType={headingType} />

        <div className={classes.countries}>
          {countryList.map((country, index) => {
            return (
              <div key={index} className={classes.countries_cont}>
                <h5>{country.continent}</h5>
                <p>{country.desc}</p>
                <div className={classes.cont}>
                  {country.countries.map((c, index) => {
                    return (
                      <div key={`cc${index}`} className={classes.cont_desc}>
                        <div>{c.emoji}</div>
                        <h6>{c.name}</h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SupportedCountries;
