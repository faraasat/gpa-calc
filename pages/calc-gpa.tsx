import { NextPage } from "next";
import { useState } from "react";

import classes from "../styles/calc-gpa.module.css";
import InputComponent from "./../components/input/input";

const CalcGPA: NextPage = () => {
  const [inputFields, setInputFields] = useState<Array<number>>([0, 1, 2]);

  const handleAdd = (_event: any) => {
    const inps: Array<number> = [...inputFields, inputFields.length];
    setInputFields(inps);
  };

  return (
    <section className={classes.gpa}>
      <div className={classes.gpa_calc}>
        <div>
          <h1>Your Details</h1>
        </div>
        <div>
          <InputComponent />
          <InputComponent />
          <InputComponent />
          {inputFields.length > 3 &&
            inputFields.map((infs, index) => {
              if (infs >= 3) {
                return <InputComponent key={index} />;
              }
            })}
        </div>
        <button onClick={handleAdd}>Add Input</button>
      </div>
      <div className={classes.gpa_result}>Result</div>
    </section>
  );
};

export default CalcGPA;
