import { NextComponentType } from "next";

import classes from "./input.module.css";

const InputComponent: NextComponentType = () => {
  return (
    <div className={classes.inputs}>
      <input type="number" min={0} max={4} />
      <span />
      <select>
        <option>Select Grade</option>
      </select>
      <span />
      <input type="number" min={0} max={30} disabled />
      <span />
      <input type="number" min={0} max={30} disabled />
    </div>
  );
};

export default InputComponent;
