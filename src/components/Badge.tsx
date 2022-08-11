import { BadgeLabel, Color } from "../types";

interface IProps {
  value: number;
  type: BadgeLabel;
  color: Color;
}

export const Badge = ({ type, value, color }: IProps) => {
  return (
    <span className={`badge bg-${color}`}>
      {type} : {value}
    </span>
  );
};
