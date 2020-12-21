import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  body {
    margin: 0;
    margin-bottom: 32px;
    background-color: ${props=>props.theme.colors.background.darkest};
    color:white;
    *{
      font-family: "Montserrat", sans-serif;
    }
    
  }
`;
