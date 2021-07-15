import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { MdCreateNewFolder } from "react-icons/md";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import CoursesTable from "./components/CoursesTable";

function Courses() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
            <h1 className="heading mb-8">Courses Management</h1>
            <div className="sm:flex sm:justify-end sm:items-center mb-3">
              <Button
                variant="contained"
                color="primary"
                endIcon={<MdCreateNewFolder />}
              >
                Add Course
              </Button>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <CoursesTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Courses;
