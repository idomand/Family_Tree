import React from "react";
import styled from "styled-components";
import { useTree } from "../Util/TreeContext";
import TreeElement from "./TreeElement";

const Wrapper = styled.main`
  padding: 30px;
`;

export default function TreeWrapper() {
  const { bigTree } = useTree();
  console.log("bigTree :>> ", bigTree);
  return (
    <Wrapper>
      <TreeElement
        treeId={bigTree.treeId}
        treeChildren={bigTree.treeChildren}
        fullName={bigTree.fullName}
      />
    </Wrapper>
  );
}
