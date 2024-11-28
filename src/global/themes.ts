// themes.ts
export interface Theme {
  body: string;
  text: string;
  buttonBackground: string;
  boxShadowColor: string;
  keyboardBackGround: string;
  backgroundFocus: string
  bgSecondary: string
}

export const lightTheme: Theme = {
  body: "#ffffff",
  text: "#787878",
  buttonBackground: "#f9f9f9",
  boxShadowColor: "#bebebe",
  keyboardBackGround: "#eeeeee",
  backgroundFocus: '#eee',
  bgSecondary: "#fefefe"
  // adicione outras propriedades conforme necessário
};

export const darkTheme: Theme = {
  body: "#1a1a1a",
  text: "#ffffff",
  buttonBackground: "#282828",
  boxShadowColor: "rgba(0, 0, 0, 0.8)",
  keyboardBackGround: "#222",
  backgroundFocus: '#363636',
  bgSecondary: "#323232"
  // adicione outras propriedades conforme necessário
};
