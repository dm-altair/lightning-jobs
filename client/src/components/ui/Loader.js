import styled from 'styled-components';
import loading from '../../images/loader.gif';

const Overlay = styled.div`
  position: absolute;
  z-index: 9;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  background-color: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items:center;
`

const Gif = styled.img`
  width: 100px;
`

const Loader = ()=>{
  return(
  <Overlay>
    <Gif src={loading} alt="loader"/>
  </Overlay>
  )
}
export default Loader;