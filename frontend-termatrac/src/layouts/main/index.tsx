import { Link as ScrollLink } from "react-scroll";
import { useLocation, Outlet } from "react-router-dom";
// material
import { Box, Link, Container, Typography } from "@mui/material";
// components
import Logo from "../../components/Logo";
//
import MainFooter from "./MainFooter";
import MainNavbar from "./MainNavbar";

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/termatrac";

  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>

      {/* {!isHome ? (
        <MainFooter />
      ) : ( */}
      <Box
        sx={{
          py: 5,
          textAlign: "center",
          position: "relative",
          bgcolor: "background.default"
        }}
      >
        <Container maxWidth="lg">
          <ScrollLink to="move_top" spy smooth>
            <Logo sx={{ mb: 1, mx: "auto", cursor: "pointer" }} />
          </ScrollLink>

          <Typography variant="caption" component="p">
            © All rights reserved
            <br /> Developed By &nbsp;
            <Link href="http://smiletechinc.com">Smile Tech</Link>
          </Typography>
        </Container>
      </Box>
      {/* )} */}
    </>
  );
}
