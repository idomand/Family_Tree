import React, { useState } from "react";
import { useTree } from "../Util/TreeContext";
import styled from "styled-components";
import { BasicButton } from "./Common/StyledButtons";
import {
  BasicForm,
  BasicInput,
  BasicLabel,
  InputSubmit,
} from "./Common/StyledFormElements";

const TreeItemWrapper = styled.li`
  border: solid red;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
`;

const ItemData = styled.div``;

const ItemButtonWrapper = styled.div``;

const BasicDiv = styled.div`
  display: flex;
  border: solid green;
`;

const AddChildDiv = styled(BasicDiv)``;

const AddParentDiv = styled(BasicDiv)``;

export default function TreeItem({ fullName, data }) {
  const { treeArray, addParent } = useTree();

  const [childName, setChildName] = useState("");
  const [parentName, setParentName] = useState("");

  function hideFunc() {}
  function deleteFunc() {}

  function handleAddChildSubmit(e) {
    e.preventDefault();
  }

  function handleAddParentSubmit(e) {
    e.preventDefault();
    addParent(treeArray, parentName);
  }

  return (
    <TreeItemWrapper key={fullName}>
      <ItemData>Full Name: {fullName}</ItemData>

      <AddParentDiv>
        <BasicForm onSubmit={handleAddParentSubmit}>
          <BasicLabel htmlFor="parent">
            <BasicInput
              type="text"
              id="parent"
              placeholder="Parent Name"
              name="name"
              value={parentName}
              required
              onChange={(e) => setParentName(e.target.value)}
            />
          </BasicLabel>
          <InputSubmit
            disabled={parentName === ""}
            type="submit"
            value="add parent"
          />
        </BasicForm>
      </AddParentDiv>

      <AddChildDiv>
        <BasicForm onSubmit={handleAddChildSubmit}>
          <BasicLabel htmlFor="child">
            <BasicInput
              type="text"
              id="child"
              placeholder="Child Name"
              name="name"
              value={childName}
              required
              onChange={(e) => setChildName(e.target.value)}
            />
          </BasicLabel>
          <InputSubmit
            disabled={childName === ""}
            type="submit"
            value="add child"
          />
        </BasicForm>
      </AddChildDiv>
      <ItemButtonWrapper>
        <BasicButton onClick={deleteFunc}>Delete</BasicButton>
        <BasicButton onClick={hideFunc}>Hide</BasicButton>
      </ItemButtonWrapper>
    </TreeItemWrapper>
  );
}
