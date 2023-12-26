import styled from "styled-components";

export const SheetWrapper = styled.div`

  overflow-y: scroll;
  margin-bottom: 16px;


  flex-wrap: wrap;
  display: flex;
margin-bottom: 0;
margin-top: 8px;

`;

export const Label = styled.label`
  text-align: center;
  /* width: 120px; */
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const BlockSheet = styled.div`
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.text};
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


export const Verse = styled.div`
  /* background-color: #363636; */
  overflow-y: scroll;
  margin-bottom: 16px;


  flex-wrap: wrap;
  display: flex;

  .title{
    font-size: 12px;
    font-weight: 300;
  }

  

  
` 

export const ChordItem = styled.div`
 background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.text};
  border-radius: 8px;

  padding: 8px;

  height: max-content;
  font-weight: 700;
  font-size: 16px;
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
    font-size: 12px;
    font-weight: 300;
  }


`

export const VerseContainer = styled.div`
width: 100%;
  /* background-color: red; */
  height: 260px;
overflow-y: scroll;
margin-top: 8px;
`