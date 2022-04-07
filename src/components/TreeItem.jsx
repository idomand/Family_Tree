import React from "react";
import { useTree } from "../Util/TreeContext";
import { addChild } from "../Util/TreeFuncs";

export default function TreeItem({ fullName }) {
  const { treeArray, setTreeArray } = useTree();

  addChild(treeArray);

  return <div key={fullName}>{fullName}</div>;
}
