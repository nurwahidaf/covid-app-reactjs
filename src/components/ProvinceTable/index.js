import StyledProvinceTable from './ProvinceTable.styled';
import ProvinceRow from '../ProvinceRow';

const ProvinceTable = (props) => {
  const {title, subtitle, provinces} = props;
  
  return (
    <StyledProvinceTable>
      <div className="header">
        <h2 className="title">{title}</h2>
        <h3 className="subtitle">{subtitle}</h3>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Province</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Treatment</th>
              <th>Death</th>
            </tr>
          </thead>
          {provinces.map((province, index) => {
            return <ProvinceRow key={province.kota || province.name} province={province} index={index} />
          })}
        </table>
      </div>
    </StyledProvinceTable>
  )
}

export default ProvinceTable;