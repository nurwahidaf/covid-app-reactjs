import styled from "styled-components";

const StyledHero = styled.div`
  margin: 2rem;

  section {
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .hero__left {
    margin-bottom: 2rem;
  }

  h2 {
    color: #6C63FF;
    font-size: 2.44rem;
  }

  h3 {
    color: #FFD166;
    font-size: 1.4rem;
  }

  p {
    margin: 1rem 0;
    color: #64748b;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0 4rem;
      text-align: left;
    }

    .hero__left {
      flex-basis: 50%;
    }

    .hero__right {
      flex-basis: 50%;
    }
  }
`;

export default StyledHero;