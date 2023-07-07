import styled from "styled-components";

const StyledProvinceTable = styled.section`
  margin: 4rem 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  .header {
    margin: 2rem 0;
  }

  .title {
    font-size: 2.44rem;
    color: #6C63FF;
  }

  .subtitle {
    font-size: 1.4rem;
    color: #FFD166;
  }

  table, th, td {
    border: 2px solid #64748b;
    text-align: center;
    padding: 0.4rem;
  }

  table {
    width: 100%;
    margin: 0 auto 2rem auto;
    border-collapse: collapse;
    border-radius: 5px;
    border-style: hidden;
    box-shadow: 0 0 0 1px #64748b;
  }

  th {
    color: #6C63FF;
  }

  @media (min-width: 992px) {
    table {
      width: 75%;
    }
  }
`;

export default StyledProvinceTable;