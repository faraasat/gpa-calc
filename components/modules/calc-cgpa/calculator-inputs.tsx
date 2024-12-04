import { Dispatch, FC, SetStateAction } from "react";

import ButtonComponent from "@/components/ui/button/button";
import InputCGPAComponent from "@/components/ui/input/input-cgpa";
import InputModelCGPAComponent from "@/components/ui/input/input-model-cgpa";

import classes from "@/styles/calc-cgpa.module.css";

const CalculatorInputs: FC<{
  setIsDelete: Dispatch<SetStateAction<string>>;
  inputFields: (number | undefined)[];
  handleAdd: () => void;
  handleCheckResult: () => void;
}> = ({ setIsDelete, inputFields, handleAdd, handleCheckResult }) => {
  return (
    <div className={classes.cgpa_calc}>
      <div className={classes.cgpa_calc_details}>
        <h4>Your Details</h4>
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
  );
};

export default CalculatorInputs;
