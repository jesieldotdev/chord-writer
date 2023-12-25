// themes.ts
export interface Theme {
    body: string;
    text: string;
    // adicione outras propriedades conforme necessário
  }
  
  export const lightTheme: Theme = {
    body: '#ffffff',
    text: '#000000',
    // adicione outras propriedades conforme necessário
  };
  
  export const darkTheme: Theme = {
    body: '#1a1a1a',
    text: '#ffffff',
    // adicione outras propriedades conforme necessário
  };
  