import type { NextPage } from "next";
import { useAptabase } from "@aptabase/react";
import { useEffect } from "react";

import { HomeAbout, HomeFeatures, HomeHero } from "@/components/index";
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
    </>
  );
};

export default Home;
