import { useState } from "react";
import { GameArena, Container } from "./app-style";
import { SnakeBody, Food } from "./components";

function App() {
  const [food, setFood] = useState([5, 7]);

  const [dots, setDots] = useState([
    [0, 0],
    [0, 2],
  ]);

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
