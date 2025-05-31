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
      <SupportedCountries {...homeCountries} />
    </>
  );
};

export default Home;
