import styled from "styled-components";

const StyledAbout = styled.div`
  margin: 2rem 1rem;

  .title {
    text-align: center;
    color: #6C63FF;
    font-size: 1.2rem;
  }

  section {
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
  }

  .about__left {
    margin-bottom: 2rem;
  }

  h2 {
    color: #118AB2;
    font-size: 1.8rem;
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
    max-width: 80%;
    height: auto;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 4rem auto;

    section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 1rem 4rem;
      text-align: left;
    }

    .about__left {
      flex-basis: 50%;
      margin: 0;
    }

    .about__right {
      flex-basis: 50%;
      margin: 0;
    }

    img {
      max-width: 100%;
    }
  }
`;

export default StyledAbout;