import { FC, useContext, useState } from "react";
import { XCircle } from "react-feather";

import AppContext from "../../context/app-context";

import { InputType } from "./input.d";
import { IGrade } from "./../grading/grading.d";

import classes from "./input.module.css";

const InputComponent: FC<InputType> = (props: InputType): JSX.Element => {
  const { grades } = useContext(AppContext);
  const [optionGrades, setOptionGrades] = useState<number>(-1);
  const [credit, setCredit] = useState<number>(0);
  const handleGrades = (e: any) => {
    setOptionGrades(e.target.selectedOptions[0].value);
  };
  const handleCredit = (e: any) => {
    setCredit(e.target.value);
  };

  return (
    <div className={classes.inputs} id={props.id}>
      <input
        type="number"
        min={0}
        max={4}
        placeholder="Credit Hours"
        defaultValue={undefined}
        onChange={handleCredit}
      />
      <span />
      <select onChange={handleGrades}>
        <option value={-1}>Select Grade</option>
        {grades.map((grade: IGrade, index: number) => (
          <option value={index} key={index}>
            {grade.text}
          </option>
        ))}
      </select>
      <span />
      <input
        type="number"
        min={0}
        max={30}
        disabled
        placeholder="Grade Marks"
        value={optionGrades >= 0 ? grades[optionGrades].value : ""}
      />
      <span />
      <input
        type="number"
        min={0}
        max={30}
        disabled
        placeholder="Total Marks"
        value={
          credit > 0 && optionGrades >= 0
            ? Number(credit) * Number(grades[optionGrades].value)
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

export default InputComponent;
