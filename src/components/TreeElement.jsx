import React, { useState } from "react";
import styled from "styled-components";
import TreeButtons from "./TreeButtons";
import TreeForm from "./TreeForm";

const TreeItemWrapper = styled.li`
  border: solid red;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

export default function TreeElement({ fullName, treeId, treeChildren }) {
  const [showChildren, setShowChildren] = useState(false);

  function handleClick() {
    setShowChildren((prv) => !prv);
  }

  return (
    <>
      <TreeItemWrapper>
        name:{fullName} ; id: {treeId}
        <TreeForm />
        <TreeButtons shouldShow={handleClick} />
      </TreeItemWrapper>
      <TreeChildrenWrapper>
        {showChildren &&
          treeChildren.length > 0 &&
          treeChildren.map(({ treeId, treeChildren }) => (
            <TreeElement
              key={treeId}
              treeId={treeId}
              treeChildren={treeChildren}
            />
          ))}
      </TreeChildrenWrapper>
    </>
  );
}
