import { FC, useContext } from "react";

import AppContext from "@/context/app-context";
import ButtonComponent from "./../button/button";

import { IGrade } from "./grading.d";

import classes from "./grading.module.css";

const GradingComponent: FC = () => {
  const handleGradingWindow = () => {
    document.getElementById("grading-window")!.style.display = "block";
  };

  const { grades } = useContext(AppContext);

  const filteredGrades: Array<IGrade> = [];
  grades.map((grade) => {
    if (grade.checked) {
      filteredGrades.push(grade);
    }
  });

  return (
    <div className={classes.grading}>
      <div className={classes.grading_list}>
        {filteredGrades.map((grades: IGrade) => (
          <p key={grades.value} className={classes.grading_item}>
            <span>{grades.text}&nbsp;&#x0003A;&nbsp;</span>
            <span>
              {grades.min}&nbsp;&minus;&nbsp;{grades.max}&nbsp;
            </span>
            <span>
              <b>&rarr;&nbsp;{grades.value}</b>
            </span>
          </p>
        ))}
      </div>
      <div className={classes.grading_btn}>
        <ButtonComponent
          text="Change Grading Scale"
          onClick={handleGradingWindow}
          inverted={true}
        />
      </div>
    </div>
  );
};

export default GradingComponent;
