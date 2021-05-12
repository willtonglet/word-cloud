import React from "react";
import WordsParams from "../../services/interfaces";
import Word from "../Word";
import { StyledWordCloud } from "./styles";

interface WordCloudInterface extends WordsParams {}

const WordCloud = (props: WordCloudInterface) => {
  const { arrWithCount, all } = props;

  return (
    <StyledWordCloud>
      {arrWithCount.map((word, index) => (
        <Word key={index} count={word.count} word={word.word} all={all} />
      ))}
    </StyledWordCloud>
  );
};

export default WordCloud;
