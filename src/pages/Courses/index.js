import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { MdDirectionsBike, MdLocalHotel } from "react-icons/md";
import DashboardAvatars from "../../partials/dashboard/DashboardAvatars";
import DashboardCard06 from "../../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../../partials/dashboard/DashboardCard07";
import DashboardCard10 from "../../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../../partials/dashboard/DashboardCard11";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

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
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="mb-5">
                <div className="mr-3 inline">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<MdDirectionsBike />}
                  >
                    Students
                  </Button>
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<MdLocalHotel />}
                >
                  Teachers
                </Button>
              </div>

              <DashboardAvatars />
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* Doughnut chart (Top Countries) */}
              <DashboardCard06 />
              {/* Table (Top Channels) */}
              <DashboardCard07 />

              {/* Card (Customers) */}
              <DashboardCard10 />
              {/* Card (Reasons for Refunds) */}
              <DashboardCard11 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Courses;
