import { SnakeFood } from "./style";
import { FoodProps } from "../types";

export const Food = ({ foodPosition }: FoodProps) => {
  return <SnakeFood foodPosition={foodPosition} />;
};
