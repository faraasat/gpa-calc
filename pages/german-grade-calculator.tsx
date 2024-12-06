import { NextPage } from "next";
import { useEffect } from "react";
import { useAptabase } from "@aptabase/react";

import { calGGC } from "../data";
import MetaHead from "@/components/ui/meta-head";
import PageHeading from "@/components/ui/page-heading";

import classes from "@/styles/german-grade-calculator.module.css";

const GermanGradeCalculator: NextPage = () => {
  const { trackEvent } = useAptabase();

  useEffect(() => {
    trackEvent("PAGE_VIEW", {
      page: "german-grade-calculator",
      name: "German Grade Calculator",
    });
  }, []);

  return (
    <>
      <MetaHead {...calGGC} />
      <section className={classes.ggc}>
        <div className={classes.ggc_align}>
          <PageHeading title={calGGC.pageTitle} desc={calGGC.desc} />
        </div>
      </section>
    </>
  );
};

export default GermanGradeCalculator;
