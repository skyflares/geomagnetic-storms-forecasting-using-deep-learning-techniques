import icons from "../../assets/icons";
import styles from "./styles.module.css";

export type TDataChip = {
  label: string;
  value: number | string;
  change: number;
  negative?: boolean;
  isHighlighted?: boolean;
};

export default function DataChip({
  label,
  value,
  change,
  negative = false,
  isHighlighted,
}: TDataChip) {
  return (
    <div
      className={`${styles.dataChip} ${
        isHighlighted ? styles.highlighted : ""
      }`}
    >
      <p className="font-bold">{label}</p>
      <div className="flex items-center">
        <p className="m-0 text-2xl font-bold mr-3">{value}</p>
        <div className="flex items-center gap-1">
          <p className="m-0">
            {" "}
            {negative ? "-" : "+"}{(change * 100).toFixed(2)} %
          </p>
          <img
            src={negative === true ? icons.decrease : icons.increase}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
