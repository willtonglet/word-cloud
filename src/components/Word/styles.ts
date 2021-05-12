import styled from "styled-components";

export const StyledWord = styled.div<{ count: number; all: number }>`
  display: inline-flex;
  position: relative;
  align-items: center;
  margin: 0.25rem;
  cursor: pointer;

  ${({ count, all }) => ` 
    font-size: ${Math.round((count / all) * 100 * 3)}vw; 
    line-height: ${Math.round((count / all) * 100 * 2)}vw;`}

  span {
    transition: 0.25s ease-in-out;
  }

  &:hover {
    z-index: 2;

    span {
      transform: scale(1.2);
      color: red;
    }
  }
`;

export const StyledWordHover = styled.div<{ count: number }>`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 3rem;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 0.5rem;
  color: #fff;
  z-index: 10;
  animation: fadeIn 0.25s ease-in-out forwards;
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  font-weight: 200;

  h2 {
    font-weight: 500;
    line-height: 0;
    font-size: 8rem;
  }
`;
