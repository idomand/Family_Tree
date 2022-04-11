import React, { useState } from "react";
import styled from "styled-components";
import TreeButtons from "./TreeButtons";
import TreeForm from "./TreeForm";

const TreeItemWrapper = styled.li`
  border: solid blueviolet 1.5px;
  border-radius: 5px;
  padding: 10px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const TreeChildrenWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  left: 25px;
  border-left: 1px solid;
  padding-left: 15px;
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
        <div>Full Name: {fullName}</div>
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
