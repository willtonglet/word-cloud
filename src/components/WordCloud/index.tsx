import React from "react";
import { useLocation } from "react-router";
import Word, { WordInterface } from "../Word";
import { StyledWordCloud } from "./styles";

const WordCloud = () => {
  const { state } =
    useLocation<{ arrWithCount: WordInterface[]; all: number }>();
  const { arrWithCount, all } = state;

  return (
    <StyledWordCloud>
      {arrWithCount
        ?.sort(() => 0.5 - Math.random())
        .map((word, index) => (
          <Word key={index} count={word.count} word={word.word} all={all} />
        ))}
    </StyledWordCloud>
  );
};

export default WordCloud;
