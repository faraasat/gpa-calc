import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useAptabase } from "@aptabase/react";

import { calGGC, germanCountries, ggcGrading, ggcQna } from "../data";
import MetaHead from "@/components/ui/meta-head";
import PageHeading from "@/components/ui/page-heading";
import DetailedInput from "@/components/ui/detailed-input";
import Faqs from "@/components/ui/faqs";

import classes from "@/styles/german-grade-calculator.module.css";
import TextDescriptor from "@/components/ui/text-descriptor";
import { Wave1 } from "../assets";
import SupportedCountries from "@/components/ui/supported-countries";

const GermanGradeCalculator: NextPage = () => {
  const { trackEvent } = useAptabase();
  const [ggc, setGgc] = useState({ max: 0, min: 0, obtained: 0 });

  useEffect(() => {
    trackEvent("PAGE_VIEW", {
      page: "german-grade-calculator",
      name: "German Grade Calculator",
    });
  }, []);

  const updateGgc = (type: string, val: number) => {
    setGgc((prev) => {
      return { ...prev, [`${type}`]: val };
    });
  };

  const getMul = () => {
    return ggc.max * ggc.min * ggc.obtained;
  };

  const calculateGcc = () => {
    const res = ((ggc.max - ggc.obtained) * 3) / (ggc.max - ggc.min) + 1;
    if (res < 0) return 0;
    return res;
  };

  const getExtraInfo = () => {
    if (calculateGcc() >= 5) return ggcGrading.find((x) => x.min === 5.0);
    else if (calculateGcc() < 5)
      return ggcGrading.find(
        (x) => calculateGcc() >= x.min && calculateGcc() <= +x.max
      );
  };

  return (
    <>
      <MetaHead {...calGGC} />
      <section className={classes.ggc}>
        <div className={classes.ggc_align}>
          <PageHeading title={calGGC.pageTitle} desc={calGGC.desc} />

          <div className={classes.gcc_score}>
            <DetailedInput
              title="Max Score*"
              desc="The maximum score you can achieve in the exam. For Example, it can be 4.0 if you want to Enter GPA & 100 if you want to enter Marks."
              value={ggc.max}
              setValue={updateGgc}
              valueType="max"
            />
            <DetailedInput
              title="Min Score*"
              desc="The minimum score you can achieve in the exam. This would be relative to your max score. For Example, it can be 1.0 if you want to Enter GPA & 0 if you want to enter Marks."
              value={ggc.min}
              setValue={updateGgc}
              valueType="min"
            />
            <DetailedInput
              title="Your Score*"
              desc="The score you have achieved in the exam. For Example, it can be 3.5 if you want to Enter GPA & 80 if you want to enter Marks."
              value={ggc.obtained}
              setValue={updateGgc}
              valueType="obtained"
            />

            <p className={classes.ggc_res1}>
              Your Equivalent German Grade is:{" "}
              <span>{getMul() === 0 ? "0.00" : calculateGcc().toFixed(2)}</span>
            </p>
            {getMul() > 0 && (
              <p className={classes.ggc_res2}>
                Your Grade is in the range of{" "}
                <span>
                  {getExtraInfo()?.min} - {getExtraInfo()?.max}
                </span>{" "}
                which implies your score is{" "}
                <span>
                  {getExtraInfo()?.gerText} ({getExtraInfo()?.text})
                </span>{" "}
                which shows: <span>{getExtraInfo()?.description}</span>
              </p>
            )}
          </div>
          <TextDescriptor
            heading={"German Grade Descriptor"}
            data={ggcGrading}
          />
        </div>

        <Faqs faqs={ggcQna} />

        <div className={`${classes.wave} ${classes.wave_2}`}>
          <Wave1 />
        </div>
        <SupportedCountries
          title="German Grade Supported Countries"
          subTitle="We support the following countries for German Grade"
          headingType="default"
          bgType="default"
          countryList={germanCountries}
        />
      </section>
    </>
  );
};

export default GermanGradeCalculator;
