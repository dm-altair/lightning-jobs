import styled from 'styled-components';

const Label = styled.label`
  color: ${props => props.theme.colors.primary.normal};
  text-transform: uppercase;
  margin-bottom: 6px;
  font-weight: 100;
`;

export default Label