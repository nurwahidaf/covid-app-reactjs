import StyledRegion from './Region.styled';
import { FaAmbulance, FaLaughBeam, FaSkull } from 'react-icons/fa';

const Region = (props) => {
  const {region} = props;
  
  return (
    <StyledRegion>
      <h2 className="region__name">{region.name}</h2>
      <div className="region__container">
        <div>
          <p>Confirmed</p>
          <h4 className="data__confirmed">{region.numbers.confirmed}</h4>
        </div>
        <div className="data__icon">
          <FaAmbulance style={{ fontSize: '25px', color: '#FFD166' }} />
        </div>
      </div>
      <div className="region__container">
        <div>
          <p>Recovered</p>
          <h4 className="data__recovered">{region.numbers.recovered}</h4>
        </div>
        <div className="data__icon">
          <FaLaughBeam style={{ fontSize: '25px', color: '#118AB2' }} />
        </div>
      </div>
      <div className="region__container">
        <div>
          <p>Death</p>
          <h4 className="data__death">{region.numbers.death}</h4>
        </div>
        <div className="data__icon">
          <FaSkull style={{ fontSize: '25px', color: '#EF476F' }} />
        </div>
      </div>
    </StyledRegion>
  )
}

export default Region;