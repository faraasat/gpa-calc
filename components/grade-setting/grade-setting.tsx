import { FC, useContext } from "react";
import { X } from "react-feather";

import AppContext from "../../context/app-context";
import ButtonComponent from "../button/button";
import GradeSettingInputComponent from "../grade-setting-input/grade-setting-input";

import classes from "./grade-setting.module.css";
import { IGrade } from "./../grading/grading.d";

const GradeSettingComponent: FC = () => {
  const handleCancel = () => {
    document.getElementById("grading-window")!.style.display = "none";
  };

  const { grades, setGradeSetting } = useContext(AppContext);

  const handleApply = () => {
    const gradings: Array<IGrade> = grades.map((_grading, index) => {
      const elmes = (
        document.getElementById(`grading_input_${index}`) as HTMLElement
      ).children;
      const min: number = Number(
        elmes[1].getElementsByTagName("input")[0].value
      );
      const max: number = Number(
        elmes[1].getElementsByTagName("input")[1].value
      );
      const result: IGrade = {
        text: elmes[0].getElementsByTagName("input")[0].value,
        min: min,
        max: max,
        value: Number(elmes[2].getElementsByTagName("input")[0].value),
      };
      return result;
    });
    setGradeSetting(gradings);
    handleCancel();
  };

  return (
    <div className={classes.grade_setting}>
      <div className={classes.grade_setting_alignment}>
        <div className={classes.grade_setting_header}>
          <h1>Grade Setting</h1>
          <X size={40} onClick={handleCancel} />
        </div>
        <hr />
        <div className={classes.grade_setting_body}>
          {grades.map((grading, index) => (
            <GradeSettingInputComponent
              id={`grading_input_${index}`}
              grade={grading}
              key={grading.value}
            />
          ))}
        </div>
        <hr />
        <div className={classes.grade_setting_footer}>
          <ButtonComponent
            inverted={true}
            text="Cancel"
            onClick={handleCancel}
          />
          <ButtonComponent
            inverted={false}
            text="Apply"
            onClick={handleApply}
          />
        </div>
      </div>
    </div>
  );
};

export default GradeSettingComponent;
