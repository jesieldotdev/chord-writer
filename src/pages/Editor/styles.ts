import styled from "styled-components";
import { Theme } from "../../global/themes";

export const TitleContent = styled.div<Theme>`
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  margin-top: auto;

  /* height: 100%; */
  height: calc(100vh - 120px);

  ::-webkit-scrollbar {
    display: none;
  }

  .title-content {
    max-width: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
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
  justify-content: left;
  /* margin-right: auto;
margin-left: auto; */
  width: 100%;
  text-align: left;
  margin-left: 22px;
  margin-right: auto;
font-weight: 500;
  max-width: max-content; 
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: row;
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
  margin-top: 0px;

  .note-icon {
    /* display: flex; */
    /* align-items: center; */
  }
`;

export const InputContainer = styled.div`
  margin-top: auto;
`;
