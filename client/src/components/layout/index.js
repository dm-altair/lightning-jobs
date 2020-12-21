import styled from 'styled-components';

const Container = styled.main`
  width: 96%;
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : 'none')};
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Col = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export { Container, Row, Col };
