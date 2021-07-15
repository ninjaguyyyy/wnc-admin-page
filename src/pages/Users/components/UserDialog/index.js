import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { TYPE_USER_DIALOG } from "../../index";

export default function UserDialog(props) {
  const { open, close, type } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={close}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {type !== TYPE_USER_DIALOG.VIEW && (
            <Button onClick={close} color="primary">
              Cancel
            </Button>
          )}
          <Button onClick={close} color="primary">
            {type === TYPE_USER_DIALOG.VIEW ? "Close" : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
