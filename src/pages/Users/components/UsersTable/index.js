import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {
  MdBuild,
  MdDelete,
  MdLock,
  MdRemoveCircle,
  MdRemoveRedEye,
  MdCheckCircle,
} from "react-icons/md";
import { ROLE_USER, TYPE_DIALOG } from "../../../../common/constants";
import { transformToRoleName } from "../../../../helpers/role-name";

function UsersTable(props) {
  const { users, openUserDialogWithType } = props;

  const isAdminOrRealTeacher = (user) =>
    user.role === ROLE_USER.ADMIN ||
    (user.role === ROLE_USER.TEACHER && user.createdByAdmin);

  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Customers</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Username</div>
                </th>

                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Active</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Role</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-right">Actions</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100">
              {users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td className="p-2 whitespace-nowrap w-100">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={`https://i.pravatar.cc/150?u=${user.email}`}
                            width="40"
                            height="40"
                            alt={user.userName}
                          />
                        </div>
                        <div className="font-sm text-gray-800">
                          {user.firstName} {user.lastName}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap ">
                      <div className="text-left">{user.email}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left ">{user.userName}</div>
                    </td>

                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">
                        {user.isActivated ? (
                          <Tooltip title="Active" className="">
                            <Typography className="inline">
                              <MdCheckCircle
                                color="#2da040"
                                className="inline icon-size-extra-small"
                              />
                            </Typography>
                          </Tooltip>
                        ) : (
                          <Tooltip title="Disabled" className="">
                            <Typography className="inline">
                              <MdLock
                                color="rgb(29 31 30)"
                                className="inline icon-size-extra-small"
                              />
                            </Typography>
                          </Tooltip>
                        )}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-xs text-center">
                        {transformToRoleName(user.role)}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-right">
                        <Tooltip title="View" className="">
                          <Button
                            onClick={() =>
                              openUserDialogWithType(TYPE_DIALOG.VIEW, user._id)
                            }
                            style={{ minWidth: 0 }}
                          >
                            <MdRemoveRedEye
                              color="rgb(86 196 208)"
                              className="inline icon-size-small action-icon"
                            />
                          </Button>
                        </Tooltip>
                        <Tooltip title="Edit" className="">
                          <Button
                            disabled={isAdminOrRealTeacher(user)}
                            style={{ minWidth: 0 }}
                            onClick={() =>
                              openUserDialogWithType(TYPE_DIALOG.EDIT, user._id)
                            }
                          >
                            <MdBuild
                              color={
                                isAdminOrRealTeacher(user) ? "#333" : "#d4c72b"
                              }
                              className="inline icon-size-small action-icon"
                            />
                          </Button>
                        </Tooltip>
                        <Tooltip title="Disable" className="">
                          <Button
                            disabled={isAdminOrRealTeacher(user)}
                            style={{ minWidth: 0 }}
                          >
                            <MdRemoveCircle
                              color={
                                isAdminOrRealTeacher(user) ? "#333" : "#292294"
                              }
                              className="inline icon-size-small action-icon"
                            />
                          </Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <Button
                            disabled={isAdminOrRealTeacher(user)}
                            style={{ minWidth: 0 }}
                          >
                            <MdDelete
                              color={
                                isAdminOrRealTeacher(user) ? "#333" : "#d23030"
                              }
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

export default UsersTable;
