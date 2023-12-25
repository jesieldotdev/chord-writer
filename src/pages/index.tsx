import ChordInput from "../components/Input";
import ChordSheet from "../components/Sheet";
import * as S from "./styles";
import HomeViewController from "./viewController";
import ThemeToggle from "../components/ThemeToggle";
import { MusicNote } from "styled-icons/material";
import { useContext } from "react";
import { Context } from "../global/Context";
import { KeyboardHide } from "@styled-icons/material-rounded";

const Home = () => {
  const viewController = HomeViewController();
  const { theme } = useContext(Context);

  return (
    <S.Container onClick={() => !viewController.showKeyboard ? viewController.setShowKeyboard(true) : null}>
      <S.Header>
        <S.Title>
          <MusicNote color={theme.text} size={24} /> Chord Writter
        </S.Title>
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
      <ChordSheet
        verses={viewController.verses}
        chords={viewController.sheet}
      />

      <ChordInput
        show={viewController.showKeyboard}
        setShow={(e) => viewController.setShowKeyboard(e)}
        addChord={viewController.addChord}
        removeChord={viewController.removeChord}
        newLine={viewController.newLine}
        notes={viewController.notes}
        intervals={viewController.intervals}
      />
    </S.Container>
  );
};

export default Home;
