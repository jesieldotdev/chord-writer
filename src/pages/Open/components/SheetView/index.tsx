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
import SheetViewController from "./viewController";
import { Music, VerseProps } from "../../../../types";
import React from "react";
import EditTitle from "../../../../components/Sheet/Components/EditTitle";
import { FileEmpty } from "styled-icons/icomoon";
import { getMusicById } from "../../../../api/services";

const SheetView = () => {
  const [editVerseTitle, setEditVerseTitle] = React.useState<string>();
  const [editMode, setEditMode] = React.useState<boolean>(false);

  function editVerse(verseId: string) {
    setEditMode(true);
    setEditVerseTitle(verseId);
  }

  const viewController = SheetViewController()


  return (
    <S.Container
    //   onClick={() =>
    //     !viewController.showKeyboard
    //       ? viewController.setShowKeyboard(true)
    //       : null
    //   }
    >
      <S.Header
        theme={viewController.theme}
        style={{
          marginRight: 16,
        }}
      >
        <S.Title theme={viewController.theme}>
          <Link
            style={{
              color: viewController.theme.text,
            }}
            to="/"
          >
            <MusicNote className="note-icon" color={viewController.theme.text} size={20} />
            <label> {viewController.data?.name}</label>
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
            color={viewController.theme.text}
            size={24}
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

      <S.InputContainer theme={viewController.theme}>
        <>
          {viewController.data && viewController.data.sheets.length > 0 ? (
            <S.VerseContainer>
              {viewController.data?.sheets.map((verse) => {
                return (
                  <>
                    {editMode && editVerseTitle === verse.id ? (
                      <EditTitle
                        editTitleFn={EditTitle}
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
                      theme={viewController.theme}
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
                        <S.ChordItem
                          onClick={() => {
                            editMode ? setEditMode(false) : null;
                          }}
                          theme={viewController.theme}
                        >
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
          ) : (
            <S.EmptyComponent>
              <FileEmpty
                style={{
                  marginRight: 8,
                }}
                size={24}
              />
              <label
                style={{
                  fontSize: 24,
                  fontWeight: 300,
                  color: viewController.theme.text,
                }}
              >
                Sem registros
              </label>
            </S.EmptyComponent>
          )}
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
