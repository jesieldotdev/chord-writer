import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  /* margin-bottom: auto; */
 
  /* height: calc(100vh - 120px); */

  ::-webkit-scrollbar {
    display: none;
  }

  button {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
  }
`;
export const Title = styled.div`
  font-weight: 300;
  font-size: 20px;
  margin-bottom: auto;
  justify-content: center;
  /* margin-right: auto;
margin-left: auto; */
  width: 100%;
  text-align: left;
  margin-left: 22px;

  color: ${(props) => props.theme.text};
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: auto;
  position: fixed;
  top: 0px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-top: 8px;
  background-color: ${(props) => props.theme.body};
  box-shadow: 0px 10px 70px -10px ${(props) => props.theme.boxShadowColor};
  margin-top: -4px;
  margin-bottom: 4px;

  .note-icon {
    /* display: flex; */
    /* align-items: center; */
  }
`;


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
  margin-top: -8px;
  margin-bottom: 8px;
`;

export const Content = styled.div`
padding: 24px 20px;
margin-top: auto;
`

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
`;

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

  margin-bottom: 20px;
  box-sizing: border-box;
  align-items: flex-start;
  margin: 4px;

  label {
    font-size: 12px;
    font-weight: 300;
  }
`;

export const VerseContainer = styled.div`
  overflow-y: scroll;
  margin-top: 8px;
  
  .verse-title {
    font-size: 16px;
    font-weight: 200;
  }

   margin-top: 64px;

  /* height: 100vh; */
  /* background-color: red; */
`;

export const EmptyComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
