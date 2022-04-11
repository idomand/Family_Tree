import React, { useState } from "react";
import styled from "styled-components";
import TreeButtons from "./TreeButtons";
import TreeForm from "./TreeForm";

const TreeItemWrapper = styled.li`
  border-radius: 5px;
  margin: 5px;
  padding: 5px 10px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: fit-content;
  background-color: #e3f7ff;
  @media (max-width: 500px) {
    width: 50%;
  }
`;

const TreeChildrenWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  left: 25px;
  border-left: 1px solid;
  padding-left: 15px;
  @media (max-width: 500px) {
    padding-left: 7.5px;
  }
`;

const ElementHeader = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
    text-align: left;
  }
`;

const ElementName = styled.h3`
  margin: 5px;
  @media (max-width: 500px) {
    margin: 0;
  }
`;

export default function TreeElement({
  isRoot,
  fullName,
  treeId,
  treeChildren,
  parentId,
}) {
  const [showChildren, setShowChildren] = useState(true);

  function handleClick() {
    setShowChildren((prv) => !prv);
  }

  return (
    <>
      <TreeItemWrapper>
        <ElementHeader>
          <ElementName>{fullName}</ElementName>
        </ElementHeader>
        <TreeForm
          setShowChildren={setShowChildren}
          isRoot={isRoot}
          treeId={treeId}
          parentId={parentId}
        />
        <TreeButtons
          isShowChildren={showChildren}
          shouldShow={handleClick}
          treeId={treeId}
          parentId={parentId}
        />
      </TreeItemWrapper>
      <TreeChildrenWrapper>
        {showChildren &&
          treeChildren.length > 0 &&
          treeChildren.map(
            ({ fullName, treeId, treeChildren, isRoot, parentId }) => (
              <TreeElement
                key={treeId}
                treeId={treeId}
                treeChildren={treeChildren}
                fullName={fullName}
                isRoot={isRoot}
                parentId={parentId}
              />
            )
          )}
      </TreeChildrenWrapper>
    </>
  );
}
