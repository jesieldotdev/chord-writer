import ChordInput from "../components/Input";
import ChordSheet from "../components/Sheet";
import * as S from "./styles";
import HomeViewController from "./viewController";
import ThemeToggle from "../components/ThemeToggle";
import { MusicNote } from "styled-icons/material";
import { useContext } from "react";
import { Context } from "../global/Context";

const Home = () => {
  const viewController = HomeViewController();
  const { theme } = useContext(Context);

  return (
    <S.Container onClick={() => viewController.setShowKeyboard(true)}>
      <S.Header>
        <S.Title>
        <MusicNote color={theme.text} size={24} /> Chord Writter 
        </S.Title>
        <ThemeToggle />
      </S.Header>
      <ChordSheet  chords={viewController.sheet} />

      <ChordInput
      show
      setShow={(e) => viewController.setShowKeyboard(e)}
        addChord={viewController.addChord}
        removeChord={viewController.removeChord}
        notes={viewController.notes}
        intervals={viewController.intervals}
      />
    </S.Container>
  );
};

export default Home;
