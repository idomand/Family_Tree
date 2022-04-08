import React, { useContext, useState } from "react";

const TreeContextProvider = React.createContext();

export function useTree() {
  return useContext(TreeContextProvider);
}

export default function TreeContext({ children }) {
  const rootTree = {
    isRoot: true,
    treeId: Math.floor(Math.random() * 1000),
    fullName: "Alice",
    treeChildren: [
      {
        treeId: Math.floor(Math.random() * 1000),
        fullName: "Bob",
        isRoot: false,
        treeChildren: [
          {
            treeId: Math.floor(Math.random() * 1000),
            isRoot: false,
            fullName: "Charley",
            treeChildren: [],
          },
        ],
      },
      {
        treeId: Math.floor(Math.random() * 1000),
        isRoot: false,
        fullName: "Bill",
        treeChildren: [],
      },
    ],
  };
  const [bigTree, setBigTree] = useState(rootTree);
  const [test, setTest] = useState(false);

  function addParent(treeObject, newParentName) {
    let oldTreeObject = { ...treeObject };
    oldTreeObject.isRoot = false;
    let newParent = {
      isRoot: true,
      treeId: Math.floor(Math.random() * 1000),
      fullName: newParentName,
      treeChildren: [oldTreeObject],
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

  const value = { bigTree, setBigTree, addParent, addChild };

  return (
    <TreeContextProvider.Provider value={value}>
      {children}
    </TreeContextProvider.Provider>
  );
}
