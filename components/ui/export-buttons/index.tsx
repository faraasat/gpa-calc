import { FC } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { LuFileJson2 } from "react-icons/lu";

import CustomButton from "../link-button/button";

import classes from "./style.module.css";

interface IExportData {
  marks: Array<{
    credits: string;
    grade: string;
    gradeAlpha?: string;
  }>;
  marksObtained: number;
  totalMarks: number;
  gradeThreshold: number;
  gpa: number;
  isGpa: boolean;
}

const ExportButtons: FC<{
  exportData: IExportData;
  disabled: boolean;
}> = ({ exportData, disabled }) => {
  const convertToCSV = (data: IExportData) => {
    let csvStr = data.isGpa
      ? "S No.,Credits,Marks,Grade,Total\n"
      : "S No.,Credits,Marks,Total\n";
    data.marks.forEach((x, i) => {
      csvStr += data.isGpa
        ? `${i + 1},${x.credits},${x.grade},${x.gradeAlpha},${
            Number(x.grade) * Number(x.credits)
          }\n`
        : `${i + 1},${x.credits},${x.grade},${
            Number(x.grade) * Number(x.credits)
          }\n`;
    });
    csvStr += "\n";
    csvStr += data.isGpa
      ? `Marks Total,,${data.marksObtained},Out Of,${data.totalMarks}\n`
      : `Marks Total,${data.marksObtained},Out Of,${data.totalMarks}\n`;
    csvStr += data.isGpa
      ? `GPA,,${data.gpa},Out Of,${data.gradeThreshold}\n`
      : `GPA,${data.gpa},Out Of,${data.gradeThreshold}\n`;
    return csvStr;
  };

  const downloadFile = (type: string = "csv") => {
    const d =
      type === "csv"
        ? convertToCSV(exportData)
        : JSON.stringify(exportData, null, 4);
    const blob = new Blob([d], {
      type: type === "csv" ? "text/csv" : "application/json",
    });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", `report.${type}`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className={classes.export_btns}>
      <CustomButton
        btnStyle="rounded"
        btnType="orange"
        className={classes.btns}
        onClick={() => downloadFile("csv")}
        disabled={disabled}
      >
        <RiFileExcel2Fill /> Export to CSV
      </CustomButton>
      <CustomButton
        btnStyle="rounded"
        className={classes.btns}
        onClick={() => downloadFile("json")}
        disabled={disabled}
      >
        <LuFileJson2 /> Export to JSON
      </CustomButton>
    </div>
  );
};

export default ExportButtons;
