import {
  Alert,
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { DeleteContext } from "./context/ContextProvider";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [dlttask, setDlettask] = useContext(DeleteContext);
  console.log("dlttask====>", dlttask);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#232f3e" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="14"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ textAlign: "center" }}
            >
              Redux Todo Application
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      {dlttask ? (
        <Alert variant="danger">
          <Alert.Heading>Your Task remove Successfully</Alert.Heading>
        </Alert>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
