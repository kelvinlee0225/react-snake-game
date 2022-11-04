import styled from "styled-components";
import { FoodProps, SnakeDtoProps } from "../types";

export const SnakeDots = styled.div<SnakeDtoProps>`
  position: absolute;
  width: 2%;
  height: 2%;
  background-color: #000;
  border: 1px solid #fff;
  top: ${({ dot }) => {
    return `${dot[0]}`;
  }}%;
  left: ${({ dot }) => {
    return `${dot[1]}`;
  }}%;
`;

export const SnakeFood = styled.div<FoodProps>`
  position: absolute;
  width: 2%;
  height: 2%;
  background-color: #ff0000;
  border: 1px solid #fff;
  top: ${({ foodPosition }) => {
    return `${foodPosition[0]}`;
  }}%;
  left: ${({ foodPosition }) => {
    return `${foodPosition[1]}`;
  }}%;
`;
