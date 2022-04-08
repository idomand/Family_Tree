import React, { useState } from "react";
import styled from "styled-components";
import TreeButtons from "./TreeButtons";
import TreeForm from "./TreeForm";

const TreeItemWrapper = styled.li`
  border: solid red;
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
  border: solid red 1px;
`;

export default function TreeElement({
  isRoot,
  fullName,
  treeId,
  treeChildren,
}) {
  const [showChildren, setShowChildren] = useState(true);

  function handleClick() {
    setShowChildren((prv) => !prv);
  }

  return (
    <>
      <TreeItemWrapper>
        {fullName} ; id: {treeId}
        <TreeForm
          setShowChildren={setShowChildren}
          isRoot={isRoot}
          treeId={treeId}
        />
        <TreeButtons isShowChildren={showChildren} shouldShow={handleClick} />
      </TreeItemWrapper>
      <TreeChildrenWrapper>
        {showChildren &&
          treeChildren.length > 0 &&
          treeChildren.map(({ fullName, treeId, treeChildren, isRoot }) => (
            <TreeElement
              key={treeId}
              treeId={treeId}
              treeChildren={treeChildren}
              fullName={fullName}
              isRoot={isRoot}
            />
          ))}
      </TreeChildrenWrapper>
    </>
  );
}
