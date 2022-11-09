import { useState, useEffect } from "react";
import { GameArena, Container } from "./app-style";
import { SnakeBody, Food } from "./components";
import { DIRECTIONS } from "./enums";
import { getRandomCoordinates } from "./utils";

const defaultState = {
  food: getRandomCoordinates(),
  dots: [
    [0, 0],
    [0, 2],
  ],
  direction: DIRECTIONS.RIGHT,
  speed: 200,
};

function App() {
  const [food, setFood] = useState(defaultState.food);
  const [dots, setDots] = useState(defaultState.dots);
  const [direction, setDirection] = useState(defaultState.direction);
  const [speed, setSpeed] = useState(defaultState.speed);

  const onKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowUp":
        setDirection(DIRECTIONS.UP);
        break;
      case "ArrowDown":
        setDirection(DIRECTIONS.DOWN);
        break;
      case "ArrowRight":
        setDirection(DIRECTIONS.RIGHT);
        break;
      case "ArrowLeft":
        setDirection(DIRECTIONS.LEFT);
        break;
    }
  };

  const moveSnake = () => {
    let snakeDots = [...dots];
    let head = dots[dots.length - 1];

    switch (direction) {
      case DIRECTIONS.UP:
        head = [head[0] - 2, head[1]];
        break;
      case DIRECTIONS.DOWN:
        head = [head[0] + 2, head[1]];
        break;
      case DIRECTIONS.RIGHT:
        head = [head[0], head[1] + 2];
        break;
      case DIRECTIONS.LEFT:
        head = [head[0], head[1] - 2];
        break;
    }
    snakeDots.push(head);
    snakeDots.shift();
    setDots(snakeDots);
  };

  const gameOver = () => {
    window.alert("GAME OVER!");
    resetToDefaultState();
  };

  const increaseSpeed = () => {
    if (speed > 10) setSpeed((previousSpeed) => previousSpeed - 10);
  };

  const checkIfTouchBorder = () => {
    const head = dots[dots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0)
      gameOver();
  };

  const checkIfCollapse = () => {
    const head = dots[dots.length - 1];
    const snake = [...dots];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) gameOver();
    });
  };

  const checkIfEatFood = () => {
    const head = dots[dots.length - 1];
    const snakeFood = food;
    if (head[0] === snakeFood[0] && head[1] === snakeFood[1]) {
      const newSnake = [...dots];
      newSnake.unshift([dots[0][0], dots[0][1]]);
      setDots(newSnake);
      setFood(getRandomCoordinates());
      increaseSpeed();
    }
  };

  const resetToDefaultState = () => {
    setFood(defaultState.food);
    setDots(defaultState.dots);
    setDirection(defaultState.direction);
    setSpeed(defaultState.speed);
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const interval = setInterval(moveSnake, speed);
    checkIfEatFood();
    checkIfTouchBorder();
    checkIfCollapse();
    return () => clearInterval(interval);
  });

  return (
    <Container>
      <GameArena>
        <SnakeBody dots={dots} />
        <Food foodPosition={food} />
      </GameArena>
    </Container>
  );
}

export default App;
