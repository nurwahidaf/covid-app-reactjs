import StyledGlobal from './Global.styled';

const Global = (props) => {
  const {global} = props;
  
  return (
    <StyledGlobal>
      <h3 className="status">{global.status}</h3>
      <h2 className="total">{global.total}</h2>
    </StyledGlobal>
  )
}

export default Global;