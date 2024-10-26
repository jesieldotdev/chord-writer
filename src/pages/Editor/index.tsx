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
import { Link } from "react-router-dom";
import TitleEdit from "../../components/TitleEdit";
import { enqueueSnackbar } from "notistack";

const Editor = () => {
  const viewController = HomeViewController();
  const { theme } = useContext(Context);
  const [jsonInput, setJsonInput] = useState("");

  const handleJsonSave = () => {
    try {
      // Log para ver o que está sendo processado
      console.log("JSON de entrada:", jsonInput);

      const cleanedJsonInput = jsonInput.replace(/\s+/g, ' ').trim();
      console.log("JSON limpo:", cleanedJsonInput); // Exibir o JSON limpo

      const parsedData = JSON.parse(cleanedJsonInput);
      viewController.postMusicJson(parsedData);
    } catch (error) {
      console.error("Erro ao parsear o JSON:", error);
      enqueueSnackbar("Erro ao parsear o JSON. Verifique o formato.");
    }
  };

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
                  marginTop: 8,
                }}
              />
            </Link>
            <ThemeToggle />
            <DropDownMenu style={{
              marginLeft: 8,
              marginRight: -8,
            }} />
          </>
        ) : null}
      </S.Header>

      <S.InputContainer theme={theme}>
        <textarea
          style={{ width: "100%", height: "100px", marginBottom: "16px" }}
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Cole seu JSON aqui..."
        />

        <button onClick={handleJsonSave} style={{ marginBottom: "16px" }}>
          Salvar JSON
        </button>

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
