import React from "react";
import styled from "styled-components";
import { useTree } from "../Util/TreeContext";
import { BasicButton } from "./Common/StyledButtons";
const ItemButtonWrapper = styled.div``;

export default function TreeButtons({
  shouldShow,
  isShowChildren,
  parentId,
  treeId,
}) {
  const { deleteElement } = useTree();

  function hideFunc() {
    shouldShow();
  }
  function deleteFunc() {
    deleteElement(parentId, treeId);
  }

  return (
    <ItemButtonWrapper>
      <BasicButton onClick={deleteFunc}>Delete</BasicButton>
      <BasicButton onClick={hideFunc}>
        {isShowChildren ? "Hide" : "Show"}
      </BasicButton>
    </ItemButtonWrapper>
  );
}
