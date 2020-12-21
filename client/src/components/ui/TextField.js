import styled from 'styled-components';

const TextField = styled.input`
  max-width: 100%;
  height: 25px;
  background-color: rgba(255, 255, 255, 0);
  border-bottom: 1px solid ${props => props.theme.colors.primary.unfocused};
  color: white;
  border-right: none;
  font-size: 14px;
  padding: 6px;
  margin-bottom: 16px;
  transition: 0.25s ease;

  &:focus {
    border-bottom: 1px solid ${props => props.theme.colors.primary.normal};
    outline: none;
  }
`;

export default TextField;