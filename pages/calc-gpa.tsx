import { NextPage } from "next";
import { useState } from "react";
import InputModelComponent from "../components/input/input-model";
import InputComponent from "./../components/input/input";
import ButtonComponent from "./../components/button/button";

import classes from "../styles/calc-gpa.module.css";

const CalcGPA: NextPage = () => {
  const [inputFields, setInputFields] = useState<Array<number | undefined>>([
    0, 1, 2,
  ]);
  const [isDelete, setIsDelete] = useState<string>("");

  console.log("hello");

  const handleAdd = () => {
    const inps: Array<number | undefined> = [
      ...inputFields,
      inputFields.length,
    ];
    setInputFields(inps);
  };

  const handleCheckResult = () => {
    const data = [];
    for (let i in inputFields) {
      const inp_values = document.getElementById(`inp_${i}`)!;
      data.push({
        marks: (inp_values.childNodes[0] as HTMLInputElement).value,
        grade: (inp_values.childNodes[2] as HTMLSelectElement).value,
      });
    }
    console.log(data);
  };

  if (isDelete && isDelete.length >= 5) {
    let inps: Array<number | undefined> = inputFields.map((x) => {
      if (Number(x) !== Number(isDelete.split("_")[1])) {
        return x;
      }
    });
    console.log("hello");
    setInputFields(inps);
    setIsDelete("");
  }

  return (
    <section className={classes.gpa}>
      <div className={classes.gpa_calc}>
        <div className={classes.gpa_calc_details}>
          <h1>Your Details</h1>
        </div>
        <div>
          <InputComponent setDelete={setIsDelete} id="inp_0" isDelete={false} />
          <InputComponent setDelete={setIsDelete} id="inp_1" isDelete={false} />
          <InputComponent setDelete={setIsDelete} id="inp_2" isDelete={false} />
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
          text="Caclulate Result"
          inverted={false}
          onClick={handleCheckResult}
        >
          Get Result
        </ButtonComponent>
      </div>
      <div className={classes.gpa_result}>Result</div>
    </section>
  );
};

export default CalcGPA;
