import { NextPage } from "next";
import { useContext, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useAptabase } from "@aptabase/react";

import InputModelComponent from "@/components/ui/input/input-model";
import InputComponent from "@/components/ui/input/input";
import ButtonComponent from "@/components/ui/button/button";
import GradingComponent from "@/components/ui/grading/grading";
import ExportButtons from "@/components/ui/export-buttons";
import AppContext from "@/context/app-context";

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
    trackEvent("PAGE_VIEW", { page: "calc-gpa" });
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
      <Head>
        <title>Calculate Your GPA</title>
        <meta
          name="description"
          content="Calculate your GPA easily using dynamic gpa calculator."
        />
        <meta
          name="keywords"
          content="gpa, calculator, gpa calculator, cgpa, cgpa calculator, university, bahria, bahria university, college, marks, grade, education, online GPA calculator, student GPA calculator, academic progress, grade calculation, CGPA calculation, GPA and CGPA, GPA calculation tool, accurate GPA calculation, quick GPA calculation, reliable GPA calculation"
        />
      </Head>
      <section className={classes.gpa}>
        <div className={classes.gpa_align}>
          <div className={classes.gpa_align_top}>
            <div>GPA Threshold</div>
            <input
              type="number"
              min={4}
              max={100}
              value={gradeThreshold}
              onChange={(e) => setGradeThreshold(Number(e.target.value))}
              placeholder="Grade Threshold"
            />
          </div>
          <div className={classes.gpa_align_middle}>
            <GradingComponent />
          </div>

          <ExportButtons
            disabled={details.obtained === 0}
            exportData={exportData}
          />

          <div className={classes.gpa_align_bottom}>
            <div className={classes.gpa_calc}>
              <div className={classes.gpa_calc_details}>
                <h1>Your Details</h1>
              </div>
              <div className={classes.gpa_calc_inps}>
                <InputComponent
                  setDelete={setIsDelete}
                  id="inp_0"
                  isDelete={false}
                  className="gpa-inps-grade"
                />
                <InputComponent
                  setDelete={setIsDelete}
                  id="inp_1"
                  isDelete={false}
                  className="gpa-inps-grade"
                />
                <InputComponent
                  setDelete={setIsDelete}
                  id="inp_2"
                  isDelete={false}
                  className="gpa-inps-grade"
                />
                {inputFields.length > 3 &&
                  inputFields.map((infs, index) => {
                    if (infs! >= 3) {
                      return (
                        <InputComponent
                          setDelete={setIsDelete}
                          id={`inp_${infs}`}
                          key={index}
                          isDelete={true}
                        />
                      );
                    }
                  })}
                <InputModelComponent handleAdd={handleAdd} />
              </div>
              <ButtonComponent
                text="Calculate Result"
                inverted={false}
                onClick={handleCheckResult}
              >
                Get Result
              </ButtonComponent>
            </div>
            <div className={classes.gpa_result}>
              <div className={classes.gpa_calc_details}>
                <h1>Your GPA</h1>
              </div>
              <div className={classes.gpa_result_details}>
                <div className={classes.gpa_result_detail_1}>
                  {`${details.obtained.toFixed(2)}`} /{" "}
                  {details.total.toFixed(2)} =&nbsp;
                  {details.obtained !== 0
                    ? parseFloat(`${details.obtained / details.total}`).toFixed(
                        2
                      )
                    : 0}
                </div>
                <div className={classes.gpa_result_detail_2}>
                  {details.obtained !== 0
                    ? parseFloat(`${details.obtained / details.total}`).toFixed(
                        2
                      )
                    : 0}{" "}
                  * {gradeThreshold} ={" "}
                  {details.obtained !== 0
                    ? parseFloat(
                        `${(details.obtained / details.total) * gradeThreshold}`
                      ).toFixed(2)
                    : 0}
                </div>
                <div className={classes.gpa_result_detail_3}>
                  <span>Your GPA:&nbsp;</span>
                  <span>
                    {details.obtained !== 0
                      ? parseFloat(
                          `${
                            (details.obtained / details.total) * gradeThreshold
                          }`
                        ).toFixed(2)
                      : 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalcGPA;
