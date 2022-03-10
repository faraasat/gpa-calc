import { FC, useContext } from "react";

import AppContext from "../../context/app-context";
import ButtonComponent from "./../button/button";

import { IGrade } from "./grading.d";

import classes from "./grading.module.css";

const GradingComponent: FC = () => {
  const handleGradingWindow = () => {
    document.getElementById("grading-window")!.style.display = "block";
  };

  const { grades } = useContext(AppContext);

  let filteredGrades: Array<IGrade> = [];
  grades.map((grade) => {
    if (grade.checked) {
      filteredGrades.push(grade);
    }
  });

  return (
    <div className={classes.grading}>
      <div className={classes.grading_list}>
        {filteredGrades.map((grades: IGrade) => (
          <div key={grades.value} className={classes.grading_item}>
            <span>{grades.text}&nbsp;&#x0003A;&nbsp;</span>
            <span>{grades.min}&nbsp;&minus;&nbsp;</span>
            <span>{grades.max}&nbsp;&rarr;&nbsp;</span>
            <span>{grades.value}</span>
          </div>
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
