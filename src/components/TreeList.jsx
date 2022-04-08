import React, { useState } from "react";

export default function TreeList({ bigTree }) {
  const [showChildren, setShowChildren] = useState(false);

  function handleClick() {
    setShowChildren((prv) => !prv);
  }

  return (
    <div>
      <span onClick={handleClick}>
        <h4 style={{ fontWeight: showChildren ? "bold" : "normal" }}>
          id:{bigTree.treeId}; name: {bigTree.fullName}
        </h4>
      </span>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          left: 25,
          borderLeft: "1px solid",
          paddingLeft: 15,
        }}
      >
        {showChildren &&
          bigTree.treeChildren.length > 0 &&
          bigTree.treeChildren.map((element) => (
            <TreeList key={element.treeId} bigTree={element} />
          ))}
      </div>
    </div>
  );
}
