import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Menu,
  MenuItem,
  Drawer,
  Box,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import navlogo from "../../images/logo/navlogo.png";
import GenMenu from "./GenMenu";
import { Link } from "react-router-dom";

function Navbar() {
  // use state for Drawer opening & closing
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar className="text-dark font-bold  text-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
          {/* Adding Company name or logo here  */}
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <img src={navlogo} className="h-14 md:mx-5"></img>
          </Typography>

          {/* Navigation for laptop */}
          <Stack direction="row" spacing={0.5}>
            <Link to="/">
              <Button
                color="inherit"
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                Home{" "}
              </Button>
            </Link>
            <GenMenu
              title="About"
              list={[
                { option: "Our Advisors", href: "/advisor" },
                { option: "National Team", href: "/national" },
                { option: "State Team", href: "/state" },
                { option: "Our members", href: "/member" },
              ]}
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
            <GenMenu
              title="Events"
              list={[
                { option: "Awards", href: "/award" },
                { option: "Seminar", href: "/seminar" },
                { option: "Buisness Meet", href: "/meet" },
                { option: "Movies", href: "/movie" },
                { option: "Other Events", href: "/otherevent" },
              ]}
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
            <GenMenu
              title="Join"
              list={[
                { option: "Internship", href: "/internship" },
                { option: "Affiliation/Partners", href: "/affiliation" },
                { option: "Job Board", href: "/board" },
                { option: "Career With Us", href: "/career" },
              ]}
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
            <GenMenu
              title="Gallery"
              list={[
                { option: "Photo - MFI Awards", href: "/award-photo" },
                { option: "Video", href: "/video" },
                { option: "News Coverage", href: "/news" },
              ]}
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
            <GenMenu
              title="Forms"
              list={[
                { option: "Membership", href: "/membership" },
                { option: "Organization", href: "/organization" },
                { option: "Fees", href: "/fee" },
              ]}
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
            <GenMenu
              title="Academic"
              list={[
                { option: "Educators", href: "/acad-educator" },
                { option: "MoU", href: "/mou" },
                { option: "Publication", href: "/publication" },
              ]}
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
            <GenMenu
              title="International"
              list={[
                { option: "Journalists", href: "/journalist" },
                { option: "Educators", href: "/int-educator" },
                { option: "Associations", href: "/association" },
              ]}
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
            <GenMenu
              title="CSR/Projects"
              list={[{ option: "Projects", href: "/projects" }]}
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
            <Link to="/contact">
              <Button
                color="inherit"
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                Contact Us
              </Button>
            </Link>

            {/* Hamburger Icon  */}
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ display: { xs: "block", lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>

          {/* Drawer Navigations are here  */}
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              height: "100vh",
            }}
            className="border border-indigo-800 "
          >
            <Stack
              p={9}
              width="275px"
              role="presentation"
              textAlign="center"
              spacing={0}
            >
              <Link to="/">
                <Button color="inherit" onClick={closeDrawer}>
                  Home{" "}
                </Button>
              </Link>
              <GenMenu
                title="About"
                func={closeDrawer}
                list={[
                  { option: "Our Advisors", href: "/advisor" },
                  { option: "National Team", href: "/national" },
                  { option: "State Team", href: "/state" },
                  { option: "Our members", href: "/member" },
                ]}
              />
              <GenMenu
                title="Events"
                func={closeDrawer}
                list={[
                  { option: "Awards", href: "/award" },
                  { option: "Seminar", href: "/seminar" },
                  { option: "Buisness Meet", href: "/meet" },
                  { option: "Movies", href: "/movie" },
                  { option: "Other Events", href: "/otherevent" },
                ]}
              />
              <GenMenu
                title="Join"
                func={closeDrawer}
                list={[
                  { option: "Internship", href: "/internship" },
                  { option: "Affiliation/Partners", href: "/affiliation" },
                  { option: "Job Board", href: "/board" },
                  { option: "Career With Us", href: "/career" },
                ]}
              />
              <GenMenu
                title="Gallery"
                func={closeDrawer}
                list={[
                  { option: "Photo - MFI Awards", href: "/award-photo" },
                  { option: "Video", href: "/video" },
                  { option: "News Coverage", href: "/news" },
                ]}
              />
              <GenMenu
                title="Forms"
                func={closeDrawer}
                list={[
                  { option: "Membership", href: "/membership" },
                  { option: "Organization", href: "/organization" },
                  { option: "Fees", href: "/fee" },
                ]}
              />
              <GenMenu
                title="Academic"
                func={closeDrawer}
                list={[
                  { option: "Educators", href: "/acad-educator" },
                  { option: "MoU", href: "/mou" },
                  { option: "Publication", href: "/publication" },
                ]}
              />
              <GenMenu
                title="International"
                func={closeDrawer}
                list={[
                  { option: "Journalists", href: "/journalist" },
                  { option: "Educators", href: "/int-educator" },
                  { option: "Associations", href: "/association" },
                ]}
              />
              <GenMenu
                title="CSR/Projects"
                func={closeDrawer}
                list={[{ option: "Projects", href: "/projects" }]}
              />
              <Link to="/contact">
                <Button color="inherit" onClick={closeDrawer}>
                  Contact Us{" "}
                </Button>
              </Link>
            </Stack>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
