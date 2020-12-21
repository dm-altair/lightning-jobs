import styled, {css} from 'styled-components'

const Button = styled.button`
  width: ${props=> props.fluid ? "100%" : "auto"};
  margin: ${props=>props.fluid ? 0 : '0 12px' };
  text-transform: uppercase;
  font-weight: 100;
  padding: 12px 16px;
  border-radius: 2px;
  transition: .25s ease;
  cursor: pointer;

  ${props=>{
    if(props.outline){
      return css`
        background-color: transparent;
        color: ${props.theme.colors.primary.normal};
        border: 1px solid ${props.theme.colors.primary.unfocused};
      `
    }
    return css`
      background-color: ${props=>props.theme.colors.primary.normal};
      color: black;
      border: none;
    `
  }}

  &:hover, &:focus{
    border: 1px solid ${props=>props.theme.colors.primary.normal};
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
    outline: none;
    background-color: ${props=>props.theme.colors.primary.transparent};
  }
`

export default Button