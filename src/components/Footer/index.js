import StyledFooter from "./Footer.styled";
import Menu from "../Menu";

const Footer = () => {
  return (
    <StyledFooter>
      <footer>
        <div>
          <h1>Covid ID</h1>
          <p>Developed by nurwahidaf</p>
        </div>  
        <Menu />
      </footer>
    </StyledFooter>
  );
}

export default Footer;