import { SnakeDots } from "./style";
import { SnakeBodyProps } from "../types";

export const SnakeBody = ({ dots }: SnakeBodyProps) => {
  return (
    <>
      {dots.map((dot, index) => (
        <SnakeDots dot={dot} key={index} />
      ))}
    </>
  );
};
