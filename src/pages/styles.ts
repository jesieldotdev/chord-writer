import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  margin-top: auto;

  /* height: 100%; */
  height: calc(100vh - 20px);

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
  font-weight: 500;
  font-size: 22px;
  margin-bottom: auto;
  justify-content: start;
`;
