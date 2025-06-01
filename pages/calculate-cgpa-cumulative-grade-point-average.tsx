import { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import { useAptabase } from "@aptabase/react";

import ExportButtons from "@/components/ui/export-buttons";
import MetaHead from "@/components/ui/meta-head";
import ResultPane from "@/components/ui/result-pane";
import Threshold from "@/components/ui/threshold";
import { CgpaCalculatorInputs } from "@/components/index";
import { calCgpa, cgpaCountries, cgpaQna, pageMultiplex } from "@/data/index";
import Faqs from "@/components/ui/faqs";
import PageHeading from "@/components/ui/page-heading";
import SupportedCountries from "@/components/ui/supported-countries";

import classes from "@/styles/calc-cgpa.module.css";
import AdBanner from "@/components/ui/ads";

const CalcCGPA: NextPage = () => {
  const [gradeThreshold, setGradeThreshold] = useState<number>(4);
  const [isDelete, setIsDelete] = useState<string>("");
  const [inputFields, setInputFields] = useState<Array<number | undefined>>([
    0, 1, 2,
  ]);
  const [details, setDetails] = useState<{ obtained: number; total: number }>({
    obtained: 0,
    total: 0,
  });
  const [resData, setResData] = useState<
    Array<{ credits: string; grade: string }>
  >([]);
  const { trackEvent } = useAptabase();

  useEffect(() => {
    trackEvent("PAGE_VIEW", { page: "calc-cgpa", name: "Calculate CGPA" });
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
    for (const i in inputFields) {
      const inp_values: HTMLElement = document.getElementById(`cgpa_inp_${i}`)!;
      data.push({
        credits: (inp_values.childNodes[0] as HTMLInputElement).value,
        grade: (inp_values.childNodes[1] as HTMLInputElement).value,
      });
    }
    calculateCGPA(data);
    setResData(data);
  };

  const calculateCGPA = (data: Array<{ credits: string; grade: string }>) => {
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
    const inps: Array<number> = [];
    inputFields.map((x) => {
      if (Number(x) !== Number(isDelete.split("_")[2]))
        if (typeof x != "undefined") inps.push(x);
    });
    setInputFields(inps);
    setIsDelete("");
  }

  const exportData = useMemo(() => {
    return {
      marks: resData.map((data) => {
        return {
          credits: data.credits,
          grade: data.grade,
        };
      }),
      marksObtained: +details.obtained.toFixed(2),
      totalMarks: +details.total.toFixed(2),
      gradeThreshold: +gradeThreshold.toFixed(2),
      gpa: +((+details.obtained / +details.total) * +gradeThreshold).toFixed(2),
      isGpa: false,
    };
  }, [resData, details.obtained, details.total, gradeThreshold]);

  return (
    <>
      <MetaHead {...calCgpa} />

      <section className="relative z-50 py-28">
        <div className="flex flex-col gap-5 container">
          <PageHeading
            title={calCgpa.pageTitle}
            desc={calCgpa.desc}
            steps={calCgpa.steps}
          />

          <Threshold value={gradeThreshold} setValue={setGradeThreshold} />

          <ExportButtons
            disabled={details.obtained === 0}
            exportData={exportData}
          />

          <div className={classes.cgpa_align_bottom}>
            <CgpaCalculatorInputs
              setIsDelete={setIsDelete}
              inputFields={inputFields}
              handleAdd={handleAdd}
              handleCheckResult={handleCheckResult}
            />

            <ResultPane
              title="YOur CGPA"
              details={details}
              gradeThreshold={gradeThreshold}
            />
          </div>
        </div>

        {pageMultiplex?.[0] && <AdBanner slot={pageMultiplex[0]} />}

        <Faqs {...cgpaQna} />

        <SupportedCountries {...cgpaCountries} />
      </section>
    </>
  );
};

export default CalcCGPA;
