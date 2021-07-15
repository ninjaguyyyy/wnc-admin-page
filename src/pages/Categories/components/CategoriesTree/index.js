import React from "react";
import TreeItem from "./components/TreeItem";
import TreeView from "@material-ui/lab/TreeView";

import {
  MdExpandMore,
  MdChevronRight,
  MdLabel,
  MdLocalLibrary,
} from "react-icons/md";

function CategoriesTree() {
  return (
    <div className="col-span-full xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Categories Tree</h2>
      </header>
      <div className="px-5 py-3">
        <TreeView
          defaultExpanded={["3"]}
          defaultCollapseIcon={<MdExpandMore />}
          defaultExpandIcon={<MdChevronRight />}
          defaultEndIcon={<div style={{ width: 30 }} />}
        >
          <TreeItem nodeId="3" labelText="Categories" labelIcon={MdLabel}>
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
            {/* <TreeItem
              nodeId="6"
              labelText="Updates"
              labelInfo="2,294"
              color="#e3742f"
              bgColor="#fcefe3"
            />
            <TreeItem
              nodeId="7"
              labelText="Forums"
              labelInfo="3,566"
              color="#a250f5"
              bgColor="#f3e8fd"
            />
            <TreeItem
              nodeId="8"
              labelText="Promotions"
              labelInfo="733"
              color="#3c8039"
              bgColor="#e6f4ea"
            /> */}
          </TreeItem>
          <TreeItem nodeId="4" labelText="History" labelIcon={MdLabel} />
        </TreeView>
      </div>
    </div>
  );
}

export default CategoriesTree;
