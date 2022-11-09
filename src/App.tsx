import { useState, useEffect } from "react";
import { GameArena, Container } from "./app-style";
import { SnakeBody, Food } from "./components";
import { SnakeDots } from "./components/style";
import { DIRECTIONS } from "./enums";

const getRandomCoordinates = () => {
  const min = 1;
  const max = 98;
  const x = Math.floor(Math.random() * (max - min + 1)) + min;
  const y = Math.floor(Math.random() * (max - min + 1)) + min;
  return [x, y];
};

function App() {
  const [food, setFood] = useState(getRandomCoordinates());
  const [dots, setDots] = useState([
    [0, 0],
    [0, 2],
  ]);
  const [direction, setDirection] = useState(DIRECTIONS.RIGHT);
  const [speed, setSpeed] = useState(200);

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

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const interval = setInterval(moveSnake, speed);
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
