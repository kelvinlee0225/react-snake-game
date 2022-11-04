import { SnakeDots } from "./style";
import { SnakeBodyProps } from "../types";

export const SnakeBody = ({ dots }: SnakeBodyProps) => {
  return (
    <>
      {dots.map((dot) => (
        <SnakeDots dot={dot} />
      ))}
    </>
  );
};
