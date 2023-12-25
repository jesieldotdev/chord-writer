// themes.ts
export interface Theme {
    body: string;
    text: string;
    buttonBackground: string
    // adicione outras propriedades conforme necessário
  }
  
  export const lightTheme: Theme = {
    body: '#ffffff',
    text: '#787878',
    buttonBackground: '#f9f9f9',


    // adicione outras propriedades conforme necessário
  };
  
  export const darkTheme: Theme = {
    body: '#1a1a1a',
    text: '#ffffff',
    buttonBackground: '#282828'
    // adicione outras propriedades conforme necessário
  };
  