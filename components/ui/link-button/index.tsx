import { FC } from "react";
import Link, { LinkProps } from "next/link";

import classes from "./style.module.css";

const LinkButton: FC<
  LinkProps & {
    className?: string;
    type?: "default" | "white";
    btnStyle?: "default" | "rounded";
  }
> = ({
  href,
  children,
  className,
  type = "default",
  btnStyle = "default",
  ...props
}) => {
  return (
    <Link
      href={href}
      className={`${classes.btn} ${
        type === "white" ? classes.btn_type_white : classes.btn_type_default
      } ${
        btnStyle === "rounded"
          ? classes.btn_style_rounded
          : classes.btn_style_default
      } ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
