import { FC } from "react";

import classes from "./button.module.css";
import { IButton } from "./button.d";

const ButtonComponent: FC<IButton> = (props: IButton) => {
  const { onClick, text, inverted } = props;

  return (
    <button
      onClick={onClick}
      className={`${classes.btn} ${
        inverted ? classes.btn_inverted : classes.btn_original
      }`}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
