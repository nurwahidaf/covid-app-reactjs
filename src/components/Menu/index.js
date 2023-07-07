import StyledMenu from "./Menu.styled";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
      <StyledMenu>
        <ul>
          <li>
            <Link to="/">Global</Link>
          </li>
          <li>
            <Link to="/covid/indonesia">Indonesia</Link>
          </li>
          <li>
            <Link to="/covid/province">Province</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </StyledMenu>
  )
}

export default Menu;