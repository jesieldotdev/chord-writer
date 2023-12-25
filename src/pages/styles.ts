import styled from "styled-components";

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

`;


export const Header = styled.div`
display: flex;
margin-bottom: auto;
justify-content: center;
align-items: center;
width: 100%;
padding-right: 16px;
padding-bottom: 8px;
background-color: ${(props) => props.theme.body};
box-shadow: 0px 10px 40px -10px ${(props) => props.theme.boxShadowColor };
margin-top: -4px;

.note-icon{
  /* display: flex; */
  /* align-items: center; */
}

`

export const InputContainer = styled.div`
margin-top: auto;
`