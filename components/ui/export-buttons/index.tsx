import { FC } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { LuFileJson2 } from "react-icons/lu";

import CustomButton from "../link-button/button";

import classes from "./style.module.css";

const ExportButtons: FC<{ data: Array<any> }> = ({ data }) => {
  const convertToCSV = (data: Array<any>) => {
    const array = [Object.keys(data[0])].concat(data);

    return array
      .map((row) => {
        return Object.values(row)
          .map((item) => `"${item}"`)
          .join(",");
      })
      .join("\n");
  };

  const convertToJSON = (data: Array<any>) => {
    const array = [Object.keys(data[0])].concat(data);

    return array
      .map((row) => {
        return Object.values(row)
          .map((item) => `"${item}"`)
          .join(",");
      })
      .join("\n");
  };

  const downloadCSV = (type: string = "csv") => {
    const csvData = type === "csv" ? convertToCSV(data) : convertToJSON(data);
    const blob = new Blob([csvData], {
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
        onClick={() => downloadCSV("csv")}
      >
        <RiFileExcel2Fill /> Export to CSV
      </CustomButton>
      <CustomButton
        btnStyle="rounded"
        className={classes.btns}
        onClick={() => downloadCSV("json")}
      >
        <LuFileJson2 /> Export to JSON
      </CustomButton>
    </div>
  );
};

export default ExportButtons;
