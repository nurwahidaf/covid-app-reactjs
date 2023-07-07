import StyledRegions from './Regions.styled';
import Region from '../Region';

const Regions = (props) => {
  const {regions} = props;
  const {title, subtitle} = props;

  return (
    <StyledRegions>
      <div className="regions">
        <div className="header">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
        <div className="regions__container">
          {regions.map(function(region) {
            return <Region key={region.name} region={region} />
          })}
        </div>
      </div>
    </StyledRegions>
  )
}

export default Regions;