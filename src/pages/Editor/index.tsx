import ChordInput from "../../components/Input";
import ChordSheet from "../../components/Sheet";
import * as S from "./styles";
import HomeViewController from "./viewController";
import ThemeToggle from "../../components/ThemeToggle";
import { MusicNote } from "styled-icons/material";
import { useContext } from "react";
import { Context } from "../../global/Context";
import { KeyboardHide } from "@styled-icons/material-rounded";
import { FolderOpen, Save } from "styled-icons/boxicons-solid";
import { Link } from "react-router-dom";
import TitleEdit from "../../components/TitleEdit";
import { CiFolderOn, CiFloppyDisk } from "react-icons/ci";
import DropDownMenu from "../../components/Dropdown";



const Editor = () => {
  const viewController = HomeViewController();
  const { theme } = useContext(Context);

  return (
    <S.Container
      onClick={() =>
        !viewController.showKeyboard
          ? viewController.setShowKeyboard(true)
          : null
      }
    >
      <S.Header
        theme={theme}
        style={{
          marginRight: 16,
        }}
      >
        <S.Title>
          <MusicNote
            style={{
              marginRight: 8,
            }}
            className="note-icon"
            color={theme.text}
            size={20}
          />
          {/* {document.title} */}
          {!viewController.editMode ? (
            <label onClick={() => viewController.setEditMode(true)}>
              {viewController.title}
            </label>
          ) : (
            <TitleEdit
              title={viewController.title}
              setTitle={viewController.setTitle}
              setShow={viewController.setEditMode}
            />
          )}
        </S.Title>

        {!viewController.editMode ? (
          <>
            <CiFloppyDisk
              onClick={() => viewController.postMusic()}
              color={theme.text}
              size={24}
              style={{
                marginRight: 8,
              }}
            />
            <Link to="/sheets">
              <CiFolderOn
                color={theme.text}
                size={24}
                style={{
                  marginRight: 8,
                  marginTop: 8
                }}
              />
            </Link>
            {/* <KeyboardHide
              onClick={() => viewController.setShowKeyboard(false)}
              color={theme.text}
              size={24}
              style={{
                marginRight: 8,
              }}
            /> */}
            <ThemeToggle />
            <DropDownMenu style={{
              marginLeft: 8,
              marginRight: -8,
            }}/>
          </>
        ) : null}
      </S.Header>

      <S.InputContainer theme={theme}>
        <ChordSheet
        showKeyboard={viewController.showKeyboard}
          editTitleFn={viewController.editTitle}
          verses={viewController.verses}
          chords={viewController.sheet}
        />

        <ChordInput
          show={viewController.showKeyboard}
          setShow={viewController.setShowKeyboard}
          addChord={viewController.addChord}
          removeChord={viewController.removeChord}
          newLine={viewController.newLine}
          notes={viewController.notes}
          intervals={viewController.intervals}
        />
      </S.InputContainer>
    </S.Container>
  );
};

export default Editor;
