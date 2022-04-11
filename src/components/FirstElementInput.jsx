import React, { useState } from "react";
import styled from "styled-components";
import { useTree } from "../Util/TreeContext";
import {
  BasicForm,
  BasicInput,
  BasicLabel,
  InputSubmit,
} from "./Common/StyledFormElements";

const FirstElementWrapper = styled.div`
  border: solid lightblue;
  width: fit-content;
  padding: 15px;
  background-color: #caedfc;
  border-radius: 15px;
`;

export default function FirstElementInput() {
  const [firstName, setFirstName] = useState("");

  const { addFirstElement, showFirstElementInput, setShowFirstElementInput } =
    useTree();

  function handelFirstSubmit(e) {
    e.preventDefault();
    addFirstElement(firstName);
    setShowFirstElementInput(false);
    setFirstName("");
  }

  return (
    <>
      {showFirstElementInput && (
        <FirstElementWrapper>
          <BasicForm onSubmit={handelFirstSubmit}>
            <BasicLabel htmlFor="firstName">
              <BasicInput
                type="text"
                id="firstName"
                placeholder="Enter Full Name"
                name="name"
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </BasicLabel>
            <InputSubmit
              disabled={firstName === ""}
              type="submit"
              value="Add Name"
            />
          </BasicForm>
        </FirstElementWrapper>
      )}
    </>
  );
}
