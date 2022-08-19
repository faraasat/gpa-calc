import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import ButtonComponent from "../components/button/button";
import InputCGPAComponent from "../components/input/input-cgpa";
import InputModelCGPAComponent from "../components/input/input-model-cgpa";

import classes from "../styles/calc-cgpa.module.css";

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
        grade: (inp_values.childNodes[2] as HTMLInputElement).value,
      });
    }
    calculateCGPA(data);
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
    console.log(isDelete);
    let inps: Array<number> = [];
    inputFields.map((x) => {
      if (Number(x) !== Number(isDelete.split("_")[2]))
        if (typeof x != "undefined") inps.push(x);
    });
    setInputFields(inps);
    setIsDelete("");
  }

  return (
    <>
      <Head>
        <title>Calculate Your CGPA</title>
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
              <span style={{ marginTop: 15 }} />
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
                  {`${details.obtained}`} / {details.total} =&nbsp;
                  {details.obtained !== 0
                    ? parseFloat(`${details.obtained / details.total}`).toFixed(
                        3
                      )
                    : 0}
                </div>
                <div className={classes.cgpa_result_detail_2}>
                  {details.obtained !== 0
                    ? parseFloat(`${details.obtained / details.total}`).toFixed(
                        3
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
