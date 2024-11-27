import ChordInput from "../../components/Input";
import ChordSheet from "../../components/Sheet";
import * as S from "./styles";
// import HomeViewController from "./viewController";
import ThemeToggle from "../../components/ThemeToggle";
import { MusicNote } from "styled-icons/material";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../global/Context";
import { KeyboardHide } from "@styled-icons/material-rounded";
import { FolderOpen, Save } from "styled-icons/boxicons-solid";
import { Link, useParams } from "react-router-dom";
import HomeViewController from "../Editor/viewController";
import SheetViewController from "./viewController";
import { Music, VerseProps } from "../../types";
import React from "react";
import EditTitle from "../../components/Sheet/Components/EditTitle";
import { FileEmpty } from "styled-icons/icomoon";
import { getMusicById } from "../../api/services";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CiFolderOn, CiMusicNote1 } from "react-icons/ci";


const SheetView = () => {
  const [editVerseTitle, setEditVerseTitle] = React.useState<string>();
  const [editMode, setEditMode] = React.useState<boolean>(false);

  const { theme } = React.useContext(Context);

  const viewController = SheetViewController();

  React.useEffect(() => {
    document.title =
      viewController.data?.name !== undefined
        ? `${viewController.data?.name} - Chord Writer`
        : "Chord Writter";
  }, [viewController.data?.name]);

  function editVerse(verseId: string) {
    setEditMode(true);
    setEditVerseTitle(verseId);
  }


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
        <S.Title
        
        theme={viewController.theme}>
          <Link
            style={{
              color: viewController.theme.text,
            }}
            to="/"
          >
            <CiMusicNote1
              className="note-icon"
              color={viewController.theme.text}
              size={26}
              style={{
                marginTop: 8
              }}
            />
            <label style={{
            }}> {viewController.data?.name}</label>
            {viewController.loading ? (
              <Skeleton
                baseColor={theme.keyboardBackGround}
                borderRadius={8}
                highlightColor={theme.backgroundFocus}
                style={{}}
                containerClassName="flex-1"
                height={28}
                width={200}
              />
            ) : null}
          </Link>
        </S.Title>
        {/* <Save
            color={theme.text}
            size={32}
            style={{
              marginRight: 8,
            }}
          /> */}
        <Link to="/">
          <CiFolderOn size={24} color={theme.text} style={{
            marginRight: 8,
            marginTop: 8
          }} />
          {/* <FolderOpen
            color={viewController.theme.text}
            size={24}
            style={{
              marginRight: 8,
            }}
          /> */}
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

      <S.Content theme={viewController.theme}>
        <>
          {viewController.loading ? (
            <S.VerseContainer>
              <p>Verse</p>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginTop: 120
                }}
              >
                {[...Array(7).keys()].map((i) => (
                  <Skeleton
                    key={i}
                    baseColor={theme.keyboardBackGround}
                    borderRadius={8}
                    highlightColor={theme.backgroundFocus}
                    style={{}}
                    count={3}
                    containerClassName="flex-1"
                    height={32}
                    width={44}
                  />
                ))}
              </div>
            </S.VerseContainer>
          ) : null}
          {viewController?.data && viewController.data.sheets.length > 0 ? (
            <S.VerseContainer>
              {viewController.data?.sheets.map((verse) => {
                return (
                  <div key={verse.id}>
                    {/* {editMode && editVerseTitle === verse.id ? (
                      <EditTitle
                        key={verse._id}
                        editTitleFn={EditTitle}
                        setShow={setEditMode}
                        value={verse}
                      />
                    ) : ( */}
                    <label
                      key={verse.id}
                      onClick={() => editVerse(verse.id)}
                      className="verse-title"
                    >
                      {verse.name}
                    </label>
                    {/* )} */}
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
                      {verse.chords.map((item, index) => ({ id: index, ...item })).map((inp) => (
                        <S.ChordItem
                          key={inp.id}
                          onClick={() => {
                            editMode ? setEditMode(false) : null;
                          }}
                          theme={viewController.theme}
                        >
                          {inp.note}
                          <label>
                            {inp.intervals.map((n, index) => {
                              return (
                                <React.Fragment key={n}>
                                  {index !== 0 && inp.intervals?.length > index
                                    ? "/"
                                    : null}
                                  {n}
                                </React.Fragment>
                              );
                            })}
                          </label>
                        </S.ChordItem>
                      ))}
                    </S.Verse>
                  </div>
                );
              })}
            </S.VerseContainer>
          ) : !viewController.loading ? (
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


      </S.Content>

    </S.Container>
  );
};

export default SheetView;
