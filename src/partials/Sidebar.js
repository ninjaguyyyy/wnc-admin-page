import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BsFillPeopleFill,
  BsFillInboxesFill,
  BsDisplayFill,
} from "react-icons/bs";
import AdminLogo from "../images/admin-settings-male.png";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split("/")[1];

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-center mb-4 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <div className="d-flex justify-content-center">
            <NavLink exact to="/" className="block">
              <img src={AdminLogo} alt="admin logo" width={100} />
            </NavLink>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
            Managements
          </h3>
          <ul className="mt-3">
            {/* Dashboard */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "courses" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <div
                    className="flex-shrink-0 h-6 w-6 mr-3 active-sidebar"
                    style={{ fontSize: "20px" }}
                  >
                    <BsDisplayFill />
                  </div>
                  <span className="text-sm font-medium">Courses</span>
                </div>
              </NavLink>
            </li>
            {/* Customers */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "users" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/users"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "customers" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <div
                    className="flex-shrink-0 h-6 w-6 mr-3 "
                    style={{ fontSize: "20px" }}
                  >
                    <BsFillPeopleFill />
                  </div>
                  <span className="text-sm font-medium">Users</span>
                </div>
              </NavLink>
            </li>
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                page === "categories" && "bg-gray-900"
              }`}
            >
              <NavLink
                exact
                to="/categories"
                className={`block text-gray-200 hover:text-white transition duration-150 ${
                  page === "categories" && "hover:text-gray-200"
                }`}
              >
                <div className="flex flex-grow">
                  <div
                    className="flex-shrink-0 h-6 w-6 mr-3"
                    style={{ fontSize: "20px" }}
                  >
                    <BsFillInboxesFill />
                  </div>
                  <span className="text-sm font-medium">Categories</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
