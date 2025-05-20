import { JSX } from "react";

export interface IButton {
  text: string;
  inverted: boolean;
  onClick?: () => void;
  children?: JSX.Element | string;
}
