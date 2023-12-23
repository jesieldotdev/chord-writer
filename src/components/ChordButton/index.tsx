import React from "react";
import * as S from "./styles";

interface ChordButtonProps {
  // label: string
  onClick?: any
  // Children: string
}

const ChordButton = ({ children }, {onClick}:ChordButtonProps) => {
  return (
    <S.Button onClick={()=> onClick ? onClick() : null}>{children}</S.Button>
  );
};

export default ChordButton;
