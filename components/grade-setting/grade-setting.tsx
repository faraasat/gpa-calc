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
      const isChecked = (elmes[0].children[0] as HTMLInputElement).checked;

      const text = (elmes[1].children[0].children[1] as HTMLInputElement).value;
      const min = Number(
        (elmes[1].children[1].children[1] as HTMLInputElement).value
      );
      const max = Number(
        (elmes[1].children[1].children[2] as HTMLInputElement).value
      );
      const value = Number(
        (elmes[1].children[2].children[1] as HTMLInputElement).value
      );
      const result: IGrade = {
        checked: isChecked,
        text,
        min,
        max,
        value,
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
