import StyledNavbar from "./Navbar.styled";
import { Link } from "react-router-dom";
import Menu from "../Menu";

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>
        <Link to="/">Covid ID</Link>
      </h1>
      <Menu />
    </StyledNavbar>
  )
}

export default Navbar;