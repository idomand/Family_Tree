import React from "react";
import { useTree } from "../Util/TreeContext";
import { addChild } from "../Util/TreeFuncs";
import TreeItem from "./TreeItem";

export default function TreeList() {
  const { treeArray, setTreeArray } = useTree();

  addChild(treeArray);

  return (
    <ul>
      {treeArray.map((item) => {
        return <TreeItem key={item.fullName} fullName={item.fullName} />;
      })}
    </ul>
  );
}
