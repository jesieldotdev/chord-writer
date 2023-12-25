import styled from "styled-components";

export const SheetWrapper = styled.div`
  /* margin-bottom: auto; */
  /* display: grid; */
  /* gap: 8px; */
  /* text-align: center; */
  /* max-height: max-content; */
  /* max-width: 300px; */
  /* width: 100%; */
  overflow-y: scroll;
  margin-bottom: 16px;


    /* grid-template-columns: repeat(4, 1fr); */

      flex-wrap: wrap;
      /* justify-content: space-between; */
      display: flex;

    /* .grid-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    } */

    /* .grid-item {
      width: 23%; 
      margin-bottom: 20px;
      box-sizing: border-box;
    } */


`;

export const Label = styled.label`
  text-align: center;
  /* width: 120px; */
  display: flex;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const BlockSheet = styled.div`
  background-color: #363636;
  border-radius: 8px;

  padding: 8px;

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
