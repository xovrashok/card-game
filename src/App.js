import React, { useState, useEffect } from "react";

import "./App.css";
import cat from "./icons/cat.jpeg";
import elephant from "./icons/elephant.png";
import jerapah from "./icons/jerapah.png";
import lion from "./icons/lion.png";
import pig from "./icons/pig.jpeg";
import rabit from "./icons/rabit.png";
import questionMark from "./icons/question-mark.png";
import { Cards, Container, Button, NumberOfStrokes } from "./styles";

const initialArrayCards = [
  { id: 1, img: cat },
  { id: 2, img: elephant },
  { id: 3, img: jerapah },
  { id: 4, img: lion },
  { id: 5, img: pig },
  { id: 6, img: rabit },
];

const pairOfArrayCards = [...initialArrayCards, ...initialArrayCards];

const App = () => {
  const [arrayCards, setArrayCards] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  const shuffleArrayCards = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  useEffect(() => {
    setArrayCards(shuffleArrayCards(pairOfArrayCards));
  }, []);

  const flipCard = (index) => {
    setOpenCards((opened) => [...opened, index]);
    setMoves((prevMove) => prevMove + 1);
  };

  useEffect(() => {
    if (openCards < 2) return;
    const firstMatched = arrayCards[openCards[0]];
    const secondMatched = arrayCards[openCards[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatchedCards([...matchedCards, firstMatched.id]);
    }
    if (openCards.length === 2) {
      setTimeout(() => {
        setOpenCards([]);
      }, 1000);
    }
    if (openCards.length > 2) {
      setOpenCards([]);
    }
  }, [openCards]);

  const resetGame = () => {
    setMatchedCards([]);
    setOpenCards([]);
    setMoves(0);
    setArrayCards(shuffleArrayCards(pairOfArrayCards));
  };

  return (
    <Container>
      <NumberOfStrokes>Сделано ходов: {moves}</NumberOfStrokes>
      <Cards>
        {arrayCards.map((item, index) => {
          let isFlipped = false;
          if (openCards.includes(index)) {
            isFlipped = true;
          }
          if (matchedCards.includes(item.id)) {
            isFlipped = true;
          }
          return (
            <div
              key={index}
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={flipCard.bind(this, index)}
            >
              <div className="inner">
                <div className="front">
                  <img
                    src={item.img}
                    width="100"
                    height="100"
                    alt="front-card"
                  />
                </div>
                <div className="back">
                  <img
                    src={questionMark}
                    width="100"
                    height="100"
                    alt="question mark"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Cards>
      <Button onClick={resetGame}>Restart</Button>
    </Container>
  );
};

export default App;
