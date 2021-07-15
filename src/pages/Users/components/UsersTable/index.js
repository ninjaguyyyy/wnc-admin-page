import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import {
  MdBuild,
  MdDelete,
  MdRemoveRedEye,
  MdRemoveCircle,
} from "react-icons/md";

import Image01 from "../../../../images/user-36-05.jpg";
import Image02 from "../../../../images/user-36-06.jpg";
import Image03 from "../../../../images/user-36-07.jpg";
import Image04 from "../../../../images/user-36-08.jpg";
import Image05 from "../../../../images/user-36-09.jpg";
import { TYPE_USER_DIALOG } from "../..";

function UsersTable(props) {
  const { openUserDialogWithType } = props;
  const customers = [
    {
      id: "0",
      image: Image01,
      name: "Alex Shatov",
      email: "alexshatov@gmail.com",
      location: "🇺🇸",
      spent: "$2,890.66",
    },
    {
      id: "1",
      image: Image02,
      name: "Philip Harbach",
      email: "philip.h@gmail.com",
      location: "🇩🇪",
      spent: "$2,767.04",
    },
    {
      id: "2",
      image: Image03,
      name: "Mirko Fisuk",
      email: "mirkofisuk@gmail.com",
      location: "🇫🇷",
      spent: "$2,996.00",
    },
    {
      id: "3",
      image: Image04,
      name: "Olga Semklo",
      email: "olga.s@cool.design",
      location: "🇮🇹",
      spent: "$1,220.66",
    },
    {
      id: "4",
      image: Image05,
      name: "Burak Long",
      email: "longburak@gmail.com",
      location: "🇬🇧",
      spent: "$1,890.66",
    },
  ];

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
                  <div className="font-semibold text-left">Spent</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Country</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-right">Actions</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100">
              {customers.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={customer.image}
                            width="40"
                            height="40"
                            alt={customer.name}
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          {customer.name}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{customer.email}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        {customer.spent}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">
                        {customer.location}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-right">
                        <Tooltip title="View" className="">
                          <Button
                            onClick={() =>
                              openUserDialogWithType(TYPE_USER_DIALOG.VIEW)
                            }
                            style={{ minWidth: 0 }}
                          >
                            <MdRemoveRedEye
                              color="#2da040"
                              className="inline icon-size-small action-icon"
                            />
                          </Button>
                        </Tooltip>
                        <Tooltip title="Edit" className="">
                          <Button
                            style={{ minWidth: 0 }}
                            onClick={() =>
                              openUserDialogWithType(TYPE_USER_DIALOG.EDIT)
                            }
                          >
                            <MdBuild
                              color="#d4c72b"
                              className="inline icon-size-small action-icon"
                            />
                          </Button>
                        </Tooltip>
                        <Tooltip title="Disable" className="">
                          <Button style={{ minWidth: 0 }}>
                            <MdRemoveCircle
                              color="#292294"
                              className="inline icon-size-small action-icon"
                            />
                          </Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <Button style={{ minWidth: 0 }}>
                            <MdDelete
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

export default UsersTable;