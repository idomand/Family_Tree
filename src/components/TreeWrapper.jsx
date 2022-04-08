import React from "react";
import { useTree } from "../Util/TreeContext";
import TreeList from "./TreeList";

export default function TreeWrapper() {
  const { bigTree } = useTree();
  console.log("bigTree :>> ", bigTree);
  return (
    <div>
      <TreeList bigTree={bigTree} />
    </div>
  );
}
