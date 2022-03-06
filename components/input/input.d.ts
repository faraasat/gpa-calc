import { ReactChildren } from "react";

export interface InputType {
  isDelete: boolean;
  id: string;
  setDelete?: (id: string) => {};
}
