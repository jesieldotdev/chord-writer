import styled from "styled-components";
import { Theme } from "../../global/themes";

export const Content = styled.div<Theme>`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input<Theme>`
  background-color: ${(props) => props.theme.keyboardBackGround};
  color: ${(props) => props.theme.text};
  min-width: 67px;
  max-width: 200px;
  padding: 8px;
  height: 14px;
  border-radius: 8px;
  outline: none;
  border: 0px solid blue;
  font-size: 18px;
  font-weight: 400;
  outline: none;
  font-family: "Poppins", sans-serif;
  text-overflow: ellipsis;

  &:hover {
    /* border: 1px solid ${(props) => props.theme.text}; */
    background-color: ${(props) => props.theme.backgroundFocus};
  }

  &:focus {
    outline: none;

    border: 0px solid ${(props) => props.theme.text};
  }
`;
