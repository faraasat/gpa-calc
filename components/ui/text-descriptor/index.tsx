import { FC } from "react";

import classes from "@/styles/index.module.css";

const TextDescriptor: FC<{
  data: Array<{
    min: number;
    max: number | string;
    gerText: string;
    text: string;
    description: string;
  }>;
  heading: string;
}> = ({ data, heading }) => {
  return (
    <div className={classes.td}>
      <h4>{heading}</h4>
      <ul className={classes.td_ul}>
        {data.map((item, index) => {
          const { min, max, gerText, text, description } = item;
          return (
            <li key={index}>
              <span className={classes.td_span_1}>
                {min} - {max}
              </span>{" "}
              <span className={classes.td_span_2}>
                ({gerText}) {text}
              </span>{" "}
              <span className={classes.td_span_3}>{description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TextDescriptor;
