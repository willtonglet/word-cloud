import React, { useState } from "react";
import { useHistory } from "react-router";
import api from "../../services/api";
import { StyledTextEditor } from "./styles";

const TextEditor = () => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

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
    const generateRamdomId = "_" + Math.random().toString(36).substr(2, 9);

    api
      .postWords({
        arrWithCount,
        all: Number(textToArr?.length),
        id: generateRamdomId,
      })
      .then(() => {
        setIsLoading(false);
        history.push(`/${generateRamdomId}`);
      })
      .catch(() => {
        setIsLoading(false);
        setError("There was a problem. Try again later.");
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
          disabled={isLoading}
          required
        />
        <button type="submit" disabled={isLoading}>
          Generate
        </button>
        {isLoading && <span className="loading">Loading Word Cloud...</span>}
        {error && <span className="error">{error}</span>}
      </form>
    </StyledTextEditor>
  );
};

export default TextEditor;
