import styled from "styled-components";

const StyledCovidForm = styled.div`
  margin: 3rem 1rem;

  section {
    display: flex;
    flex-direction: column;
  }

  .form__left {
    display: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .form__right {
    margin: auto 1rem;
  }

  h2 {
    text-align: center;
    font-size: 2.44rem;
    color: #6C63FF;
    margin-bottom: 1rem;
  }

  .form__content {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  label {
    color: #64748B;
    margin-bottom: 0.5rem;
  } 

  .form__input {
    padding: 0.6rem;
    font-size: 16px;
    color: #333333;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    outline-color: #2684FF;
  }

  .form__input:hover {
    border: 1px solid #B3B3B3;
  }

  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 3rem auto;
    }
    
    section {
      margin: 2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .form__left {
      flex-basis: 50%;
      display: block;
    }

    .form__right {
      flex-basis: 50%;
      margin: auto;
    }
  }
`;

export default StyledCovidForm;