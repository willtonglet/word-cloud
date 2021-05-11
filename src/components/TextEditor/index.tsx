import React, { useState } from "react";
import { useHistory } from "react-router";
import { StyledTextEditor } from "./styles";

const TextEditor = () => {
  const [text, setText] = useState("");
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textToArr = text
      ?.match(/\S+/g)
      ?.map((word) => word.replace(/[^a-zA-Z ]/g, "").toLowerCase());

    const unique = [...new Set(textToArr)];
    const arrWithCount = unique.map((word) => ({
      word,
      count: Number(textToArr?.filter((str) => str === word).length),
    }));

    history.push({
      pathname: "/word-cloud",
      state: { arrWithCount, all: textToArr?.length },
    });
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
