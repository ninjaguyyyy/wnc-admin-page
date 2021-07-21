import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";
import { MdBuild, MdDelete } from "react-icons/md";
import { TYPE_ALERT, TYPE_DIALOG } from "../../../../common/constants";

function CategoriesList(props) {
  const { openDialogWith, openAlertWithType, categories } = props;

  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Categories List</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Id</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Parent</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-right">Actions</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100">
              {categories.map((category) => {
                return (
                  <tr key={category._id}>
                    <td
                      className="p-2 whitespace-nowrap"
                      style={{ width: "320px" }}
                    >
                      <div className="items-center">
                        <div className="">{category._id}</div>
                      </div>
                    </td>
                    <td
                      className="p-2 whitespace-nowrap"
                      style={{ width: "280px" }}
                    >
                      <div className="text-left font-medium text-gray-800">
                        {category.name}
                      </div>
                    </td>

                    <td className="p-2 whitespace-nowrap">
                      <div className="font-medium text-left">
                        {category.parent?.name || "null"}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-right">
                        <Tooltip title="Edit" className="">
                          <Button
                            style={{ minWidth: 0 }}
                            onClick={() =>
                              openDialogWith(TYPE_DIALOG.EDIT, category._id)
                            }
                          >
                            <MdBuild
                              color="#d4c72b"
                              className="inline icon-size-small action-icon"
                            />
                          </Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <Button style={{ minWidth: 0 }}>
                            <MdDelete
                              onClick={() =>
                                openAlertWithType(
                                  TYPE_ALERT.ERROR,
                                  "This category already has courses!"
                                )
                              }
                              color="#d23030"
                              className="inline icon-size-small action-icon"
                            />
                          </Button>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CategoriesList;
