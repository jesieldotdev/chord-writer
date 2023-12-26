import React, { useContext } from "react";
import * as S from "./styles";
import { Context } from "../../../../global/Context";
import { NewTitle, SheetProps, VerseProps } from "../../../../types";

interface EditTitleProps {
  value: VerseProps;
  setShow: any;
  editTitleFn: (verse: NewTitle) => any
}

const EditTitle = ({ value, setShow, editTitleFn }: EditTitleProps) => {
  const { theme } = useContext(Context);
  const [title, setTitle] = React.useState<string>(value.name);

  const handleClickEnter = (event) => {
    if (event.key === "Enter") {
      editTitleFn({id: value.id, newName: title});
      setShow(false);
    }
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <S.Input
        theme={theme}
        value={title}
        onKeyPress={handleClickEnter}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default EditTitle;
