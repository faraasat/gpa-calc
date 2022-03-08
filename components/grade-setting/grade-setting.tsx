import { FC } from "react";
import { X } from "react-feather";

import ButtonComponent from "../button/button";
import GradeSettingInputComponent from "../grade-setting-input/grade-setting-input";

import { IGradeSetting } from "./grade-setting.d";

import classes from "./grade-setting.module.css";

const GradeSettingComponent: FC<IGradeSetting> = (props: IGradeSetting) => {
  const handleCancel = () => {
    document.getElementById("grading-window")!.style.display = "none";
  };

  const handleApply = () => {
    const gradings = props.gradings.map((_grading, index) => {
      const elmes = (
        document.getElementById(`grading_input_${index}`) as HTMLElement
      ).children;
      const min = elmes[1].getElementsByTagName("input")[0].value;
      const max = elmes[1].getElementsByTagName("input")[1].value;
      return {
        grade: elmes[0].getElementsByTagName("input")[0].value,
        min: min,
        max: max,
        grade_points: elmes[2].getElementsByTagName("input")[0].value,
      };
    });
    console.log(gradings);
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
          {props.gradings.map((grading, index) => (
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
