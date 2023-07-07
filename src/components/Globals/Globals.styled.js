import styled from "styled-components";

const StyledGlobals = styled.div`
  margin: 1rem;

  .globals {
    margin: 5rem 0;
    text-align: center;
  }

  .header {
    margin: 2rem 0;
  }

  h2 {
    font-size: 2.44rem;
    color: #6C63FF;
  }

  h3 {
    font-size: 1.4rem;
    color: #FFD166;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 0 auto;

    .globals__container {
      display: flex;
      justify-content: center;
    }
  }
`;

export default StyledGlobals;