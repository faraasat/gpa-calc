import { Dispatch, SetStateAction } from "react";

export interface InputType {
  isDelete: boolean;
  id: string;
  setDelete: Dispatch<SetStateAction<string>>;
}
