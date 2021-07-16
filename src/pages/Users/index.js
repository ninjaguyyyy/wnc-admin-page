import Button from "@material-ui/core/Button";
import React, { useState, useEffect } from "react";
import { MdDirectionsBike, MdLocalHotel } from "react-icons/md";
import DashboardAvatars from "../../partials/dashboard/DashboardAvatars";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import UsersChart from "./components/UsersChart";
import UsersTable from "./components/UsersTable";
import UserDialog from "./components/UserDialog";
import { TYPE_DIALOG } from "../../common/constants";
import { userService } from "../../services";

function Users() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openUserDialog, setOpenUserDialog] = useState(false);
  const [typeUserDialog, setTypeUserDialog] = useState(TYPE_DIALOG.VIEW);

  useEffect(() => {
    (async () => {
      const users = await userService.getAll();
      console.log(users);
    })();

    return () => {
      // cleanup
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />

            <h1 className="heading mb-8">Users Management</h1>

            <div className="sm:flex sm:justify-between sm:items-center mb-5">
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

              <DashboardAvatars
                openUserDialogWithType={(type) => {
                  setOpenUserDialog(true);
                  setTypeUserDialog(type);
                }}
              />
            </div>

            <div className="grid grid-cols-12 gap-6">
              <UsersChart />
              <UsersTable
                openUserDialogWithType={(type) => {
                  setOpenUserDialog(true);
                  setTypeUserDialog(type);
                }}
              />
            </div>
          </div>
        </main>
      </div>

      <UserDialog
        open={openUserDialog}
        close={() => setOpenUserDialog(false)}
        type={typeUserDialog}
      ></UserDialog>
    </div>
  );
}

export default Users;
