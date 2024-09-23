import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { useAptabase } from "@aptabase/react";

import ButtonComponent from "@/components/ui/button/button";
import InputCGPAComponent from "@/components/ui/input/input-cgpa";
import InputModelCGPAComponent from "@/components/ui/input/input-model-cgpa";
import ExportButtons from "@/components/ui/export-buttons";

import classes from "@/styles/calc-cgpa.module.css";

const qna = [
  {
    question: "What is the purpose of this page?",
    answer:
      "The page allows users to easily calculate their overall CGPA by entering GPA and credit hours for each semester.",
  },
  {
    question: "How does this page help users?",
    answer:
      "It helps users calculate their cumulative CGPA over multiple semesters and provides export options for detailed reports in CSV and JSON formats.",
  },
  {
    question: "Who is the target audience of this page?",
    answer:
      "The target audience includes students and educators who need a quick and efficient way to track academic performance across semesters.",
  },
  {
    question: "What inputs are required from the user?",
    answer:
      "Users need to input their GPA and the corresponding credit hours for each semester.",
  },
  {
    question: "Can users customize GPA thresholds on this page?",
    answer:
      "Yes, users can customize GPA thresholds according to their academic institution's requirements.",
  },
  {
    question: "What types of reports can users generate?",
    answer: "Users can generate detailed reports in CSV or JSON formats.",
  },
  {
    question: "Is the page designed for fast calculations?",
    answer:
      "Yes, the page is designed to offer a fast and user-friendly solution for CGPA calculations.",
  },
  {
    question: "What formats can users export their CGPA reports in?",
    answer: "Users can export their CGPA reports in CSV and JSON formats.",
  },
  {
    question: "Can the page handle multiple semester entries?",
    answer:
      "Yes, users can input GPA and credit hours for multiple semesters to get an overall CGPA calculation.",
  },
  {
    question: "What does CGPA stand for?",
    answer: "CGPA stands for Cumulative Grade Point Average.",
  },
  {
    question: "Is this page only useful for students?",
    answer:
      "No, the page is useful for both students and educators who need to track academic performance.",
  },
  {
    question: "Does the page provide any downloadable reports?",
    answer:
      "Yes, the page allows users to download CGPA reports in CSV or JSON format.",
  },
  {
    question: "What is the primary function of this page?",
    answer:
      "The primary function is to calculate and track CGPA based on the inputted GPA and credit hours from different semesters.",
  },
  {
    question: "Is there any mention of how quickly calculations are processed?",
    answer: "Yes, the page promises fast and easy CGPA calculations.",
  },
  {
    question: "Is this tool limited to specific educational systems?",
    answer:
      "No, the tool is customizable, allowing users to set GPA thresholds, making it adaptable to various educational systems.",
  },
];

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
    for (let i in inputFields) {
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
    let inps: Array<number> = [];
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
      <Head>
        <title>
          Easily Calculate Overall CGPA with Semester GPA & Credits | Quick
          Export to CSV & JSON Reports
        </title>
        <meta
          name="description"
          content="Easily calculate your overall CGPA by entering GPA and credit hours for each semester. Customize GPA thresholds, and quickly generate detailed reports in CSV or JSON formats. Perfect for students and educators looking for a fast, user-friendly solution to track academic performance across semesters."
        />
        <meta
          name="keywords"
          content="gpa, calculator, gpa calculator, cgpa, cgpa calculator, university, bahria, bahria university, college, marks, grade, education, online GPA calculator, student GPA calculator, academic progress, grade calculation, CGPA calculation, GPA and CGPA, GPA calculation tool, accurate GPA calculation, quick GPA calculation, reliable GPA calculation"
        />
      </Head>
      <section className={classes.cgpa}>
        <div className={classes.cgpa_align}>
          <div className={classes.cgpa_align_top}>
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
          <ExportButtons
            disabled={details.obtained === 0}
            exportData={exportData}
          />
          <div className={classes.cgpa_align_bottom}>
            <div className={classes.cgpa_calc}>
              <div className={classes.cgpa_calc_details}>
                <h1>Your Details</h1>
              </div>
              <div className={classes.cgpa_calc_inps}>
                <InputCGPAComponent
                  setDelete={setIsDelete}
                  id="cgpa_inp_0"
                  isDelete={false}
                />
                <InputCGPAComponent
                  setDelete={setIsDelete}
                  id="cgpa_inp_1"
                  isDelete={false}
                />
                <InputCGPAComponent
                  setDelete={setIsDelete}
                  id="cgpa_inp_2"
                  isDelete={false}
                />
                {inputFields.length > 3 &&
                  inputFields.map((infs, index) => {
                    if (infs! >= 3) {
                      return (
                        <InputCGPAComponent
                          setDelete={setIsDelete}
                          id={`cgpa_inp_${infs}`}
                          key={index}
                          isDelete={true}
                        />
                      );
                    }
                  })}
                <InputModelCGPAComponent handleAdd={handleAdd} />
              </div>
              <ButtonComponent
                text="Calculate Result"
                inverted={false}
                onClick={handleCheckResult}
              >
                Get Result
              </ButtonComponent>
            </div>
            <div className={classes.cgpa_result}>
              <div className={classes.cgpa_calc_details}>
                <h1>Your GPA</h1>
              </div>
              <div className={classes.cgpa_result_details}>
                <div className={classes.cgpa_result_detail_1}>
                  {`${details.obtained.toFixed(2)}`} /{" "}
                  {details.total.toFixed(2)} =&nbsp;
                  {details.obtained !== 0
                    ? parseFloat(`${details.obtained / details.total}`).toFixed(
                        2
                      )
                    : 0}
                </div>
                <div className={classes.cgpa_result_detail_2}>
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
                <div className={classes.cgpa_result_detail_3}>
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

export default CalcCGPA;
