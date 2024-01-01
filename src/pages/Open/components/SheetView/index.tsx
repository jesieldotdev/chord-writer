import ChordInput from "../../../../components/Input";
import ChordSheet from "../../../../components/Sheet";
import * as S from "./styles";
// import HomeViewController from "./viewController";
import ThemeToggle from "../../../../components/ThemeToggle";
import { MusicNote } from "styled-icons/material";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../../global/Context";
import { KeyboardHide } from "@styled-icons/material-rounded";
import { FolderOpen } from "styled-icons/boxicons-solid";
import { Link, useParams } from "react-router-dom";
import HomeViewController from "../../../Home/viewController";
import SheetViewController from './viewController'
import { VerseProps } from "../../../../types";

const SheetView = () => {
  const { id } = useParams();
  console.log(id)
  const viewController = HomeViewController();
  
  const [data, setData] = useState<VerseProps[]>([])


  useEffect(() => {
      fetch(`http://ec2-18-231-159-123.sa-east-1.compute.amazonaws.com:5000/verse/${id}`)
        .then((response) => {
          if (!response.ok) throw new Error("Erro na requisição");
          return response.json();
        })
        .then((data) => setData(data))
        .catch((error) => console.log(error));
     }, []);
  const { theme } = useContext(Context);


console.log(data)


  return (
    <S.Container
    //   onClick={() =>
    //     !viewController.showKeyboard
    //       ? viewController.setShowKeyboard(true)
    //       : null
    //   }
    >
      <S.Header
        theme={theme}
        style={{
          marginRight: 16,
        }}
      >
        <S.Title>
          <MusicNote className="note-icon" color={theme.text} size={20} />
          {document.title}
        </S.Title>
        <Link to="/sheets">
          <FolderOpen
            color={theme.text}
            size={32}
            style={{
              marginRight: 8,
            }}
          />
        </Link>
        <KeyboardHide
          onClick={() => viewController.setShowKeyboard(false)}
          color={theme.text}
          size={32}
          style={{
            marginRight: 8,
          }}
        />
        <ThemeToggle />
      </S.Header>

   <S.InputContainer theme={theme}>
        <ChordSheet
          editTitleFn={viewController.editTitle}
          verses={[data]}
          chords={viewController.sheet}
        />

        {/* <ChordInput
          show={viewController.showKeyboard}
          setShow={(e) => viewController.setShowKeyboard(e)}
          addChord={viewController.addChord}
          removeChord={viewController.removeChord}
          newLine={viewController.newLine}
          notes={viewController.notes}
          intervals={viewController.intervals}
        /> */}
      </S.InputContainer> 
    </S.Container>
  );
};

export default SheetView;
