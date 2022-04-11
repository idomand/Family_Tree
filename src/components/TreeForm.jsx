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

const EditFullNameDiv = styled(BasicDiv)``;

export default function TreeForm({ isRoot, treeId, setShowChildren }) {
  const { addChild, addParent, editElementName } = useTree();
  const [childName, setChildName] = useState("");
  const [parentName, setParentName] = useState("");
  const [newFullName, setNewFullName] = useState("");

  function handelNewNameSubmit(e) {
    e.preventDefault();
    editElementName(treeId, newFullName);
    setNewFullName("");
  }

  function handleAddChildSubmit(e) {
    e.preventDefault();
    addChild(treeId, childName);
    setChildName("");
    setShowChildren(true);
  }

  function handleAddParentSubmit(e) {
    e.preventDefault();

    addParent(parentName);
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

      <EditFullNameDiv>
        <BasicForm onSubmit={handelNewNameSubmit}>
          <BasicLabel htmlFor="newFullName">
            <BasicInput
              type="text"
              id="newFullName"
              placeholder="Edit Name"
              name="new name"
              value={newFullName}
              required
              onChange={(e) => setNewFullName(e.target.value)}
            />
          </BasicLabel>
          <InputSubmit
            disabled={newFullName === ""}
            type="submit"
            value="Edit Name"
          />
        </BasicForm>
      </EditFullNameDiv>
    </>
  );
}
