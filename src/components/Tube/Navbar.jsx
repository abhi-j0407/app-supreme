import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from './../../constants/tubeConsts';
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "transparent",
      top: 0,
      justifyContent: "space-between",
      borderRadius: '50px'
    }}
  >
    <Link to="/tube" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
  </Stack>
);
export default Navbar;
