import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

import classes from "./style.module.css";

const CustomButton: FC<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    className?: string;
    btnType?: "default" | "white" | "orange";
    btnStyle?: "default" | "rounded";
  }
> = ({
  children,
  className,
  btnType = "default",
  btnStyle = "default",
  ...props
}) => {
  return (
    <button
      className={`${classes.btn} ${
        btnType === "white"
          ? classes.btn_type_white
          : btnType === "orange"
          ? classes.btn_type_orange
          : classes.btn_type_default
      } ${
        btnStyle === "rounded"
          ? classes.btn_style_rounded
          : classes.btn_style_default
      } ${className ? className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
