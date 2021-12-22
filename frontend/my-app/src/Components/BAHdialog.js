import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeUserHost } from "../app/Actions/userActions";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BAHdialog(props) {
  const [open, setOpen] = React.useState(true);
  const userDetails = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const handleCloseAgree = async () => {
    const userId = await userDetails.userId;
    const userAccessToken = await userDetails.accessToken;
    const response = await dispatch(makeUserHost(userId, userAccessToken));
    if (response.success) {
      props.setUserRole("host");
      setOpen(false);
    } else {
      setOpen(false);
      navigate("/");
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Become a host"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to become a host? You could list your own
            rentals.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleCloseAgree}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
