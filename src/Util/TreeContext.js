import React, { useContext, useState } from "react";

const TreeContextProvider = React.createContext();

export function useTree() {
  return useContext(TreeContextProvider);
}

export default function TreeContext({ children }) {
  function addChild(bigObject, treeId) {}

  const rootTree = {
    treeId: 1,
    fullName: "alice",
    treeChildren: [
      {
        treeId: 2,
        fullName: "bob",
        treeChildren: [
          {
            treeId: 4,
            fullName: "charley",
            treeChildren: [],
          },
        ],
      },
      {
        treeId: 3,
        fullName: "bill",
        treeChildren: [],
      },
    ],
  };
  const [bigTree, setBigTree] = useState(rootTree);

  function addParent(treeObject, newParentName) {
    let newParent = {
      treeId: 0,
      fullName: newParentName,
      treeChildren: [treeObject],
    };
    setBigTree([newParent]);
  }

  const value = { bigTree, setBigTree, addParent, addChild, rootTree };

  return (
    <TreeContextProvider.Provider value={value}>
      {children}
    </TreeContextProvider.Provider>
  );
}
