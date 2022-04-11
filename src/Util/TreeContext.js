import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
      treeId: uuidv4(),
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
    let newTreeChild = {
      treeId: uuidv4(),
      isRoot: false,
      fullName: childName,
      treeChildren: [],
      parentId: BranchToAddTo.treeId,
    };
    BranchToAddTo.treeChildren.push(newTreeChild);
    setBigTree(newTreeObject);
  }

  function editElementName(treeId, newName) {
    let newTreeObject = { ...bigTree };
    const branchToEdit = getBranch(treeId, newTreeObject);
    branchToEdit.fullName = newName;
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
    let newId = uuidv4();
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
    editElementName,
  };

  return (
    <TreeContextProvider.Provider value={value}>
      {children}
    </TreeContextProvider.Provider>
  );
}
