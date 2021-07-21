import React from "react";
import TreeItem from "./components/TreeItem";
import TreeView from "@material-ui/lab/TreeView";

import {
  MdExpandMore,
  MdChevronRight,
  MdLabel,
  MdLocalLibrary,
} from "react-icons/md";

function CategoriesTree({ categories }) {
  const renderTree = (nodes) =>
    nodes.map(
      (node) =>
        !node.parent && (
          <TreeItem
            key={node._id}
            nodeId={node._id}
            labelText={node.name}
            labelIcon={MdLabel}
          >
            {node.child.length !== 0
              ? node.child.map((node) => (
                  <TreeItem
                    key={node._id}
                    nodeId={node._id}
                    labelText={node.name}
                    labelIcon={MdLocalLibrary}
                    labelInfo="90"
                    color="#1a73e8"
                    bgColor="#e8f0fe"
                  ></TreeItem>
                ))
              : null}
          </TreeItem>
        )
    );

  return (
    <div className="col-span-full xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Categories Tree</h2>
      </header>
      <div className="px-5 py-3">
        <TreeView
          defaultCollapseIcon={<MdExpandMore />}
          defaultExpandIcon={<MdChevronRight />}
          defaultEndIcon={<div style={{ width: 30 }} />}
        >
          {categories && renderTree(categories)}
          {/* <TreeItem nodeId="3" labelText="Categories" labelIcon={MdLabel}>
            <TreeItem
              nodeId="5"
              labelIcon={MdLocalLibrary}
              labelText="Social"
              labelInfo="90"
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
            <TreeItem
              nodeId="5"
              labelIcon={MdLocalLibrary}
              labelText="Social"
              labelInfo="90"
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
          </TreeItem>
          <TreeItem nodeId="4" labelText="History" labelIcon={MdLabel} /> */}
        </TreeView>
      </div>
    </div>
  );
}

export default CategoriesTree;
