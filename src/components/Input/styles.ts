import styled from "styled-components";
import { Theme } from "../../global/themes";

export const SheetInsert = styled.div`
 
 
 

`;
export const IntervalInsert = styled.div`
 
 
 
 
 
 

  /* flex-wrap: wrap;
  gap: 8px; */
  /* overflow-x: auto; */
 
  /* display: flex; */
   /* justify-content: space-between; */
`;

export const Button = styled.button<Theme>`
  font-size: 20px;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;

 
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.text};

  border-radius: 8px;

 
 

  font-weight: 200;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;

  .delete {
    width: 100%;
  }
`;
export const ButtonSmall = styled.button<Theme>`
  padding: 24px;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;

  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.text};
  border-radius: 8px;

 
  width: 30px;

  height: 32px;
  font-weight: 300;

  font-size: 16px;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: ${(props) => props.theme.keyboardBackGround};
  padding: 8px;
  border-radius: 8px;
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;


export const SheetWrapper = styled.div`
  overflow-y: auto;

  flex-wrap: wrap;
  display: flex;
  margin-bottom: 0;
  border-radius: 8px;
 background-color: ${(props) => props.theme.bgSecondary};
`;

export const Label = styled.label`
  text-align: center;
  /* width: 120px; */
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 16px;
`;

export const BlockSheet = styled.div`
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.text};
  border-radius: 8px;


  height: max-content;
  font-weight: 700;
  font-size: 22px;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  /* margin-bottom: 8px; */
  margin: 0;
  /* margin-top: 8px; */
  /* margin-bottom: 100px; */

  width: min-content; /* Ajuste conforme necessário */
  height: min-content; /* Ajuste conforme necessário */
  margin-bottom: 20px;
  box-sizing: border-box;
  align-items: flex-start;
  margin: 4px;

  label {
    font-size: 16px;
    font-weight: 300;
  }
`;