import styled from "styled-components";

export const BasicButton = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  margin: 3px;
  border-radius: 5px;
  background-color: lightgreen;

  transition: 0.3s;

  &:hover {
    background-color: blueviolet;
    color: white;
  }
`;
