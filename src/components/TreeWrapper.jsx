import React from "react";
import styled from "styled-components";
import { useTree } from "../Util/TreeContext";
import TreeElement from "./TreeElement";

const Wrapper = styled.main`
  padding: 10px;
`;

export default function TreeWrapper() {
  const { bigTree } = useTree();
  return (
    <Wrapper>
      <TreeElement
        treeId={bigTree.treeId}
        treeChildren={bigTree.treeChildren}
        fullName={bigTree.fullName}
        isRoot={bigTree.isRoot}
      />
    </Wrapper>
  );
}
