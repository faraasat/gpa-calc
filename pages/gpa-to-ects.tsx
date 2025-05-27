import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useAptabase } from "@aptabase/react";

import { calcCTE, ectsCountries, ectsQna } from "../data";
import MetaHead from "@/components/ui/meta-head";
import PageHeading from "@/components/ui/page-heading";
import DetailedInput from "@/components/ui/detailed-input";
import SupportedCountries from "@/components/ui/supported-countries";
import Faqs from "@/components/ui/faqs";

import classes from "@/styles/gpa-to-ects.module.css";

const CGPAToECTS: NextPage = () => {
  const { trackEvent } = useAptabase();
  const [firstMethod, setFirstMethod] = useState({
    lecture: 0,
    selfStudy: 0,
    weeks: 0,
    credits: 30,
  });
  const [secondMethod, setSecondMethod] = useState({
    subjectCredits: 0,
    totalCredits: 0,
    years: 0,
    ects: 60,
  });

  useEffect(() => {
    trackEvent("PAGE_VIEW", { page: "gpa-to-ects", name: "GPA to ECTS" });
  }, []);

  const updateFirstMethod = (type: string, val: number) => {
    setFirstMethod((prev) => {
      return { ...prev, [`${type}`]: val };
    });
  };

  const getMul = (first = false) => {
    if (first)
      return (
        firstMethod.lecture *
        firstMethod.selfStudy *
        firstMethod.weeks *
        firstMethod.credits
      );
    else
      return (
        secondMethod.subjectCredits *
        secondMethod.totalCredits *
        secondMethod.ects *
        secondMethod.years
      );
  };

  const updateSecondMethod = (type: string, val: number) => {
    setSecondMethod((prev) => {
      return { ...prev, [`${type}`]: val };
    });
  };

  const calculateFirstMethod = () => {
    return (
      ((firstMethod.lecture + firstMethod.selfStudy) * firstMethod.weeks) /
      firstMethod.credits
    );
  };

  const calculateSecondMethod = () => {
    return (
      (secondMethod.subjectCredits * secondMethod.ects * secondMethod.years) /
      secondMethod.totalCredits
    );
  };

  return (
    <>
      <MetaHead {...calcCTE} />
      <section className="relative z-50 py-28">
        <div className="flex flex-col gap-5 container">
          <PageHeading
            title={calcCTE.pageTitle}
            desc={calcCTE.desc}
            steps={calcCTE.steps}
          />

          <div className={classes.ects_inps}>
            <h4>First Method</h4>
            <DetailedInput
              title="Hours/Week (Lecture)*"
              desc="Hours Per Week You Spent in Lecture"
              value={firstMethod.lecture}
              setValue={updateFirstMethod}
              valueType="lecture"
            />
            <DetailedInput
              title="Hours/Week (Self Study)*"
              desc="Hours Per Week You Spent in Self Study"
              value={firstMethod.selfStudy}
              setValue={updateFirstMethod}
              valueType="selfStudy"
            />
            <DetailedInput
              title="Weeks/Semester*"
              desc="Number of Weeks in Your Semester"
              value={firstMethod.weeks}
              setValue={updateFirstMethod}
              valueType="weeks"
            />
            <DetailedInput
              title="Hours/ECTS"
              desc="Range of Hours for 1 ECTS Credits"
              value={firstMethod.credits}
              setValue={updateFirstMethod}
              valueType="credits"
            />

            <p>
              Your Equivalent ECTS is:{" "}
              <span>
                {getMul(true) === 0
                  ? "0.00"
                  : calculateFirstMethod().toFixed(2)}
              </span>
            </p>
          </div>

          <div className={classes.ects_or}>&quot;OR&quot;</div>

          <div className={classes.ects_inps}>
            <h4>Second Method</h4>
            <DetailedInput
              title="Subject/Overall Credits*"
              desc="Your Credit Hours for the Subject (In case of Overall, it's Total Credit Hours)"
              value={secondMethod.subjectCredits}
              setValue={updateSecondMethod}
              valueType="subjectCredits"
            />
            <DetailedInput
              title="Total Credits*"
              desc="Total Credit Hours for Your Total University Program"
              value={secondMethod.totalCredits}
              setValue={updateSecondMethod}
              valueType="totalCredits"
            />
            <DetailedInput
              title="Course Years*"
              desc="Number of Years in Your Course"
              value={secondMethod.years}
              setValue={updateSecondMethod}
              valueType="years"
            />
            <DetailedInput
              title="ECTS/Year"
              desc="Standard ECTS credits assigned per year (typically 60 ECTS)"
              value={secondMethod.ects}
              setValue={updateSecondMethod}
              valueType="ects"
            />

            <p>
              Your Equivalent ECTS is:{" "}
              <span>
                {getMul() === 0 ? "0.00" : calculateSecondMethod().toFixed(2)}
              </span>
            </p>
          </div>

          <Faqs {...ectsQna} />
        </div>

        <SupportedCountries {...ectsCountries} />
      </section>
    </>
  );
};

export default CGPAToECTS;
