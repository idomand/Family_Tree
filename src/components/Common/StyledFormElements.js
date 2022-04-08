import styled from "styled-components";

export const BasicForm = styled.form`
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const BasicLabel = styled.label`
  margin: 5px;
  justify-content: space-between;
  width: auto;
  @media (max-width: 500px) {
    margin: 10px;
  }
`;

export const BasicInput = styled.input`
  cursor: pointer;
  background-color: Lightgrey;
  font-size: 16px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid transparent;
  margin-left: 5px;
  width: 120px;
  &:focus-visible {
    border: 2px solid blueviolet;
    outline: none;
  }
`;
export const InputSubmit = styled.input`
  cursor: pointer;
  transition: all 0.5s;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  border: 1.3px white solid;
  text-align: center;
  background-color: blueviolet;
  height: 32px;

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
