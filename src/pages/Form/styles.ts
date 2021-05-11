import styled from "styled-components";

export const StyledFormPage = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  .title {
    width: 360px;
    flex: 1;
    text-align: right;
    margin-right: 5rem;

    h1 {
      font-weight: normal;
      font-size: 5rem;

      span {
        font-size: 6rem;
      }
    }
  }

  .form {
    width: 360px;
    flex: 1;
  }
`;
