import React, { useContext, useState } from "react";

const TreeContextProvider = React.createContext();

export function useTree() {
  return useContext(TreeContextProvider);
}

export default function TreeContext({ children }) {
  function addChild(bigObject, treeId) {}

  const rootTree = {
    treeId: 1,
    fullName: "bob",
    treeChildren: [],
    // parent: null,
  };
  const [treeArray, setTreeArray] = useState([rootTree]);

  function addParent(treeArray, newParentName) {
    let newParent = {
      treeId: 1,
      fullName: newParentName,
      treeChildren: treeArray,
      // parent: null,
    };
    setTreeArray([newParent]);
  }

  const value = { treeArray, setTreeArray, addParent, addChild, rootTree };

  return (
    <TreeContextProvider.Provider value={value}>
      {children}
    </TreeContextProvider.Provider>
  );
}
