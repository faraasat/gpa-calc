import { NextPage } from "next";
import { useEffect } from "react";
import { useAptabase } from "@aptabase/react";

import { calcCTE } from "../data";
import MetaHead from "@/components/ui/meta-head";
import PageHeading from "@/components/ui/page-heading";

import classes from "@/styles/cgpa-to-ects.module.css";

const CGPAToECTS: NextPage = () => {
  const { trackEvent } = useAptabase();

  useEffect(() => {
    trackEvent("PAGE_VIEW", { page: "cgpa-to-ects", name: "CGPA to ECTS" });
  }, []);

  return (
    <>
      <MetaHead {...calcCTE} />
      <section className={classes.cte}>
        <div className={classes.cte_align}>
          <PageHeading title={calcCTE.pageTitle} desc={calcCTE.desc} />
        </div>
      </section>
    </>
  );
};

export default CGPAToECTS;
