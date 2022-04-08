import React from "react";
import styled from "styled-components";
import { useTree } from "../Util/TreeContext";
import FirstElementInput from "./FirstElementInput";
import TreeElement from "./TreeElement";

const Wrapper = styled.main`
  padding: 10px;
`;

export default function TreeWrapper() {
  const { bigTree } = useTree();

  console.log("bigTree :>> ", bigTree);

  return (
    <Wrapper>
      <FirstElementInput />

      {Object.keys(bigTree).length !== 0 && (
        <TreeElement
          parentId={bigTree.parentId}
          treeId={bigTree.treeId}
          treeChildren={bigTree.treeChildren}
          fullName={bigTree.fullName}
          isRoot={bigTree.isRoot}
        />
      )}
    </Wrapper>
  );
}
