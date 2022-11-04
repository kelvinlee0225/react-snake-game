import { SnakeDots } from "./style";
import { FoodProps } from "../types";

export const Food = ({ foodPosition }: FoodProps) => {
  return (
    <SnakeDots
      style={{ top: `${foodPosition[0]}%`, left: `${foodPosition[1]}%` }}
    />
  );
};
