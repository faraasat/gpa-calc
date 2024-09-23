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

const qns = [
  {
    question: "What is this page about?",
    answer:
      "This page provides an advanced CGPA calculator that allows users to calculate their CGPA (Cumulative Grade Point Average) with a fully customizable grading system. The tool is designed to accommodate various grading systems used in the US, India, Europe, and other regions.",
  },
  {
    question: "What makes this CGPA calculator unique?",
    answer:
      "This calculator is unique because it allows users to customize the grading scales, GPA thresholds, and letter grade ranges according to their specific grading system, making it adaptable for different countries and institutions.",
  },
  {
    question: "Who can benefit from this CGPA calculator?",
    answer:
      "Students, educators, academic institutions, and anyone needing to calculate or convert CGPAs across different grading systems can benefit from this tool. It's especially useful for those transitioning between different educational systems.",
  },
  {
    question: "How does the calculator support different grading systems?",
    answer:
      "The calculator allows users to dynamically adjust grading scales, GPA thresholds, and letter grade ranges to match various grading systems such as the 4.0 scale in the US, percentage-based systems in India, and European systems like ECTS.",
  },
  {
    question: "Can users export their CGPA calculations?",
    answer:
      "Yes, users can easily export their CGPA calculations and reports in both CSV and JSON formats, making it convenient for record-keeping and academic submissions.",
  },
  {
    question: "Is this calculator user-friendly?",
    answer:
      "Absolutely! The tool is designed with simplicity and ease of use in mind, offering a user-friendly interface where users can input their grades, adjust settings, and get instant results with minimal effort.",
  },
  {
    question: "Does the calculator offer preset grading systems?",
    answer:
      "Yes, the tool offers preset grading systems for regions like the US, India, and Europe. Users can either choose these presets or fully customize the settings to fit their unique requirements.",
  },
  {
    question: "How does this tool handle letter grades?",
    answer:
      "The calculator allows users to define or adjust the letter grade ranges (A, B, C, etc.) and their corresponding GPA values, ensuring flexibility across different grading systems.",
  },
  {
    question: "Can this tool be used for multiple semesters or subjects?",
    answer:
      "Yes, users can input grades for multiple subjects and semesters to calculate an accurate cumulative CGPA, which is useful for tracking academic progress over time.",
  },
  {
    question: "Is it possible to adjust GPA thresholds?",
    answer:
      "Yes, users can adjust the GPA thresholds to match the requirements of their educational institution or country. This flexibility ensures accurate CGPA results regardless of the grading scale.",
  },
  {
    question: "How does the tool handle percentage-based grading systems?",
    answer:
      "For percentage-based systems like those used in India, the calculator allows users to convert percentage scores into GPA, using custom or preset conversion scales.",
  },
  {
    question: "Is there an option to reset or clear the data entered?",
    answer:
      "Yes, the tool provides an option to reset or clear entered data, allowing users to start fresh with a new set of grades without any hassle.",
  },
  {
    question: "How can users access the exported reports?",
    answer:
      "After calculating the CGPA, users can export their results directly into CSV or JSON formats with just one click, making it easy to download and share.",
  },
  {
    question: "What are the benefits of exporting reports in CSV or JSON?",
    answer:
      "Exporting reports in CSV or JSON formats allows for easy data manipulation, storage, and integration with other systems, making it ideal for academic reporting, analysis, and record-keeping.",
  },
  {
    question: "Is this CGPA calculator free to use?",
    answer:
      "Yes, this CGPA calculator is completely free to use, offering all its features without any cost, making it accessible for students and educators worldwide.",
  },
];

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
      <Head>
        <title>
          CGPA Calculator with Custom Grading System | Adjust GPA Criteria for
          US, India, Europe | Easily Export Reports in CSV & JSON
        </title>
        <meta
          name="description"
          content="Accurately calculate your CGPA using our advanced CGPA calculator with a fully customizable grading system tailored for the US, India, Europe, and other regions. Dynamically adjust GPA thresholds, grading scales, and letter grade ranges to fit your unique requirements. Generate detailed reports in both CSV and JSON formats with just a click, making it perfect for students, educators, and institutions. Whether you're adapting to a new grading system or exporting results for academic purposes, our tool simplifies the process with user-friendly features and flexible grading criteria. Try it now to streamline your CGPA calculations!"
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
