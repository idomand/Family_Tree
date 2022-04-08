import React, { useState } from "react";
import styled from "styled-components";
import { useTree } from "../Util/TreeContext";
import {
  BasicForm,
  BasicInput,
  BasicLabel,
  InputSubmit,
} from "./Common/StyledFormElements";

const BasicDiv = styled.div`
  display: flex;
  border: solid green;
`;

const AddChildDiv = styled(BasicDiv)``;

const AddParentDiv = styled(BasicDiv)``;

export default function TreeForm({
  isRoot,
  treeId,
  setShowChildren,
  parentId,
}) {
  const { addChild, addParent, bigTree } = useTree();
  const [childName, setChildName] = useState("");
  const [parentName, setParentName] = useState("");

  function handleAddChildSubmit(e) {
    e.preventDefault();
    addChild(bigTree, treeId, childName);
    setChildName("");
    setShowChildren(true);
  }

  function handleAddParentSubmit(e) {
    e.preventDefault();

    addParent(bigTree, parentName);
    setParentName("");
  }

  return (
    <>
      {isRoot && (
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
      )}
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
    </>
  );
}
