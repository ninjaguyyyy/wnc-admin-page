import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { MdQueue } from "react-icons/md";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import CategoriesList from "./components/CategoriesList";
import CategoriesTree from "./components/CategoriesTree";
import CategoryDialog from "./components/CategoryDialog";
import { TYPE_DIALOG } from "../../common/constants";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

function Categories() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openCategoryDialog, setOpenCategoryDialog] = useState(false);
  const [typeDialog, setTypeDialog] = useState(TYPE_DIALOG.VIEW);
  const [openAlert, setOpenAlert] = useState({
    open: false,
    type: null,
    message: "",
  });

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
            <h1 className="heading mb-8">Categories Management</h1>
            <div className="sm:flex sm:justify-end sm:items-center mb-3">
              <Button
                variant="contained"
                color="primary"
                endIcon={<MdQueue />}
                onClick={() => {
                  setOpenCategoryDialog(true);
                  setTypeDialog(TYPE_DIALOG.NEW);
                }}
              >
                Add Category
              </Button>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <CategoriesTree />
              <CategoriesList
                openUserDialogWithType={(type) => {
                  setOpenCategoryDialog(true);
                  setTypeDialog(type);
                }}
                openAlertWithType={(type, message) => {
                  setOpenAlert({ open: true, type, message });
                }}
              />
            </div>
          </div>
        </main>
      </div>

      <CategoryDialog
        open={openCategoryDialog}
        close={() => setOpenCategoryDialog(false)}
        type={typeDialog}
      />

      <Snackbar
        open={openAlert.open}
        autoHideDuration={6000}
        onClose={() => setOpenAlert({ ...openAlert, open: false })}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
          variant="filled"
          onClose={() => setOpenAlert({ ...openAlert, open: false })}
          severity={openAlert.type}
        >
          {openAlert.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Categories;
