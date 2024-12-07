import { FC } from "react";

const DetailedInput: FC<{
  title: string;
  desc: string;
  value: number;
  setValue: (type: string, val: number) => void;
  valueType: string;
}> = ({ title, desc, value, setValue, valueType }) => {
  return (
    <div className="detailed-input">
      <h4>{title}</h4>
      <p>{desc}</p>
      <input
        type="number"
        min={0}
        step={0.01}
        value={value}
        onChange={(e) => setValue(valueType, +e.target.value)}
      />
    </div>
  );
};

export default DetailedInput;
