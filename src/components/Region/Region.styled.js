import styled from "styled-components";

const StyledRegion = styled.div`
  width: 250px;
  height: auto;
  margin: 2rem;
  box-shadow: #DFE0E2 0px 0px 15px;
  padding: 2rem;
  border-radius: 15px;
  align-items: center;

  .region__name {
    color: #6C63FF;
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .region__container {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  }

  p {
    color: #073B4C;
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  .data__confirmed {
    color: #FFD166;
  }

  .region__container {
    color: #118AB2;
    text-align: left;
  }

  .data__death {
    color: #EF476F;
  }

  .data__icon {
    align-self: center;
  }

  @media (min-width: 768px) {
    min-width: 275px;
    height: 325px;
  }

  @media (min-width: 992px) {
  }
`;

export default StyledRegion;