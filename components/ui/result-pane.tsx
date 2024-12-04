import { FC } from "react";

const ResultPane: FC<{
  title: string;
  details: {
    obtained: number;
    total: number;
  };
  gradeThreshold: number;
}> = ({ title, details, gradeThreshold }) => {
  return (
    <div className={"result_pane"}>
      <div className={"result_pane_calc_details"}>
        <h4>Your GPA</h4>
      </div>
      <div className={"result_pane_details"}>
        <p className={"result_pane_detail_1"}>
          {`${details.obtained.toFixed(2)}`} / {details.total.toFixed(2)}{" "}
          =&nbsp;
          {details.obtained !== 0
            ? parseFloat(`${details.obtained / details.total}`).toFixed(2)
            : 0}
        </p>
        <p className={"result_pane_detail_2"}>
          {details.obtained !== 0
            ? parseFloat(`${details.obtained / details.total}`).toFixed(2)
            : 0}{" "}
          * {gradeThreshold} ={" "}
          {details.obtained !== 0
            ? parseFloat(
                `${(details.obtained / details.total) * gradeThreshold}`
              ).toFixed(2)
            : 0}
        </p>
        <p className={"result_pane_detail_3"}>
          <span>{title}</span>
          <span>
            {details.obtained !== 0
              ? parseFloat(
                  `${(details.obtained / details.total) * gradeThreshold}`
                ).toFixed(2)
              : 0}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResultPane;
