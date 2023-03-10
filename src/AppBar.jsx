import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigationClick = (containerId) => {
    const containerElement = document.getElementById(containerId);
    containerElement.scrollIntoView({ behavior: "smooth" });
  };

  const handleMenuNavigationClick = (containerId) => {
    const containerElement = document.getElementById(containerId);
    console.log(containerElement);
    containerElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar position="relative" id="AppBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Title Typography for normal size */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => handleNavigationClick("home-container")}
            style={{ cursor: "pointer" }}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ANEESH SHARMA
          </Typography>

          {/* pages box for normal size   */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            &nbsp;
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleNavigationClick("skills-container")}
            >
              SKILLS
            </div>{" "}
            &nbsp; &nbsp;
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleNavigationClick("projects-container")}
            >
              PROJECTS
            </div>{" "}
            &nbsp; &nbsp;
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleNavigationClick("contact-container")}
            >
              CONNECT
            </div>{" "}
            &nbsp; &nbsp;
          </Box>

          {/*pages box for mobile size */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            id="hamburger"
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              <MenuItem>
                <Typography textAlign="center">
                  <div
                    onClick={() =>
                      handleMenuNavigationClick("skills-container")
                    }
                  >
                    SKILLS
                  </div>{" "}
                  &nbsp;
                  <div
                    onClick={() =>
                      handleMenuNavigationClick("projects-container")
                    }
                  >
                    PROJECTS
                  </div>{" "}
                  &nbsp;
                  <div
                    onClick={() =>
                      handleMenuNavigationClick("contact-container")
                    }
                  >
                    CONNECT
                  </div>{" "}
                  &nbsp;
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Title Typography for mobile size*/}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ANEESH SHARMA
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
