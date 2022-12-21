import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Menu } from "../../../interfaces";

interface AppbarProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  menus: Menu[];
}

export default function LeftMenu({ isOpen, toggleDrawer, menus }: AppbarProps) {
  const navigate = useNavigate();
  const navigateTo = (path:string) => {
    navigate(path)
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {menus.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton onClick={() => navigateTo(item.path)}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer}>
      {list()}
    </Drawer>
  );
}
