import { NextPage } from "next";
import { useState } from "react";
import InputModelComponent from "../components/input/input-model";
import InputComponent from "./../components/input/input";

import classes from "../styles/calc-gpa.module.css";

const CalcGPA: NextPage = () => {
  const [inputFields, setInputFields] = useState<Array<number>>([0, 1, 2]);
  const [isDelete, setIsDelete] = useState<number>(-1);

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
          <InputComponent id="inp_1" isDelete={false} />
          <InputComponent id="inp_4" isDelete={false} />
          <InputComponent id="inp_3" isDelete={false} />
          {inputFields.length > 3 &&
            inputFields.map((infs, index) => {
              if (infs >= 3) {
                return (
                  <InputComponent
                    id={`inp_${infs}`}
                    key={index}
                    isDelete={true}
                  />
                );
              }
            })}
          <InputModelComponent />
        </div>
        <button onClick={handleAdd}>Add Input</button>
      </div>
      <div className={classes.gpa_result}>Result</div>
    </section>
  );
};

export default CalcGPA;
