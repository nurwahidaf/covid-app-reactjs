import styled from "styled-components";

const StyledNavbar = styled.nav`
  background-color: #6C63FF;
  color: #fff;
  padding: 1rem;

  h1 {
    font-size: 2.4rem;
    color: #fff;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin: 0 2rem;
    }
  }
`;

export default StyledNavbar;