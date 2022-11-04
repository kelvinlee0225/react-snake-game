import { SnakeDots } from "./style";
import { SnakeBodyProps } from "../types";

export const SnakeBody = ({ dots }: SnakeBodyProps) => {
  return (
    <>
      {dots.map((dot) => (
        <SnakeDots style={{ top: `${dot[0]}%`, left: `${dot[1]}%` }} />
      ))}
    </>
  );
};
