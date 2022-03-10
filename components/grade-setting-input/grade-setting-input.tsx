import { FC, Fragment, useState } from "react";

import { IGradeSettingInput } from "./grade-setting-input.d";

import classes from "./grade-setting-input.module.css";

const GradeSettingInputComponent: FC<IGradeSettingInput> = (
  props: IGradeSettingInput
) => {
  const [checked, setChecked] = useState<boolean>(true);

  const handleChange = (e: boolean) => {
    setChecked(e);
  };

  return (
    <Fragment>
      <div className={classes.grade_setting_input} id={props.id}>
        <div className={classes.grade_setting_checkbox}>
          <input
            type="checkbox"
            defaultChecked={true}
            onChange={(e) => handleChange(e.target.checked)}
          />
          &nbsp;
        </div>
        <div className={classes.grade_setting_inputs}>
          <div>
            <del
              className={
                checked
                  ? classes.grade_setting_unstrike
                  : classes.grade_setting_strike
              }
            >
              <p>Grade:</p>
            </del>
            &nbsp;
            <input
              type="text"
              defaultValue={props.grade.text}
              disabled={!checked}
            />
            &nbsp;
          </div>
          <div>
            <del
              className={
                checked
                  ? classes.grade_setting_unstrike
                  : classes.grade_setting_strike
              }
            >
              <p>Range:</p>
            </del>
            &nbsp;
            <input
              type="number"
              defaultValue={props.grade.min}
              disabled={!checked}
            />
            &nbsp;-&nbsp;
            <input
              type="number"
              defaultValue={props.grade.max}
              disabled={!checked}
            />
            &nbsp;
          </div>
          <div>
            <del
              className={
                checked
                  ? classes.grade_setting_unstrike
                  : classes.grade_setting_strike
              }
            >
              <p>Grade Points:</p>
            </del>
            &nbsp;
            <input
              type="number"
              defaultValue={props.grade.value}
              disabled={!checked}
            />
            &nbsp;
          </div>
        </div>
      </div>
      <hr className={classes.hr} />
    </Fragment>
  );
};

export default GradeSettingInputComponent;
