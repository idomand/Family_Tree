import React from "react";
import { useTree } from "../Util/TreeContext";
import TreeItem from "./TreeItem";

export default function TreeList() {
  const { treeArray, setTreeArray } = useTree();

  return (
    <ul>
      {treeArray.map((item) => {
        return (
          <TreeItem key={item.fullName} data={item} fullName={item.fullName} />
        );
      })}
    </ul>
  );
}
