import { createContext, FC, useState } from "react";
import { IGrade } from "./../components/grading/grading.d";

interface IAppContext {
  grades: Array<IGrade>;
  setGradeSetting: (grades: Array<IGrade>) => void;
}

const default_app_context: IAppContext = {
  grades: [
    { text: "A", min: 85, max: 100, value: 4 },
    { text: "A-", min: 80, max: 84, value: 3.67 },
    { text: "B+", min: 75, max: 79, value: 3.33 },
    { text: "B", min: 71, max: 74, value: 3 },
    { text: "B-", min: 68, max: 70, value: 2.67 },
    { text: "C+", min: 64, max: 67, value: 2.33 },
    { text: "C", min: 60, max: 63, value: 2 },
    { text: "C-", min: 57, max: 59, value: 1.87 },
    { text: "D+", min: 53, max: 56, value: 1.33 },
    { text: "D", min: 50, max: 52, value: 1 },
    { text: "F", min: 0, max: 49, value: 0 },
  ],
  setGradeSetting: (grades: IGrade[]) => {},
};

const AppContext = createContext<IAppContext>(default_app_context);

export const AppContextProvider: FC = ({ children }) => {
  const [grades, setGrades] = useState<Array<IGrade>>(
    default_app_context.grades
  );
  const setGradeSetting = (grades: Array<IGrade>) => {
    setGrades(grades);
  };
  const value = {
    grades,
    setGradeSetting,
  };
  return (
    <AppContext.Provider value={value as any}>{children}</AppContext.Provider>
  );
};

export default AppContext;
