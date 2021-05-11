import styled from "styled-components";

export const StyledTextEditor = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    textarea {
      font-size: 1rem;
      resize: none;
      width: 360px;
      padding: 1rem;
    }

    button {
      background-color: #000;
      color: #fff;
      padding: 1rem;
      border: none;
      margin-top: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
    }
  }
`;
