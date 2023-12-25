import ChordInput from "../components/Input";
import ChordSheet from "../components/Sheet";
import * as S from "./styles";
import HomeViewController from "./viewController";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  const viewController = HomeViewController();

  return (
    <S.Container>
      <ThemeToggle/>
      <S.Title>Chord Writter</S.Title>
      <ChordSheet chords={viewController.sheet} />

      <ChordInput
      
        addChord={viewController.addChord}
        removeChord={viewController.removeChord}
        notes={viewController.notes}
        intervals={viewController.intervals}
      />
    </S.Container>
  );
};

export default Home;
