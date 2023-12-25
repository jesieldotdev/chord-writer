import styled from "styled-components";
import { Theme } from "../../global/themes";

export const SheetInsert = styled.div`
  /* margin-top: auto; */
  /* margin-bottom: -67px; */
  /* display: grid; */
  /* height: 200px; */
  /* grid-template-columns: repeat(12, 1fr);  */
  flex-wrap: wrap;
  /* justify-content: space-between; */
  display: flex;
  gap: 8px;
  justify-content: center;
  /* margin-left: 16px; */
  margin-bottom: 0px;
  
`;
export const IntervalInsert = styled.div`
  /* margin-top: auto; */
  /* margin-bottom: -67px; */
  /* display: grid; */
  /* max-height: min-content; */
  /* grid-template-columns: repeat(12, 1fr);  */
  gap: 8px;
  /* margin-bottom: 0;
  margin-top: 0; */
  margin-bottom: 8px;
  margin-top: 8px;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  display: flex;
  justify-content: center;
`;

export const Button = styled.button<Theme>`
  padding: 16px;
  font-size: 16px;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;

  /* background-color: #282828; */
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.text};

  border-radius: 8px;

  /* width: 33px; */
  /* width: max-content; */

  height: 64px;
  font-weight: 800;
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

  /* width: max-content; */
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
  max-width: 100%;
  /* overflow-y: hidden; */
  background-color: ${(props) => props.theme.keyboardBackGround};
padding: 0px;
border-radius: 8px;
margin-bottom: -52px;
padding-top: 8px;
/* background-color: red; */
/* display: flex; */
`;
