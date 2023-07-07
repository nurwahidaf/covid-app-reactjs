import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #6C63FF;
  padding: 1rem;
  color: #fff;
  margin-bottom: 0;

  footer {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  h1 {
    font-size: 2.4rem;
  }

  p {
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      margin: 0 2rem;
    }

    p {
      margin: 0 2rem;
    }
  }
`;

export default StyledFooter;