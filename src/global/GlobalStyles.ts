// GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';
import { Theme } from './themes';

interface GlobalStylesProps {
  Theme: Theme;
}
export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  body {
    background-color: ${(props) =>  props.Theme.body};
    color: ${(props) =>  props.Theme.text};
    // adicione outras propriedades conforme necessário
  }
`;
