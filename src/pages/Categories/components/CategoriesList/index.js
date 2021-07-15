import React from "react";
import { MdBuild, MdDelete } from "react-icons/md";

import Image01 from "../../../../images/user-36-05.jpg";
import Image02 from "../../../../images/user-36-06.jpg";
import Image03 from "../../../../images/user-36-07.jpg";
import Image04 from "../../../../images/user-36-08.jpg";
import Image05 from "../../../../images/user-36-09.jpg";

function CategoriesList() {
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
              {customers.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="">{customer.name}</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-gray-800">
                        {customer.email}
                      </div>
                    </td>

                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-left">
                        {customer.location}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-right">
                        <MdBuild
                          color="#d4c72b"
                          className="inline mr-4 icon-size-small action-icon"
                        />
                        <MdDelete
                          color="#d23030"
                          className="inline icon-size-small action-icon"
                        />
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
