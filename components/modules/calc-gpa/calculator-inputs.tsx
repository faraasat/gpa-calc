import { Dispatch, FC, SetStateAction } from "react";

import ButtonComponent from "@/components/ui/button/button";
import InputComponent from "@/components/ui/input/input";
import InputModelComponent from "@/components/ui/input/input-model";

import classes from "@/styles/calc-gpa.module.css";

const CalculatorInputs: FC<{
  setIsDelete: Dispatch<SetStateAction<string>>;
  inputFields: (number | undefined)[];
  handleAdd: () => void;
  handleCheckResult: () => void;
}> = ({ setIsDelete, inputFields, handleAdd, handleCheckResult }) => {
  return (
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
  );
};

export default CalculatorInputs;
