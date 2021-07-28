import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import { useTheme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Controller, useForm } from "react-hook-form";
import { ROLE_USER, TYPE_DIALOG } from "../../../../common/constants";
import { adminService } from "../../../../services/admin.service";
const { uniqueNamesGenerator, names } = require("unique-names-generator");

export default function UserDialog({ open, close, type, user }) {
  const alert = useAlert();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { control, handleSubmit, setValue } = useForm();

  const [isConfirmed, setIsConfirmed] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const roles = [
    { name: "Student", value: ROLE_USER.STUDENT },
    { name: "Teacher", value: ROLE_USER.TEACHER },
  ];
  const randomNameConfig = {
    dictionaries: [names],
  };
  const isViewMode = type === TYPE_DIALOG.VIEW;
  const isEditMode = type === TYPE_DIALOG.EDIT;
  const isNewMode = type === TYPE_DIALOG.NEW;

  const randomEmail = () =>
    uniqueNamesGenerator(randomNameConfig) + "@gmail.com";

  const onSubmit = (data) => {
    if (isNewMode) {
      (async () => {
        const { success, msg } = await adminService.create(data);

        success && close(Math.random());
        !success && alert.show(msg);
      })();
    } else {
      data.isActivated = isConfirmed;
      (async () => {
        const { success } = await adminService.updateUser(user._id, data);

        success && close(Math.random());
      })();
    }
  };

  useEffect(() => {
    if (isEditMode || isViewMode) {
      setValue("userName", user?.userName);
      setValue("email", user?.email);
      setValue("firstName", user?.firstName);
      setValue("lastName", user?.lastName);
      setValue("role", user?.role);
    } else {
      setValue("userName", "");
      setValue("email", randomEmail());
      setValue("firstName", uniqueNamesGenerator(randomNameConfig));
      setValue("lastName", uniqueNamesGenerator(randomNameConfig));
      setValue("role", ROLE_USER.STUDENT);
    }
    return () => {
      // cleanup
    };
  }, [open]);

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={close}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {type === TYPE_DIALOG.NEW && "New User"}
          {type === TYPE_DIALOG.VIEW && "View User"}
          {type === TYPE_DIALOG.EDIT && "Edit User"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <Grid container>
              <Controller
                name="userName"
                control={control}
                defaultValue={user?.userName}
                rules={{
                  required: true,
                }}
                render={({ field, fieldState }) => (
                  <>
                    <TextField
                      id="outlined-basic"
                      label="Username"
                      disabled={isViewMode}
                      variant="outlined"
                      fullWidth
                      style={{ marginBottom: "10px" }}
                      {...field}
                    />
                    {fieldState.error && (
                      <span className="error-field">
                        This field is required!
                      </span>
                    )}
                  </>
                )}
              />
              {type === TYPE_DIALOG.NEW && (
                <Controller
                  name="passWord"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  defaultValue=""
                  render={({ field, fieldState }) => (
                    <>
                      <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        style={{ marginBottom: "10px" }}
                        fullWidth
                        {...field}
                      />
                      {fieldState.error && (
                        <span className="error-field">
                          This field is required!
                        </span>
                      )}
                    </>
                  )}
                />
              )}
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    id="outlined-basic"
                    disabled={isViewMode}
                    label="Email"
                    variant="outlined"
                    style={{ marginBottom: "10px" }}
                    fullWidth
                    {...field}
                  />
                )}
              />
              <Grid container className="d-flex justify-between mb-3">
                <div className="flex-1 mr-2">
                  <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        id="outlined-basic"
                        label="First Name"
                        disabled={isViewMode}
                        variant="outlined"
                        fullWidth
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="flex-1 ml-2">
                  <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        id="outlined-basic"
                        label="Last Name"
                        disabled={isViewMode}
                        variant="outlined"
                        fullWidth
                        {...field}
                      />
                    )}
                  />
                </div>
              </Grid>

              <Grid container className="d-flex justify-between">
                <div className="flex-1 mr-2">
                  <Controller
                    name="role"
                    control={control}
                    defaultValue={ROLE_USER.STUDENT}
                    render={({ field }) => (
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        variant="outlined"
                        disabled={isViewMode}
                        label="Role"
                        {...field}
                        native
                      >
                        {roles.map((rootCategory) => (
                          <option value={rootCategory.value}>
                            {rootCategory.name}
                          </option>
                        ))}
                      </Select>
                    )}
                  />
                </div>
                <div className="flex-1 ml-2 mt-2">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={isConfirmed}
                        onChange={() => setIsConfirmed(!isConfirmed)}
                        name="isConfirmed"
                        disabled={isViewMode}
                        color="secondary"
                      />
                    }
                    label="isConfirmed"
                  />
                </div>
                <div className="flex-1 ml-2 mt-2">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={isActive}
                        onChange={() => setIsActive(!isActive)}
                        name="checkedB"
                        color="primary"
                        disabled={isViewMode}
                      />
                    }
                    label="isActive"
                  />
                </div>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Close
          </Button>

          {type !== TYPE_DIALOG.VIEW && (
            <Button
              onClick={() => {
                handleSubmit(onSubmit)();
              }}
              color="primary"
            >
              Submit
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
