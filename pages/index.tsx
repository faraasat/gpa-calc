import type { NextPage } from "next";
import { useAptabase } from "@aptabase/react";
import { useEffect } from "react";

import {
  HomeAbout,
  HomeFAQs,
  HomeFeatures,
  HomeHero,
  HomeInteractive,
} from "@/components/index";
import { Wave1 } from "@/assets/index";

import classes from "@/styles/index.module.css";
import SupportedCountries from "@/components/ui/supported-countries";
import { homeCountries, homeInteractiveData } from "../data";

const Home: NextPage = () => {
  const { trackEvent } = useAptabase();

  useEffect(() => {
    trackEvent("PAGE_VIEW", { page: "/", name: "Home" });
  }, []);

  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeFeatures />
      {homeInteractiveData.map((hid, i) => {
        return <HomeInteractive key={i} {...hid} />;
      })}
      <HomeFAQs />
      <div className={`${classes.wave} ${classes.wave_2}`}>
        <Wave1 />
      </div>
      <SupportedCountries
        title="Supported Countries"
        subTitle="Calculator supported for the following:"
        headingType="default"
        bgType="default"
        countryList={homeCountries}
      />
    </>
  );
};

export default Home;
