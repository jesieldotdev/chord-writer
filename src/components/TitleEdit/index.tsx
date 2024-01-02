import React, { useContext } from "react";
import * as S from "./styles";
import { Context } from "../../global/Context";
import { CheckCircleFill } from "styled-icons/bootstrap";

interface TitleProps {
//   name: string
  setTitle: any
  setShow: any
  title: string
}

const TitleEdit = ({ setShow, setTitle, title }: TitleProps) => {
  const { theme } = useContext(Context);

  const handleClickEnter = (event) => {
    if (event.key === "Enter") {

      setShow(false);
    }
  };

  function confirmFunction(){
    setShow(false);
  }

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <S.Content>
      <S.Input
        theme={theme}
        value={title}
        onKeyPress={handleClickEnter}
        onChange={(e) => handleChange(e)}
      />
      <CheckCircleFill onClick={()=> confirmFunction()} style={{
        marginLeft: 4,
        marginRight: 16,
      }} color={theme.text} size={20} />
    </S.Content>
  );
};

export default TitleEdit;
