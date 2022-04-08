import React, { useContext, useState } from "react";

const TreeContextProvider = React.createContext();

export function useTree() {
  return useContext(TreeContextProvider);
}

export default function TreeContext({ children }) {
  const rootTree = {};

  const [bigTree, setBigTree] = useState(rootTree);
  const [showFirstElementInput, setShowFirstElementInput] = useState(true);

  function addParent(treeObject, newParentName) {
    let newId = Math.floor(Math.random() * 1000);

    let oldTreeObject = { ...treeObject };
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

  function addChild(bigObject, treeId, childName) {
    const BranchToAddTo = getBranch(treeId, bigObject);
    let newTreeChild = {
      treeId: Math.floor(Math.random() * 1000),
      isRoot: false,
      fullName: childName,
      treeChildren: [],
      parentId: BranchToAddTo.treeId,
    };
    BranchToAddTo.treeChildren.push(newTreeChild);
    //!=================================================================================================
    //todo=======> this is bad practice I need to change this ==> START
    let newObject = { ...bigObject };
    setBigTree(newObject);
    //todo=======> this is bad practice I need to change this ==> END
    //!=================================================================================================
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

  function deleteElement(parentId, treeId) {
    if (parentId === null) {
      setBigTree({});
      setShowFirstElementInput(true);
    } else {
      const BranchToRemoveFrom = getBranch(parentId, bigTree);

      let newBranch = BranchToRemoveFrom.treeChildren.filter(
        (element) => element.treeId !== treeId
      );

      console.log("newBranch", newBranch);
      console.log("BranchToRemoveFrom", BranchToRemoveFrom.treeChildren);
    }
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
