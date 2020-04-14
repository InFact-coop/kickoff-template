import React, { useState } from "react";
import theme from "../styles/theme";
import styled from "styled-components";

import { Container } from "../styles/components";

const Card = styled.div`
  width: 30vw;
  height: 30vh;
  text-align: center;
  padding-top: 12.5vh;
  border: 2px solid black;
  background-color: ${({ scope }) => {
    if (scope === "can't") {
      return theme.colors.red;
    } else if (scope === "must") {
      return theme.colors.green;
    } else if (scope === "could") {
      return theme.colors.silver;
    } else if (scope === "default") {
      return theme.colors.white;
    }
  }};
`;

export default ({ scopeCards }) => {
  const [cards, setCards] = useState(scopeCards);

  const getScope = (scope) => {
    console.log("scope", scope);
    let newScope;

    if (scope === "default") {
      newScope = "must";
    } else if (scope === "must") {
      newScope = "could";
    } else if (scope === "could") {
      newScope = "can't";
    } else if (scope === "can't") {
      newScope = "default";
    }
    console.log("newScope", newScope);

    return newScope;
  };

  return (
    <Container
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "space-around",
      }}
    >
      {scopeCards.map((card, index) => (
        <Card
          key={index}
          scope={cards[index].scope}
          onClick={() =>
            setCards((prevCards) => {
              const removedCardElement = prevCards.splice(index, 1);
              prevCards.splice(index, 0, {
                statement: card.statement,
                scope: getScope(removedCardElement[0].scope),
              });
              return [...prevCards];
            })
          }
        >
          {card.statement}
        </Card>
      ))}
    </Container>
  );
};
