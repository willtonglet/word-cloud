import React, { useState } from "react";
import { useHistory } from "react-router";
import api from "../../services/api";
import { StyledTextEditor } from "./styles";

const TextEditor = () => {
  const [text, setText] = useState("");
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textToArr = text
      ?.match(/\S+/g)
      ?.sort(() => 0.5 - Math.random())
      .map((word) =>
        word
          .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, "")
          .toLowerCase()
      );

    const unique = [...new Set(textToArr)];
    const arrWithCount = unique.map((word) => ({
      word,
      count: Number(textToArr?.filter((str) => str === word).length),
    }));
    const generateRamdomId = "_" + Math.random().toString(36).substr(2, 14);

    api.postWords({
      arrWithCount,
      all: Number(textToArr?.length),
      id: generateRamdomId,
    });

    history.push(`/${generateRamdomId}`);
  };

  return (
    <StyledTextEditor>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={10}
          required
        />
        <button type="submit">Generate</button>
      </form>
    </StyledTextEditor>
  );
};

export default TextEditor;
