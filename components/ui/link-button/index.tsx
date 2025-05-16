import { FC, JSX } from "react";
import Link, { LinkProps } from "next/link";

const LinkButton: FC<
  LinkProps & {
    className?: string;
    type?: "default" | "white" | "orange";
    btnStyle?: "default" | "rounded";
    children: JSX.Element | string;
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
      className={`px-2.5 py-4 round-sm pointer transition-all ${
        btnStyle === "rounded" ? "rounded-xl" : "rounded-sm"
      } ${
        type === "orange"
          ? "bg-(--orange)"
          : type === "white"
          ? "bg-white text-(--blue)"
          : "bg-(--blue)"
      } hover:scale-110 ${className ? className : ""}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
