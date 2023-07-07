import styled from "styled-components";

const StyledMenu = styled.div`
  margin-top: 1rem;

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    margin-top: 0;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    
    li {
      margin: 0 2rem;
    }
  }
`;

export default StyledMenu;