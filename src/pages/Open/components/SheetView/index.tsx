import ChordInput from "../../../../components/Input";
import ChordSheet from "../../../../components/Sheet";
import * as S from "./styles";
// import HomeViewController from "./viewController";
import ThemeToggle from "../../../../components/ThemeToggle";
import { MusicNote } from "styled-icons/material";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../../global/Context";
import { KeyboardHide } from "@styled-icons/material-rounded";
import { FolderOpen, Save } from "styled-icons/boxicons-solid";
import { Link, useParams } from "react-router-dom";
import HomeViewController from "../../../Home/viewController";
import SheetViewController from './viewController'
import { Music, VerseProps } from "../../../../types";
import React from "react";
import EditTitle from "../../../../components/Sheet/Components/EditTitle";

const SheetView = () => {
  const [editVerseTitle, setEditVerseTitle] = React.useState<string>();
  const [editMode, setEditMode] = React.useState<boolean>(false);

  function editVerse(verseId: string) {
    setEditMode(true);
    setEditVerseTitle(verseId);
  }
  const { id } = useParams();
  console.log(id)
  const viewController = HomeViewController();
  
  const [data, setData] = useState<Music>()


  useEffect(() => {
      fetch(`http://ec2-18-231-159-123.sa-east-1.compute.amazonaws.com:5000/music/${id}`)
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
        <S.Title theme={theme}>
        <Link to="/">
          <MusicNote className="note-icon" color={theme.text} size={20} />
          {data?.name}
          </Link>
        </S.Title>
        {/* <Save
            color={theme.text}
            size={32}
            style={{
              marginRight: 8,
            }}
          /> */}
        <Link to="/sheets">
          <FolderOpen
            color={theme.text}
            size={32}
            style={{
              marginRight: 8,
            }}
          />
        </Link>
        {/* <KeyboardHide
          onClick={() => viewController.setShowKeyboard(false)}
          color={theme.text}
          size={32}
          style={{
            marginRight: 8,
          }}
        /> */}
        <ThemeToggle />
      </S.Header>

   <S.InputContainer theme={theme}>

   <>
      {data && data.sheets.length > 0 ? (
        <S.VerseContainer>
          {data?.sheets.map((verse) => {
            return (
              <>
               {editMode && editVerseTitle === verse.id ? (
                    <EditTitle
                      editTitleFn={editTitleFn}
                      setShow={setEditMode}
                      value={verse}
                    />
                  ) : (
                    <label
                      onClick={() => editVerse(verse.id)}
                      className="verse-title"
                    >
                      {verse.name}
                    </label>
                  )}
                <S.Verse
                  key={verse.id}
                 
                  theme={theme}
                  className="sheetBlock"
                >
                  {/* {editMode && editVerseTitle === verse.id ? (
                    <EditTitle
                      editTitleFn={editTitleFn}
                      setShow={setEditMode}
                      value={verse}
                    />
                  ) : (
                    <label
                      onClick={() => editVerse(verse.id)}
                      className="title"
                    >
                      {verse.name}
                    </label>
                  )} */}
                  {verse.chords?.map((inp) => (
                    <S.ChordItem  onClick={() => {
                      editMode ? setEditMode(false) : null;
                    }} theme={theme}>
                      {inp.note}
                      <label>
                        {inp.intervals.map((n, index) => {
                          return (
                            <>
                              {index !== 0 && inp.intervals.length > index
                                ? "/"
                                : null}
                              {n}
                            </>
                          );
                        })}
                      </label>
                    </S.ChordItem>
                  ))}
                </S.Verse>
              </>
            );
          })}
        </S.VerseContainer>
      ) : null}

  
    </>


        {/* <ChordSheet
          editTitleFn={viewController.editTitle}
          verses={data?.sheets}
          chords={viewController.sheet}
        /> */}

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
