"use client"

import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material"
// import { Menu, MenuOpen } from "@mui/icons-material";
import { usePathname } from "next/navigation";

interface headerPropTypes {
  isSidebarCollapsed: boolean;
  onSidebarToggle: () => void;
}

// const Header = ({ isLoggedIn, isSidebarCollapsed, onSidebarToggle }: headerPropTypes) => {
const Header = () => {

  const pathname = usePathname();

  const isAuthRoute = pathname.startsWith('/login');

  return (
    <AppBar position="static">
      <Toolbar>
        {/* {
          !isAuthRoute ? (
            <IconButton onClick={onSidebarToggle}>
              {isSidebarCollapsed ? <Menu sx={{ color: '#fff' }} /> : <MenuOpen sx={{ color: '#fff' }} />}
            </IconButton>
          ) : null
        } */}
        <Typography variant="h6">
          Enterprise Analytics Dashboard
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {!isAuthRoute ? <Avatar>S</Avatar> : null}
      </Toolbar>
    </AppBar>
  )
}

export default Header