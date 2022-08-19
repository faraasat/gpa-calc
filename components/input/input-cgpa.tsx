import { FC, useState } from "react";
import { XCircle } from "react-feather";

import { InputType } from "./input.d";

import classes from "./input.module.css";

const InputCGPAComponent: FC<InputType> = (props: InputType): JSX.Element => {
  const [optionGrades, setOptionGrades] = useState<number>(-1);
  const [credit, setCredit] = useState<number>(0);
  const handleGrades = (e: any) => {
    setOptionGrades(e.target.value);
  };
  const handleCredit = (e: any) => {
    setCredit(e.target.value);
  };

  return (
    <div className={classes.inputs} id={props.id}>
      <input
        type="number"
        placeholder="Credit Hours"
        defaultValue={undefined}
        onChange={handleCredit}
      />
      <span />
      <input
        type="number"
        placeholder="Grade Marks"
        defaultValue={undefined}
        onChange={handleGrades}
      />
      <span />
      <input
        type="number"
        disabled
        placeholder="Total Marks"
        value={
          credit > 0 && optionGrades >= 0
            ? Number(credit) * Number(optionGrades)
            : 0
        }
      />
      <span />
      <button
        className={`${classes.input_delete_button} ${
          !props.isDelete ? classes.disable_delete : classes.enable_delete
        }`}
        disabled={!props.isDelete}
        onClick={() => props.setDelete(props.id)}
        title="Delete Row"
      >
        <XCircle size={30} color="#fff" />
      </button>
    </div>
  );
};

export default InputCGPAComponent;
