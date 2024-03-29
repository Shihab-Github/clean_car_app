import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import observableUserStore from "../../../store/ObservableUserStore";

interface AppbarProps {
  toggleDrawer: () => void;
}

export default function ButtonAppBar({ toggleDrawer }: AppbarProps) {
  const navigate = useNavigate();

  const logOut = () => {
    observableUserStore.setLoggedInUser(null);
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hello{" "}
            {`${observableUserStore.loggedInUser?.firstName} ${observableUserStore.loggedInUser?.lastName}`}
          </Typography>
          <Button color="inherit" onClick={logOut}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
