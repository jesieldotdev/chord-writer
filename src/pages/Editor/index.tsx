import ChordInput from "../../components/Input";
import ChordSheet from "../../components/Sheet";
import * as S from "./styles";
import HomeViewController from "./viewController";
import ThemeToggle from "../../components/ThemeToggle";
import { MusicNote } from "styled-icons/material";
import { useContext, useState } from "react";
import { Context } from "../../global/Context";
import { CiFolderOn, CiFloppyDisk } from "react-icons/ci";
import DropDownMenu from "../../components/Dropdown";

import TitleEdit from "../../components/TitleEdit";
import { enqueueSnackbar } from "notistack";
import { JSONImport } from "./components/JSONImport";
import { HeaderContent } from "./components/HeaderContent";

const Editor = () => {
  const { addChord,
    editMode,
    editTitle, intervals,
    newLine,
    notes,
    options,
    postMusic,
    postMusicJson,
    removeChord,
    setEditMode,
    setSheet,
    setShowKeyboard,
    setTitle,
    sheet,
    showKeyboard,
    title,
    verses,
    handleJsonSave,
    jsonInput,
    showJSONForm,
    theme,
    setJsonInput,
    showDropdown,
    setShowDropdown
  } = HomeViewController();


  return (
    <S.Container
      onClick={() =>
        !showKeyboard
          ? setShowKeyboard(true)
          : null
      }
    >
      <S.Header
        theme={theme}
        style={{
          marginRight: 16,
        }}
      >

        <HeaderContent
          editMode={editMode}
          options={options}
          postMusic={postMusic}
          setEditMode={setEditMode}
          setTitle={setTitle}
          theme={theme}
          title={title}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}

        />
      </S.Header>

      <S.InputContainer theme={theme}>

        {
          showJSONForm ? <JSONImport
            jsonInput={jsonInput}
            setJsonInput={setJsonInput}
            handleJsonSave={handleJsonSave} /> : null
        }


        <ChordSheet
        
          showKeyboard={showKeyboard}
          editTitleFn={editTitle}
          verses={verses}
          chords={sheet}
        />

        <ChordInput
          show={showKeyboard}
          setShow={setShowKeyboard}
          addChord={addChord}
          removeChord={removeChord}
          newLine={newLine}
          notes={notes}
          intervals={intervals}
        />
      </S.InputContainer>
    </S.Container>
  );
};

export default Editor;
