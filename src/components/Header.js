import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";

// import link
import { Link } from "react-router-dom";
// import logo
import Logo from "../assets/MtLogo.jpg";

const logoStyles = {
  maxHeight: "60px", // Adjust the maxHeight as needed
  mr: 2,
  display: { xs: "none", md: "flex" },

};
const logoStyles1 = {
  maxHeight: "60px", // Adjust the maxHeight as needed
  mr: 2,
  display: { xs: "flex", md: "none" },

};

const Header = () => {
  // const [showMenu, setShowMenu] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    // <header className="py-4 border-b">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <Link to="/">
    //       {/* <img src={Logo} alt="" style={logoStyles}/> */}
    //         <h1 className="text-3xl font-bold text-violet-900">Logo</h1>
    //     </Link>
    //     <div className="hidden sm:flex items-center gap-6">
    //       <Link className="hover:text-violet-900 transition text-lg" to="/">
    //         Home
    //       </Link>
    //       <Link className="hover:text-violet-900 transition text-lg" to="/appartments">
    //         Apartments
    //       </Link>
    //     </div>
    //     <div
    //       className="flex flex-col sm:hidden bg-violet-400 hover:bg-violet-500 text-white px-4 py-3 rounded-lg transition cursor-pointer"
    //       onClick={() => setShowMenu((prev) => !prev)}
    //     >
    //       {showMenu ? (
    //         <div className="flex justify-end">
    //           <ImCancelCircle size={18} />
    //         </div>
    //       ) : (
    //         "Menu"
    //       )}
    //       {showMenu && (
    //         <ul className="">
    //           <Link to="/">
    //             <li className="hover:text-violet-900 transition">
    //               Home
    //             </li>
    //           </Link>
    //           <Link to="/appartments">
    //             <li className="hover:text-violet-900 transition">Appartments</li>
    //           </Link>
    //         </ul>
    //       )}
    //     </div>
    //   </div>
    // </header>
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{display: { xs: "none", md: "flex" }}}>
          <img src={Logo} alt="" style={logoStyles}/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="info"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
            <MenuItem sx={{display: 'grid'}}>
              <Link textAlign="center" className="text-black hover:text-violet-900 transition text-lg" to="/" onClick={handleCloseNavMenu}>
                Home
              </Link>
              <Link textAlign="center" to="/appartments" className="text-black hover:text-violet-900 transition" onClick={handleCloseNavMenu}>
                  Appartments
              </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{display: { xs: "flex", md: "none" }}}>
          <img src={Logo} alt="" style={logoStyles1}/>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, marginLeft: "auto",}}>
            <Link sx={{display: 'block'}} className="text-black hover:text-violet-900 transition text-lg" to="/">
              Home
            </Link>
            <Link sx={{display: 'block'}} to="/appartments" className="text-black hover:text-violet-900 text-lg transition ml-3">
              Appartments
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
