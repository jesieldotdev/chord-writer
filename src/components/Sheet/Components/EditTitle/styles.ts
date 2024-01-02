import styled from "styled-components";
import { Theme } from "../../../../global/themes";

export const Input = styled.input<Theme>`
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.text};
  width: 67px;
  padding: 8px;
  height: 14px;
  border-radius: 8px;
  outline: none;
  border: 0px solid blue;

  &:hover {
    border: 1px solid ${(props) => props.theme.text};
  }

  &:focus {
    outline: none;

    border: 1px solid ${(props) => props.theme.text};
  }
`;
