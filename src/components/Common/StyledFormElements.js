import styled from "styled-components";

export const BasicForm = styled.form`
  padding: 5px 10px;
  background-color: white;
  border-radius: 10px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-areas: "Label Button";
  @media (max-width: 500px) {
    padding: 2.5px 5px;
    grid-template-areas:
      "Label"
      "Button";
  } ;
`;

export const BasicLabel = styled.label`
  grid-area: Label;
  margin: 5px;
  justify-content: space-between;
  width: auto;
  @media (max-width: 500px) {
  }
`;

export const BasicInput = styled.input`
  cursor: pointer;
  background-color: Lightgrey;
  font-size: 16px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid transparent;
  width: 120px;
  padding: 2px;
  &:focus-visible {
    border: 2px solid blueviolet;
    outline: none;
  }
`;
export const InputSubmit = styled.input`
  grid-area: Button;
  cursor: pointer;
  transition: all 0.5s;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  border: 1.3px white solid;
  text-align: center;
  background-color: blueviolet;
  height: 32px;
  @media (max-width: 500px) {
    width: 122px;
  }
  &:disabled {
    cursor: not-allowed;
    background: grey;
    :hover,
    :focus {
      cursor: not-allowed;
      background: grey;
      color: white;
      border: 1.3px solid white;
    }
  }
`;
