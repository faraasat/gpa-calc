import { FC } from "react";
import { XCircle } from "react-feather";

import classes from "./input.module.css";
import { InputType } from "./input.d";

const InputComponent: FC<InputType> = (props: InputType): JSX.Element => {
  return (
    <div className={classes.inputs} id={props.id}>
      <input type="number" min={0} max={4} placeholder="Credit Hours" />
      <span />
      <select>
        <option>Select Grade</option>
      </select>
      <span />
      <input
        type="number"
        min={0}
        max={30}
        disabled
        placeholder="Grade Marks"
      />
      <span />
      <input
        type="number"
        min={0}
        max={30}
        disabled
        placeholder="Total Marks"
      />
      <span />
      <button
        className={`${classes.input_delete_button} ${
          !props.isDelete ? classes.disable_delete : classes.enable_delete
        }`}
        disabled={!props.isDelete}
        onClick={() => props.setDelete(props.id)}
        title="delete"
      >
        <XCircle size={30} color="#fff" />
      </button>
    </div>
  );
};

export default InputComponent;
