import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import { useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { TYPE_DIALOG } from "../../../../common/constants";
import { categoriesService } from "../../../../services";

export default function CategoryDialog(props) {
  const { open, close, type, category, rootCategories } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { control, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    if (type === TYPE_DIALOG.NEW) {
      (async () => {
        const { success } = await categoriesService.create({
          name: data.name,
          parent: data.parent === 0 ? null : data.parent,
        });

        success && close(Math.random());
      })();
    } else {
      let { parent, ...dataToUpdate } = data;
      (async () => {
        const { success } = await categoriesService.update(
          category._id,
          dataToUpdate
        );

        success && close(Math.random());
      })();
    }
  };

  useEffect(() => {
    if (type === TYPE_DIALOG.EDIT) {
      setValue("name", category.name);
    } else {
      setValue("name", "");
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
        onClose={() => close(false)}
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
                name="name"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                }}
                render={({ field, fieldState }) => (
                  <>
                    <TextField
                      id="outlined-basic"
                      label="Name"
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
                  name="parent"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <Select
                      id="demo-simple-select-outlined"
                      variant="outlined"
                      fullWidth
                      label="Parent"
                      {...field}
                      native
                    >
                      <option value={0}>Root</option>
                      {rootCategories.map((rootCategory) => (
                        <option value={rootCategory._id}>
                          {rootCategory.name}
                        </option>
                      ))}
                    </Select>
                  )}
                />
              )}
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => close(false)} color="primary">
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
