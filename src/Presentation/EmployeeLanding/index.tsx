import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import Box from "@mui/material/Box";
import ButtonAppBar from "../Shared/Appbar";
import LeftMenu from "../Shared/LeftMenu";
import { employerMenu } from "../../shared/data";
import observableUserStore from "../../store/ObservableUserStore";

export default function EmployeeLanding() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  if(!observableUserStore.loggedInUser) {
    return  <Navigate to="/" replace={true} />
  }

  return (
    <>
      <ButtonAppBar toggleDrawer={toggleDrawer} />
      <LeftMenu
        menus={employerMenu}
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
      />
      <Box p={2}>
        <Outlet />
      </Box>
    </>
  );
}
