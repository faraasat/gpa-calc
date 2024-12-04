import { Dispatch, FC, SetStateAction } from "react";

const Threshold: FC<{
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}> = ({ value, setValue }) => {
  return (
    <div className="threshold">
      <h4>GPA Threshold</h4>
      <input
        type="number"
        min={4}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        placeholder="Grade Threshold"
      />
    </div>
  );
};

export default Threshold;
