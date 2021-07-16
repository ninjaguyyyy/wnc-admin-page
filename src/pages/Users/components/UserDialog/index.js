import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useTheme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TYPE_DIALOG } from "../../../../common/constants";

export default function UserDialog(props) {
  const { open, close, type } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: "10px" }}
                    {...field}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
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
                        label="Outlined"
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
                        label="Outlined"
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
                    name="iceCreamType"
                    control={control}
                    render={({ field }) => (
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={10}
                        variant="outlined"
                        label="Age"
                        {...field}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    )}
                  />
                </div>
                <div className="flex-1 ml-2 mt-2">
                  <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Switch
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                            color="secondary"
                          />
                        }
                        label="isConfirmed"
                      />
                    )}
                  />
                </div>
                <div className="flex-1 ml-2 mt-2">
                  <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Switch
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label="isActive"
                      />
                    )}
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
                close();
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
