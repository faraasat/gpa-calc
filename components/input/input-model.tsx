import { FC } from "react";
import { PlusCircle } from "react-feather";

import classes from "./input-model.module.css";

const InputModelComponent: FC = () => {
  return (
    <div className={classes.input_model}>
      <input type="number" disabled={true} />
      <span />
      <select disabled>
      </select>
      <span />
      <input type="number" disabled={true} />
      <span />
      <input type="number" disabled={true} />
      <span />
      <button>
        <PlusCircle size={30} color="#fff" />
      </button>
    </div>
  );
};

export default InputModelComponent;
