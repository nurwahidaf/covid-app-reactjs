import StyledGlobals from './Globals.styled';
import Global from '../Global';

const Globals = (props) => {
  const {globals} = props;
  const {title, subtitle} = props;
  
  return (
    <StyledGlobals>
      <div className="globals">
        <div className="header">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
        <div className="globals__container">
          {globals.map((global) => {
            return <Global key={global.status} global={global} />
          })}
        </div>
      </div>
    </StyledGlobals>
  )
}

export default Globals;