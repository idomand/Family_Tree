import React from "react";
import styled from "styled-components";
import { useTree } from "../Util/TreeContext";
import FirstElementInput from "./FirstElementInput";
import TreeElement from "./TreeElement";

const Wrapper = styled.main`
  padding: 10px;

  border: solid 1px purple;
  border-radius: 5px;
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HeaderText = styled.h1`
  margin: 5px;
`;

const SubHeaderText = styled.h4`
  margin: 5px;
`;

export default function TreeWrapper() {
  const { bigTree } = useTree();

  return (
    <Wrapper>
      <HeaderDiv>
        <HeaderText>Infinite Family Tree</HeaderText>
        <SubHeaderText>
          Source Code:{" "}
          <a
            rel="noreferrer"
            href="https://github.com/idomand/Family_Tree"
            target="_blank"
          >
            GitHub
          </a>
        </SubHeaderText>
      </HeaderDiv>
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
