import StyledProvinceRow from './ProvinceRow.styled';

const ProvinceRow = (props) => {
  const {province, index} = props;

  return (
    <StyledProvinceRow>
      <tr>
        <td>{index + 1}</td>
        <td>{province.kota ?? province.name}</td>
        <td>{province.kasus ?? province.numbers.confirmed}</td>
        <td>{province.sembuh ?? province.numbers.recovered}</td>
        <td>{province.dirawat ?? province.numbers.treatment}</td>
        <td>{province.meninggal ?? province.numbers.death}</td>
      </tr>
    </StyledProvinceRow>
  )
}

export default ProvinceRow;