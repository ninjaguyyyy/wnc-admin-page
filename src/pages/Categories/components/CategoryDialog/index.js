import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TYPE_DIALOG } from "../../../../common/constants";

export default function CategoryDialog(props) {
  const { open, close, type, category } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(category);
    console.log(data);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={close}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {type === TYPE_DIALOG.NEW && "New Category"}
          {type === TYPE_DIALOG.EDIT && "Edit Category"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "500px" }}>
            <Grid container>
              <Controller
                name="title"
                control={control}
                defaultValue={category?.name}
                render={({ field }) => (
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: "10px" }}
                    {...field}
                  />
                )}
              />
              <Controller
                name="parent"
                control={control}
                defaultValue={category?.parent}
                render={({ field }) => (
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    variant="outlined"
                    fullWidth
                    label="Parent"
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
