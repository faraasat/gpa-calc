import { FC } from "react";
import { PlusCircle } from "react-feather";
import { IInputModel } from "./input-model.d";

import classes from "./input-model.module.css";

const InputModelComponent: FC<IInputModel> = (props) => {
  return (
    <div className={classes.input_model}>
      <input type="number" disabled={true} />
      <select disabled></select>
      <input type="number" disabled={true} />
      <input type="number" disabled={true} />
      <button onClick={props.handleAdd} title="Add Row">
        <PlusCircle size={30} color="#fff" />
      </button>
    </div>
  );
};

export default InputModelComponent;
