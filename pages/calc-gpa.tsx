import { NextPage } from "next";
import { useContext, useEffect, useMemo, useState } from "react";
import { useAptabase } from "@aptabase/react";

import GradingComponent from "@/components/ui/grading/grading";
import ExportButtons from "@/components/ui/export-buttons";
import AppContext from "@/context/app-context";
import MetaHead from "@/components/ui/meta-head";
import Threshold from "@/components/ui/threshold";
import ResultPane from "@/components/ui/result-pane";
import { GpaCalculatorInputs } from "@/components/index";
import { calcGpa, gpaCountries, gpaQna } from "@/data/index";
import Faqs from "@/components/ui/faqs";
import PageHeading from "@/components/ui/page-heading";
import { Wave1 } from "../assets";
import SupportedCountries from "@/components/ui/supported-countries";

import classes from "@/styles/calc-gpa.module.css";

const CalcGPA: NextPage = () => {
  const [inputFields, setInputFields] = useState<Array<number | undefined>>([
    0, 1, 2,
  ]);
  const [isDelete, setIsDelete] = useState<string>("");
  const [gradeThreshold, setGradeThreshold] = useState<number>(4);
  const [details, setDetails] = useState<{ obtained: number; total: number }>({
    obtained: 0,
    total: 0,
  });
  const [resData, setResData] = useState<
    Array<{ credits: string; grade: string }>
  >([]);
  const { trackEvent } = useAptabase();
  const { grades } = useContext(AppContext);

  useEffect(() => {
    trackEvent("PAGE_VIEW", { page: "calc-gpa", name: "Calculate GPA" });
  }, []);

  const handleAdd = () => {
    const inps: Array<number | undefined> = [
      ...inputFields,
      inputFields.length,
    ];
    setInputFields(inps);
  };

  const handleCheckResult = () => {
    const data: Array<{ credits: string; grade: string }> = [];
    for (let i in inputFields) {
      const inp_values: HTMLElement = document.getElementById(`inp_${i}`)!;
      data.push({
        credits: (inp_values.childNodes[0] as HTMLInputElement).value,
        grade: (inp_values.childNodes[2] as HTMLInputElement).value,
      });
    }
    calculateGPA(data);
    setResData(data);
  };

  const calculateGPA = (data: Array<{ credits: string; grade: string }>) => {
    const resArr = data.map((totObt: { credits: string; grade: string }) => {
      const obtained = Number(totObt.credits) * Number(totObt.grade);
      const total = Number(totObt.credits);
      return { obtained, total };
    });

    let obtained = 0;
    let total = 0;
    resArr.map((r: { obtained: number; total: number }) => {
      obtained += r.obtained;
      total += r.total;
    });

    total = total * gradeThreshold;
    setDetails({ obtained, total });
  };

  if (isDelete && isDelete.length >= 5) {
    let inps: Array<number> = [];
    inputFields.map((x) => {
      if (Number(x) !== Number(isDelete.split("_")[1]))
        if (typeof x != "undefined") inps.push(x);
    });
    setInputFields(inps);
    setIsDelete("");
  }

  const exportData = useMemo(() => {
    return {
      marks: resData.map((data) => {
        const grade = grades.find((grade) => grade.value === +data.grade);

        return {
          credits: data.credits,
          grade: data.grade,
          gradeAlpha: grade?.text!,
        };
      }),
      marksObtained: +details.obtained.toFixed(2),
      totalMarks: +details.total.toFixed(2),
      gradeThreshold: +gradeThreshold.toFixed(2),
      gpa: +((+details.obtained / +details.total) * +gradeThreshold).toFixed(2),
      isGpa: true,
    };
  }, [resData, grades, details.obtained, details.total, gradeThreshold]);

  return (
    <>
      <MetaHead {...calcGpa} />
      <section className={classes.gpa}>
        <div className={classes.gpa_align}>
          <PageHeading
            title={calcGpa.pageTitle}
            desc={calcGpa.desc}
            steps={calcGpa.steps}
          />

          <Threshold value={gradeThreshold} setValue={setGradeThreshold} />

          <ExportButtons
            disabled={details.obtained === 0}
            exportData={exportData}
          />

          <div className={classes.gpa_align_middle}>
            <GradingComponent />
          </div>

          <div className={classes.gpa_align_bottom}>
            <GpaCalculatorInputs
              setIsDelete={setIsDelete}
              inputFields={inputFields}
              handleAdd={handleAdd}
              handleCheckResult={handleCheckResult}
            />

            <ResultPane
              title="Your GPA"
              details={details}
              gradeThreshold={gradeThreshold}
            />
          </div>
        </div>

        <Faqs faqs={gpaQna} />

        <div className={`${classes.wave} ${classes.wave_2}`}>
          <Wave1 />
        </div>
        <SupportedCountries
          title="GPA Supported Countries"
          subTitle="We support the following countries for GPA"
          headingType="default"
          bgType="default"
          countryList={gpaCountries}
        />
      </section>
    </>
  );
};

export default CalcGPA;
