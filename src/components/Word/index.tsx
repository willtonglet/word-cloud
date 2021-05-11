import React, { useEffect, useRef, useState } from "react";
import { StyledWord, StyledWordHover } from "./styles";

export interface WordInterface {
  word: string;
  count: number;
  all: number;
}

const Word = (props: WordInterface) => {
  const { count, word, all } = props;
  const [isHover, setIsHover] = useState(false);
  const hoverRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (hoverRef.current && !hoverRef.current.contains(event.target)) {
      setIsHover(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      {isHover && (
        <StyledWordHover ref={hoverRef} count={count}>
          <h2>{word}</h2>
          <span>{count === 1 ? `${count} time` : `${count} times`}</span>
        </StyledWordHover>
      )}
      <StyledWord
        role="button"
        onClick={() => setIsHover(!isHover)}
        count={count}
        all={all}
      >
        <span>{word}</span>
      </StyledWord>
    </>
  );
};

export default Word;
