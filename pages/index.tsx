import type { NextPage } from "next";
import { useAptabase } from "@aptabase/react";
import { useEffect } from "react";

import {
  HomeAbout,
  HomeFeatures,
  HomeHero,
  HomeInteractive,
} from "@/components/index";
import { Wave1 } from "@/assets/index";

import classes from "@/styles/index.module.css";

const Home: NextPage = () => {
  const { trackEvent } = useAptabase();

  useEffect(() => {
    trackEvent("PAGE_VIEW", { page: "Home" });
  }, []);

  return (
    <>
      <HomeHero />
      <div className={`${classes.wave}`}>
        <Wave1 />
      </div>
      <HomeAbout />
      <HomeFeatures />
      <div className={`${classes.wave} ${classes.wave_2}`}>
        <Wave1 />
      </div>
      <HomeInteractive />
    </>
  );
};

export default Home;
