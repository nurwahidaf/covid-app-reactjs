import styled from "styled-components";

const StyledRegions = styled.div`
  margin: 1rem;

  .regions {
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

  .regions__container {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    align-items: center;
  }

  @media (min-width: 768px) {
    .regions__container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
`;

export default StyledRegions;