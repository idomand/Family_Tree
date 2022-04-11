import React, { useContext, useState } from "react";

const TreeContextProvider = React.createContext();

export function useTree() {
  return useContext(TreeContextProvider);
}

export default function TreeContext({ children }) {
  const rootTree = {};

  const [bigTree, setBigTree] = useState(rootTree);
  const [showFirstElementInput, setShowFirstElementInput] = useState(true);

  function addFirstElement(elementName) {
    let firstObject = {
      parentId: null,
      isRoot: true,
      treeId: Math.floor(Math.random() * 1000),
      fullName: elementName,
      treeChildren: [],
    };
    setBigTree(firstObject);
  }
  function getBranch(treeId, treeObject) {
    let result;
    if (treeObject.treeId === treeId) {
      return treeObject;
    } else {
      for (let i = 0; i < treeObject.treeChildren.length; i++) {
        let currentChild = treeObject.treeChildren[i];
        result = getBranch(treeId, currentChild);
        if (result !== false) {
          return result;
        }
      }
      return false;
    }
  }

  function addChild(treeId, childName) {
    let newTreeObject = { ...bigTree };
    const BranchToAddTo = getBranch(treeId, newTreeObject);
    console.log("BranchToAddTo", BranchToAddTo);
    let newTreeChild = {
      treeId: Math.floor(Math.random() * 1000),
      isRoot: false,
      fullName: childName,
      treeChildren: [],
      parentId: BranchToAddTo.treeId,
    };
    BranchToAddTo.treeChildren.push(newTreeChild);
    setBigTree(newTreeObject);
  }

  function deleteElement(parentId, treeId) {
    if (parentId === null) {
      setBigTree({});
      setShowFirstElementInput(true);
    } else {
      let newTreeObject = { ...bigTree };
      const BranchToRemoveFrom = getBranch(parentId, newTreeObject);
      let newChildrenArray = BranchToRemoveFrom.treeChildren.filter(
        (element) => element.treeId !== treeId
      );
      BranchToRemoveFrom.treeChildren = newChildrenArray;
      setBigTree(newTreeObject);
    }
  }

  function addParent(newParentName) {
    let newId = Math.floor(Math.random() * 1000);
    let oldTreeObject = { ...bigTree };
    oldTreeObject.isRoot = false;
    oldTreeObject.parentId = newId;
    let newParent = {
      isRoot: true,
      treeId: newId,
      fullName: newParentName,
      treeChildren: [oldTreeObject],
      parentId: null,
    };
    setBigTree(newParent);
  }

  const value = {
    bigTree,
    addParent,
    addChild,
    addFirstElement,
    showFirstElementInput,
    setShowFirstElementInput,
    deleteElement,
  };

  return (
    <TreeContextProvider.Provider value={value}>
      {children}
    </TreeContextProvider.Provider>
  );
}
