import { FC, Fragment } from "react";

import ButtonComponent from "./../button/button";

import { IGrade } from "./grading.d";

import classes from "./grading.module.css";

const GradingComponent: FC = () => {
  const handleGradingWindow = () => {
    document.getElementById("grading-window")!.style.display = "block";
  };

  const grade_list: Array<IGrade> = [
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
  ];
  return (
    <div className={classes.grading}>
      <div className={classes.grading_list}>
        {grade_list.map((grades: IGrade) => (
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
